import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.page.html',
  styleUrls: ['./day5.page.scss'],
})
export class Day5Page implements OnInit {

  constructor(private ps: PostService) { }
  posts: any = [];

  ngOnInit() {
    this.ps.getPostsDataDay5().subscribe(data => {
      this.posts = data;
    });
    
  }

}
