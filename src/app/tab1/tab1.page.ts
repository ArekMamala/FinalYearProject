import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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