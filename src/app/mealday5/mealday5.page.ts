import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday5',
  templateUrl: './mealday5.page.html',
  styleUrls: ['./mealday5.page.scss'],
})
export class Mealday5Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay5().subscribe(data => {
      this.posts = data;
    });
    
  }

}
