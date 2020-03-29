import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.page.html',
  styleUrls: ['./application-page.page.scss'],
})
export class ApplicationPagePage  {
  wkClicked(){
    this.router.navigate(['workouts.page'])
  }



  constructor(private dom: DomSanitizer, private router: Router) {
    


  }


  slider = [
    {
      title: '',
      description: '',
      image: "assets/Opener.jpg"
    },
    {
      title: '',
      description: '',
      image: "assets/MealPrep.jpg"
    },
    {
      title: '',
      description: '',
      image: "assets/TrainingImg.jpg"
    }
  ];

  

  

}