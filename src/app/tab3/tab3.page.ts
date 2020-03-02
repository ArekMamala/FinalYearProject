import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading} from "@ionic-native/device-orientation/ngx";
import { BehaviorSubject } from 'rxjs';
import { Vibration } from '@ionic-native/vibration/ngx';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  x:number;
  y:number;
  z:number;
  timestamp:string;

  xStart:number;
  yStart:number;
  zStart:number;

  punch: number;
  jab: number;
  uppercut: number;
  hook: number;
  punchName: string;

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
  selectedTime: number = 5;
  circleR = circleR;
  circleDasharray = circleDasharray;

  constructor(private vibration: Vibration, public deviceMotion: DeviceMotion, public deviceOrientation:DeviceOrientation) { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.punch = 0 ;

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
    } 

    
  }

  start(){
    try {
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 1000
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x =  acc.x;
        this.y =  acc.y;
        this.z =  acc.z;
        this.timestamp = "" + acc.timestamp;
      
        if ((this.zStart - this.z >= 4) ) {
          this.punch += 1;       
       }
       console.log(this.punch);
  
      });

      var ters:number;
      var test2:number ;
      ters = this.zStart - this.z;
      test2 = this.zStart - this.z;

      console.log(""+ters, "test "+test2);
      console.log(this.punch);
      
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

  stop(){
    this.id.unsubscribe();
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.punch = 0;
    this.timestamp = "";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.jab = 0;
    this.uppercut = 0;
    this.hook = 0;
    this.punchName = "";

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

      this.idStartingPosition = this.deviceMotion.watchAcceleration(startReload).subscribe((acc: DeviceMotionAccelerationData) => {
        this.xStart = acc.x;
        this.yStart = acc.y;
        this.zStart = acc.z;
      });

    } catch (error) {
      alert("Error "+ error);
    }


  }


}
