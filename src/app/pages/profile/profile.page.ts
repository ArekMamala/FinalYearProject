import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {Calendar} from '@ionic-native/calendar/ngx';
import { Platform } from '@ionic/angular';

import { WorkoutPage } from '../workout/workout.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  fireBaseUser = firebase.auth().currentUser.email;

  //over all user data for the day variables
  totalPunches: number;
  averagePunchesPerTime: number = 0;

  calName = '';
  events = [];

  calendars = [""];

  constructor(public router: Router, private calendar: Calendar, private plt: Platform, public workout: WorkoutPage) { 
    /*this.plt.ready().then(() =>{
      this.calendar.listCalendars().then(data => {
        this.calendars = data
      });
    });*/
  
    if (this.plt.is('ios')) {
      this.calendar.findAllEventsInNamedCalendar("My calendars").then(data => {
        this.events = data; 
      });
    } else if(this.plt.is('android')) {
      let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 31);
      
      this.calendar.listEventsInRange(start, end).then(data => {
        this.events = data; 
      });

    }
  }
  ngOnInit() {
  }

  updateValues(){
    this.totalPunches = this.workout.totpunches();
    console.log("total punches here "+ this.totalPunches);
    this.averagePunchesPerTime = this.workout.getTotalTime(this.workout.selectedTime);
  }

  addEvent(cal){
    let date = new Date();
    let options = {calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15};

    this.calendar.createEventInteractivelyWithOptions('My bew Event', 'Munster', 'Some special Note', date, date, options).then(() => {

    });
  }

  openCal(cal){
    this.router.navigate(['/home/applicationPage'])
  }

  logOut(){
    this.router.navigate([''])
  }
  

}
