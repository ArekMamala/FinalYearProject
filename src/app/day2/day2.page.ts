import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.page.html',
  styleUrls: ['./day2.page.scss'],
})
export class Day2Page implements OnInit {
  posts: any = [];

  constructor(private api: PostService, private router: Router) { }

  ngOnInit() {
    this.api.getPostsData().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    });
  }

}
