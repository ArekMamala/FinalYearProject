import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { DeviceMotion } from "@ionic-native/device-motion/ngx";
import { DeviceOrientation } from "@ionic-native/device-orientation/ngx";

// Vibration
import { Vibration } from '@ionic-native/vibration/ngx';

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
import { UserService } from './user.service';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';


import { WorkoutPage } from './pages/workout/workout.page';
import {HomePageModule} from './home/home.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HomePageModule,
    BrowserAnimationsModule,
      MatExpansionModule, MatInputModule,
      FormsModule,
      ReactiveFormsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    UserService,
    DeviceOrientation,
    Vibration,
    Calendar,
    WorkoutPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}