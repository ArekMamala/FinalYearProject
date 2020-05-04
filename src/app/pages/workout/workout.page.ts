import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading} from "@ionic-native/device-orientation/ngx";
import { BehaviorSubject } from 'rxjs';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';

// circle raious
const circleR = 80;
//mathematical formula circleDashArray
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage  {
  // the X, Y and Z values and timestamp for the device motion plugin
  x:number;
  y:number;
  z:number;
  timestamp:string;

  // starting position of each axis values for testing in devicemotion
  xStart:number;
  yStart:number;
  zStart:number;
  // values for the true heading in the device motion plugin
  thStart: number;
  mhStart: number

  // punches variables
  punch: number;
  jab: number;
  uppercut: number;
  hook: number;
  punchName: string;
  //testing variable
  test: number;

  // variables used for the workout feedback 
  totalTime: number;
  totalPunches: number;
  punchespermin: number;
  totJabs: number;
  totUppercuts: number;

  // variables used for hiding and showing the feedback card
  isHidden = true;
  isShown = false
  count: boolean = false;

  // variables id's used for the device motion plug in
  id: any;
  idStartingPosition: any; 

  // variables used for the headings in device motion
  watch:any;
  magneticHeading:any ="";
  trueheading:any =""

  // variables for timmer
  //behaviour object to record the time
  time: BehaviorSubject<string> = new BehaviorSubject('00.00');
  // necessary for percentageOffset method
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  // storing the timeer ins seconds where we are right now
  timer: number;
  interval;
  // stop and start state for the buttons 
  state: 'start'| 'stop' = 'stop';
  selectedTime: number = 1;
  // accessing circle constatnts 
  circleR = circleR;
  circleDasharray = circleDasharray;
  fireBaseUser = firebase.auth().currentUser.email;
  
  // constructor taking in the following featured used in this component
  constructor(private vibration: Vibration, public deviceMotion: DeviceMotion, public deviceOrientation:DeviceOrientation) { 
    // setting all values to initial value
    // setting axis values to zeros 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    // timestamp set to empty string
    this.timestamp = "-";
    // Axis start values initialized at zeros
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    // heading variables set to zeros 
    this.thStart = 0;
    this.mhStart = 0;
    // punching variables initialized at zeros
    this.jab=0;
    this.punch = 0;
    this.uppercut = 0;
    this.totalPunches = this.totpunches();
    this.totalTime = 0;
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedTime = event.target.value;
  }

  // method used to 
  // get the total time of the workout 
  getTotalTime(time: number){
    this.totalTime += time;
    return this.totalTime;
    console.log(this.totalTime);
  }

  //timer functionality
  startTimer(duration: number){
    this.state = 'start';
    // clear interval so multiple instances of the timer dont occure
    clearInterval(this.interval);
    //changing the time from minutes to seconds
    this.timer = duration * 60;
    // java script function to update the timer every second
    this.updateTimeValue()
    this.interval = setInterval(()=> {
      this.updateTimeValue()
    }, 1000);
    
    this.getTotalTime(duration);
  }

  // stop function for the timer 
  stopTimer(){
    // interval is cleared
    clearInterval(this.interval);
    // time is reset 
    this.time.next('00:00');
    // state is changed to stop
    this.state = 'stop';
  }

  //calculating what percentage of circle to fill depending on the time selected
  percentageOffset(percent){
    const percentFloat = percent /100;
    return circleDasharray * (1-percentFloat);

  }

  //updating time value
  updateTimeValue(){
    //setting the minutes and seconds 
    let minutes: any = this.timer /60;
    let seconds: any = this.timer % 60;

    // adding zero infront for format
    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    // adding them together
    const text = minutes + ':' + seconds;
    this.time.next(text);
    
    // calculating the total of start time
    const totalTime = this.selectedTime * 60;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    //updating the percentage behaviour subject everytime we calculate it
    this.percent.next(percentage);
    
    // every second taking away one 
    --this.timer;
    //when the timer is less than -1 
    // therefore zero shown 
    if (this.timer < -1) {
      // reset, vibrate and stop the timer
      this.startTimer(this.selectedTime);
      this.vibration.vibrate([1000, 500, 1000]);
      this.stop();
    } 
  }

  // The start function
  // carries out most of the functionallity 
  // calls other methods and puts them to work together
  start(){
    //setting the cards hidden and shown
    this.isHidden = true;
    this.isShown = false;
    
    // starting the timer with the startTimer method 
    // with the user selected time
    this.startTimer(this.selectedTime);
    // calling the starting position method 
    // which is working with the start position axis values 
    this.startingPosition();
    this.resetValues();
    
    // getting the X, Y and Z values from the device motion plugin
    try {
      // the refressing frequency of the values 
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 170
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        // setting the local X, Y and Z vaues to the 
        // accelerations X, Y and Z 
        this.x =  acc.x;
        this.y =  acc.y;
        this.z =  acc.z;      
        
        //if statments determining what punch is carried out
        if ( (( this.z >=-13  && this.z <=-7 ))) {
          // update the punch values when punch is valid 
          this.punch += 1;   
          this.jab+=1; 
          this.punchName = "JAB";   
          // set the puch name to the punch thrown
        }else if ((this.y >=-1  && this.y <= 3) && ( this.x >=-12  && this.x <=-8 )) {
          // update the punch values when punch is valid 
          this.punch += 1;   
          this.uppercut+=1; 
          // set the puch name to the punch thrown
          this.punchName = "UPPERCUT";   
        }

/*
        testing if statment for a better punching theory
        if ((this.zStart - this.z >= 6) && (this.yStart - this.y >= 8) ) {
          this.punch += 1;   
          this.jab+=1; 
          this.punchName = "JAB";   
        }else if ((this.xStart - this.x <= 6) && (this.yStart - this.y >= 7 )) {
          this.punch += 1;   
          this.uppercut+=1; 
          this.punchName = "UPPERCUT";   
        }  
*/
      // testing purposes printing out to the console 
       console.log(this.punch);
  
      });

      // testing the device orrientation variables 
      var test2:number ;
      this.test = this.thStart - this.trueheading;
      test2 = this.zStart - this.z;
      // outputing to the console for testing
      console.log("test "+test2);
      console.log(this.punch);
      //resetting the punchname to an empty string
      this.punchName="";

    } catch (error) {
      alert("Error "+ error);
    }

    //getting the deviceorientation variables  
    // saving them in the local heading variables  
    this.watch = this.deviceOrientation.watchHeading().subscribe((heading)=>{
      this.trueheading = heading.trueHeading;
      this.magneticHeading = heading.magneticHeading;
      this.timestamp = new Date(heading.timestamp).toString();
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  //calculating the total amount of punches 
  totpunches(){
    this.totalPunches = this.punch;
    console.log(" total punches " + this.totalPunches);
    return this.totalPunches ;
  } 

  // calculating the amount of punches per minute
  punchesPerTime(){
    this.punchespermin = this.totalPunches / this.selectedTime;
    console.log(" punches per minute "+ this.selectedTime + " " + this.punchespermin);
    return this.punchespermin; 
  } 
  
  // calculating all the jabs carried out
  allJabs(){
    this.totJabs += this.jab; 
    console.log("all jabs "+this.jab);
    return this.totJabs;
  }

  // calculating all the uppercuts carried out
  allUppercuts(){
    this.totUppercuts += this.uppercut; 
    console.log("all uppercuts "+ this.uppercut);
    return this.totUppercuts;
  }

  // resetting all values to their original values
  // to be ready for the next workout 
  resetValues(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.jab = 0;
    this.uppercut = 0;
    this.hook = 0;
    this.punchName = "";
    this.punch =0;
    this.totalTime = 0;
    this.totalPunches = 0;
    this.punchespermin =0;
    this.totJabs = 0;
    this.totUppercuts = 0; 
  }

  // stop function 
  // called when workout is completed
  stop(){
    // calculating the feedback after the workout
    this.totpunches();
    this.punchesPerTime();
    this.allJabs();
    this.allUppercuts();
    //stopping the timer
    this.stopTimer();
    // updating hidden and shown cards
    this.isHidden = false;
    this.isShown = true;
    //unsubscribing form the device motion
    this.id.unsubscribe();
    //unsubscribing form the device orientation\
    if (this.watch!= null || this.id != null) {
      this.watch.unsubscribe();
      this.id.unsubscribe();
    }
  }

  // starting position method
  // for the starting axis variables 
  startingPosition() {
    try {
      // realoding value
      var startReload: DeviceMotionAccelerometerOptions =
      {
        frequency: 500000000
      };

      // connecting to device orrientation
      // for heading values
      this.watch = this.deviceOrientation.watchHeading(startReload).subscribe((heading)=>{
        // setting local variables
        this.thStart = heading.trueHeading;
        this.mhStart = heading.magneticHeading;
      });

      var subscription = this.deviceOrientation.watchHeading().subscribe(
        (data: DeviceOrientationCompassHeading) => console.log(data)
      );
      // connecting to the device motion for starting axis variables 
      this.idStartingPosition = this.deviceMotion.watchAcceleration().subscribe((acc: DeviceMotionAccelerationData) => {
          // setting local variables
        this.xStart = acc.x;
        this.yStart = acc.y;
        this.zStart = acc.z;
      });

    } catch (error) {
      alert("Error "+ error);
    }
    
  }
}
