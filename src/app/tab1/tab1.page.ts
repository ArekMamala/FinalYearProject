import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vid = 'https://www.youtube.com/embed/fiutY4ojZUQ?rel=0;&autoplay=1';
  constructor(private dom: DomSanitizer) {


  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

}