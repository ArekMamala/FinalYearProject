import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.page.html',
  styleUrls: ['./day7.page.scss'],
})
export class Day7Page implements OnInit {

  posts: any = [];

  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataDay7().subscribe(data => {
      this.posts = data;
    });
    
  }

}
