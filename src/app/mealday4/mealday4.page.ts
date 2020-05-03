import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday4',
  templateUrl: './mealday4.page.html',
  styleUrls: ['./mealday4.page.scss'],
})
export class Mealday4Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay4().subscribe(data => {
      this.posts = data;
    });
    
  }

}
