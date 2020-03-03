import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

  fireBaseUser = firebase.auth().currentUser.email;

  constructor(public router: Router) { }

  logOut(){
    this.router.navigate([''])
  }
  

}
