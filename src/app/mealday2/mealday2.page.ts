import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday2',
  templateUrl: './mealday2.page.html',
  styleUrls: ['./mealday2.page.scss'],
})
export class Mealday2Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay2().subscribe(data => {
      this.posts = data;
    });
    
  }

}