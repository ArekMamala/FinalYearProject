import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { DeviceMotion } from "@ionic-native/device-motion/ngx";

import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SQLite } from "@ionic-native/sqlite/ngx";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";
import { HttpClientModule } from "@angular/common/http";
// For firebase database
import { firebaseConfig } from "./environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
