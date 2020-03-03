import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
//import { NavController } from 'ionic-angular';  

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor( private dom: DomSanitizer, private router: Router, public http: HttpClient) {
    
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