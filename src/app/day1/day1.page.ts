import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/post.model';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html',
  styleUrls: ['./day1.page.scss'],
})
export class Day1Page implements OnInit {
  posts: any = [];

  constructor(private ps: PostService) { }
    //private api: PostService, private router: Router

  ngOnInit() {
    //this.api.getPostsData().subscribe(data => {
     // this.posts = data;
      //console.log(this.posts)
    //});
  //}

//}

this.ps.getPostsDataDay1().subscribe(data => {
  this.posts = data;
});
}

}
