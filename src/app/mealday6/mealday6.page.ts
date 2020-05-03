import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday6',
  templateUrl: './mealday6.page.html',
  styleUrls: ['./mealday6.page.scss'],
})
export class Mealday6Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay6().subscribe(data => {
      this.posts = data;
    });
    
  }

}
