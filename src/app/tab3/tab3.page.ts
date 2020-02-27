import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading} from "@ionic-native/device-orientation/ngx";

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
  

  constructor(public deviceMotion: DeviceMotion, public deviceOrientation:DeviceOrientation) { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.punch = 0 ;

  }


  startWatching(){
    this.watch = this.deviceOrientation.watchHeading().subscribe((heading)=>{
      this.trueheading = heading.trueHeading;
      this.magneticHeading = heading.magneticHeading;
      this.timestamp = new Date(heading.timestamp).toString();
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }


  stopwatching(){
    if (this.watch!= null) {
      this.watch.unsubscribe();
    }

  }

  start(){
    try {
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 500
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
