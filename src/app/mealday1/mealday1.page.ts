import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday1',
  templateUrl: './mealday1.page.html',
  styleUrls: ['./mealday1.page.scss'],
})
export class Mealday1Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay1().subscribe(data => {
      this.posts = data;
    });
    
  }

}
