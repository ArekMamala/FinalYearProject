import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

<<<<<<< HEAD
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// This is used for storage
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
 
import { HttpClientModule } from '@angular/common/http';
=======
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { DeviceMotion,  } from '@ionic-native/device-motion/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa

import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule  ],
  providers: [
    StatusBar,
    SplashScreen,DeviceMotion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
