import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //variables for speed 
  public lat;
  public lng;
  public speed;

  //date variables
  date;
  dateObj;
  time;

  //x y z variables for movement
  x: number;
  y: number;
  z: number;
  timestamp: string;

  // variables for start position
  xStart: number;
  yStart: number;
  zStart: number;
  
  //punching variables
  punch: number;
  jab: number;
  uppercut: number;
  hook: number;
  punchName: string;

  id: any;
  idStartingPosition: any;
  

  constructor(public deviceMotion: DeviceMotion) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.punch = 0;
    this.getFormatteddate();
    this.jab = 0;
    this.uppercut = 0;
    this.hook = 0;
    this.punchName = "";

  }

  //function for getting the datye and time 
  getFormatteddate(): any {
    this.dateObj = new Date();

    var year = this.dateObj.getFullYear().toString();
    var month = this.dateObj.getMonth().toString();
    var day = this.dateObj.getDate().toString();

    var monthArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']  
    console.log("day "+day);
    this.date = day + '/' + monthArray[month] + '/' + year;

    var hours = this.dateObj.getHours().toString();
    var minutes = this.dateObj.getMinutes().toString();
    var seconds = this.dateObj.getSeconds().toString();
    
    this.time = hours + ':' + minutes + ':' + seconds;
  }


  //start function calculates punches figures out what punches 
  start() {
    try {
      var option: DeviceMotionAccelerometerOptions =
      {
        frequency: 500
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => {
        this.x = acc.x;
        this.y = acc.y;
        this.z = acc.z;
        this.timestamp = "" + acc.timestamp;

        switch (true) {
          /*case ((this.zStart - this.z >= 4) &&((this.yStart - this.y <= 8)&& (this.yStart - this.y >= 5))):
              this.punch +=1;
              this.uppercut +=1; 
              this.punchName = "UPPERCUT";
              console.log("number of uppercuts "+ this.uppercut+"punch name "+ this.punchName);
              break;*/
          case ((this.zStart - this.z >= 5)): //&& (this.xStart - this.x >= 4)):
              this.punch +=1;
              this.jab +=1; 
              this.punchName = "JAB";
              console.log("number of jabs "+ this.jab+"punch name "+ this.punchName);
              break;
          default:
              console.log("No punch");
              break;
      }
        
        console.log(this.punch);

        var ters: number;
        var test2: number;
        ters = this.zStart - this.z;
        test2 = this.xStart - this.x;
  
        console.log(" difference " + ters, "diffference  " + test2);
  
      });


    } catch (error) {
      alert("Error " + error);
    }

  }

  stop() {
    this.id.unsubscribe();
    this.idStartingPosition.unsubscribe();
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
      alert("Error " + error);
    }

  }
 

}
