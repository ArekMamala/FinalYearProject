import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  x:string;
  y:string;
  z:string;
  timestamp:string;

  id: any;

  constructor(public deviceMotion: DeviceMotion) { 
    this.x = "-";
    this.y = "-";
    this.z = "-";
    this.timestamp = "-";
  }

  start(){
    try {
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 200
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x = ""+ acc.x;
        this.y = ""+ acc.y;
        this.z = ""+ acc.z;
        this.timestamp = "" + acc.timestamp;
      });
    } catch (error) {
      alert("Error "+ error);
    }

  }

  stop(){
    this.id.unsubscribe();
    this.x = "";
    this.y = "";
    this.z = "";
    this.timestamp = "";

  }


}
