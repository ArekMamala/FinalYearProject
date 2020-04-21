import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.page.html',
  styleUrls: ['./day4.page.scss'],
})
export class Day4Page implements OnInit {

  constructor(private ps: PostService) { }
  posts: any = [];

  ngOnInit() {
    this.ps.getPostsDataDay4().subscribe(data => {
      this.posts = data;
    });
    
  }

}
