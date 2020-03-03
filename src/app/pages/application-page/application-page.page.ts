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
  constructor(private dom: DomSanitizer, private router: Router) {
  }


  slider = [
    {
      title: '',
      description: '',
      image: "assets/slide4.jpg"
    },
    {
      title: '',
      description: '',
      image: "assets/slide2.jpg"
    },
    {
      title: '',
      description: '',
      image: "assets/slide3.jpg"
    }
  ];

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  

}