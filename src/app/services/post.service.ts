import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsDataDay1(): Observable<any> {
    return this.http.get("http://localhost:8081/api/day1");
  }

  getPostsDataDay2(): Observable<any> {
    return this.http.get("http://localhost:8081/api/day2");
  }

  getPostsDataDay4(): Observable<any> {
    return this.http.get("http://localhost:8081/api/day4");
  }

  getPostsDataDay5(): Observable<any> {
    return this.http.get("http://localhost:8081/api/day5");
  }

  getPostsDataDay7(): Observable<any> {
    return this.http.get("http://localhost:8081/api/day7");
  }

  getPostsDataMealDay1(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday1");
  }

  getPostsDataMealDay2(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday2");
  }

  getPostsDataMealDay3(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday3");
  }

  getPostsDataMealDay4(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday4");
  }

  getPostsDataMealDay5(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday5");
  }

  getPostsDataMealDay6(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday6");
  }

  getPostsDataMealDay7(): Observable<any> {
    return this.http.get("http://localhost:8081/api/mealday7");
  }
  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }
  
  getPost(days: string): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + days);
  }
  

}

  //constructor(private http: HttpClient) { }

  //getPostsData(): Observable<any> {
    //return this.http.get("http://localhost:8081/api/workout");
  //}
//}