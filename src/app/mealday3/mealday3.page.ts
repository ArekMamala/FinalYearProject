import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday3',
  templateUrl: './mealday3.page.html',
  styleUrls: ['./mealday3.page.scss'],
})
export class Mealday3Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay3().subscribe(data => {
      this.posts = data;
    });
    
  }

}
