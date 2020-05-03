import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading} from "@ionic-native/device-orientation/ngx";
import { BehaviorSubject } from 'rxjs';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage  {

  x:number;
  y:number;
  z:number;
  timestamp:string;

  xStart:number;
  yStart:number;
  zStart:number;
  thStart: number;
  mhStart: number

  punch: number;
  jab: number;
  uppercut: number;
  hook: number;
  punchName: string;
  test: number;

  totalTime: number;
  totalPunches: number;
  punchespermin: number;
  totJabs: number;
  totUppercuts: number;

  isHidden = true;
  isShown = false
  count: boolean = false;

  id: any;
  idStartingPosition: any; 

  watch:any;
  magneticHeading:any ="";
  trueheading:any =""

  // variables for timmer
  time: BehaviorSubject<string> = new BehaviorSubject('00.00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer: number;
  interval;
  state: 'start'| 'stop' = 'stop';
  selectedTime: number = 1;
  circleR = circleR;
  circleDasharray = circleDasharray;
  fireBaseUser = firebase.auth().currentUser.email;
  
  constructor(private vibration: Vibration, public deviceMotion: DeviceMotion, public deviceOrientation:DeviceOrientation) { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.thStart = 0;
    this.mhStart = 0;
    this.jab=0;
    this.punch = 0;
    this.uppercut = 0;
    this.totalPunches = this.totpunches();
    this.totalTime = 0;
  }

    getTotalTime(time: number){
      this.totalTime += time;
      return this.totalTime;
      console.log(this.totalTime);
    }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedTime = event.target.value;
  }

  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue()
    this.interval = setInterval(()=> {
      this.updateTimeValue()
    }, 1000);
    
    this.getTotalTime(duration);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  percentageOffset(percent){
    const percentFloat = percent /100;
    return circleDasharray * (1-percentFloat);

  }

  updateTimeValue(){
    let minutes: any = this.timer /60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);
    
    const totalTime = this.selectedTime * 60;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);
    
    --this.timer;
    if (this.timer < -1) {
      this.startTimer(this.selectedTime);
      this.vibration.vibrate([1000, 500, 1000]);
      this.stop();
    } 

  }

  start(){
    
    this.isHidden = true;
    this.isShown = false;
    
    this.startTimer(this.selectedTime);
    this.startingPosition();
    this.resetValues();
    
    try {
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 170
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x =  acc.x;
        this.y =  acc.y;
        this.z =  acc.z;      
        

        if ( (( this.z >=-13  && this.z <=-7 ))) {
          this.punch += 1;   
          this.jab+=1; 
          this.punchName = "JAB";   
        }else if ((this.y >=-1  && this.y <= 3) && ( this.x >=-12  && this.x <=-8 )) {
          this.punch += 1;   
          this.uppercut+=1; 
          this.punchName = "UPPERCUT";   
        }

/*
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
       console.log(this.punch);
  
      });

      var test2:number ;
      this.test = this.thStart - this.trueheading;
      test2 = this.zStart - this.z;


      console.log("test "+test2);
      console.log(this.punch);
      
      this.punchName="";

    } catch (error) {
      alert("Error "+ error);
    }

    this.watch = this.deviceOrientation.watchHeading().subscribe((heading)=>{
      this.trueheading = heading.trueHeading;
      this.magneticHeading = heading.magneticHeading;
      this.timestamp = new Date(heading.timestamp).toString();
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  totpunches(){
    this.totalPunches = this.punch;
    console.log(" total punches " + this.totalPunches);
    return this.totalPunches ;
  } 

  punchesPerTime(){
    this.punchespermin = this.totalPunches / this.selectedTime;
    console.log(" punches per minute "+ this.selectedTime + " " + this.punchespermin);
    return this.punchespermin; 
  } 
  
  allJabs(){
    this.totJabs += this.jab; 
    console.log("all jabs "+this.jab);
    return this.totJabs;
  }

  allUppercuts(){
    this.totUppercuts += this.uppercut; 
    console.log("all uppercuts "+ this.uppercut);
    return this.totUppercuts;
  }

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
  stop(){
    this.totpunches();
    this.punchesPerTime();
    this.allJabs();
    this.allUppercuts();
    this.stopTimer();

    this.isHidden = false;
    this.isShown = true;

    this.id.unsubscribe();

    if (this.watch!= null || this.id != null) {
      this.watch.unsubscribe();
      this.id.unsubscribe();
    }


  }

  startingPosition() {
    try {
      
      var startReload: DeviceMotionAccelerometerOptions =
      {
        frequency: 500000000
      };

      this.watch = this.deviceOrientation.watchHeading(startReload).subscribe((heading)=>{
        this.thStart = heading.trueHeading;
        this.mhStart = heading.magneticHeading;
      });

      var subscription = this.deviceOrientation.watchHeading().subscribe(
        (data: DeviceOrientationCompassHeading) => console.log(data)
      );

      this.idStartingPosition = this.deviceMotion.watchAcceleration().subscribe((acc: DeviceMotionAccelerationData) => {
        this.xStart = acc.x;
        this.yStart = acc.y;
        this.zStart = acc.z;
      });

    } catch (error) {
      alert("Error "+ error);
    }
    
  }


}
