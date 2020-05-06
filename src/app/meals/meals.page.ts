import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  
  home(){
    this.router.navigate(['/home/applicationPage'])
  }
}
