import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { CalendarOriginal } from '@ionic-native/calendar';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  constructor(public navCtrl: NavController, private calendar: CalendarOriginal, private plt: Platform) {
    this.plt.ready().then(()=> {
      this.calendar.listCalendars().then(data => {
        this.calendar = data;
      });
    });
   }

   addEvent(cal){

   }

   openCal(cal){
     this.navCtrl.navigateForward('calDetailsPage');

   }

  ngOnInit() {
  }

}
