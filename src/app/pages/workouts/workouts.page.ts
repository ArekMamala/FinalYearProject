import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home/applicationPage'])
  }
  
}
