import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mealday7',
  templateUrl: './mealday7.page.html',
  styleUrls: ['./mealday7.page.scss'],
})
export class Mealday7Page implements OnInit {

  posts: any = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPostsDataMealDay7().subscribe(data => {
      this.posts = data;
    });
    
  }

}
