import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation} from '@ionic-native/background-geolocation';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public lat;
  public lng;
  public speed;

  x:number;
  y:number;
  z:number;
  timestamp:string;

  xStart:number;
  yStart:number;
  zStart:number;
  punch: number;

  id: any;

  constructor(public deviceMotion: DeviceMotion, /*Geolocation: Geolocation,  public backgroundGeolocation: BackgroundGeolocation*/) { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.punch = 0 ;
  }





/*
  startTracking() {

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 5,
      distanceFilter: 10,
      debug: true,
      interval: 1000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

    //console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
//      console.log(this.lat ,      this.lng,      this.speed);

    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
      this.speed = (location.speed * 3600)/1000 ; // can be speed * 3.6 and should be round for 2 decimal
      
    });

  }, (err) => {
    console.log(err);

  });

  this.backgroundGeolocation.start();

  let options = {
    frequency: 1000,
    enableHighAccuracy: true
  };
}
*/








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

  }

  startingPosition(){
    try {
      
      this.id = this.deviceMotion.watchAcceleration().subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.xStart = acc.x;
        this.yStart = acc.y;
        this.zStart = acc.z;
      });

    } catch (error) {
      alert("Error "+ error);
    }


  }


}
