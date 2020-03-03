import { Component, OnInit } from '@angular/core';
// This is for online storage
// https://www.youtube.com/watch?v=5e7k8T8D4Lo
import * as firebase from "firebase";
import { snapshotToArray } from 'src/app/environment';
import { NavController, AlertController } from "@ionic/angular";
// This is for user login
// https://www.youtube.com/watch?v=Q8zcieAWn3g
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
// This is for user information handling
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
// This is for user folder
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  items = [];
  ref = firebase.database().ref("items/");
  // Username
  username: string = "";
  // Password
  inputPassword: string = "";
  // LogIn/Sign Up card
  isHidden = false;
  // User Information
  showInfo = true;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public afAuth: AngularFireAuth, public user: UserService, public router: Router,
    public afstore: AngularFirestore) {
    this.ref.on("value", resp => {
      this.items = snapshotToArray(resp);
    });
  }

  // This method below is for adding users to the database
  async addUser() {
    const { username, inputPassword } = this
    try {
      //Using @fitness to trick firebase into thinking that the username is an email address
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@fitness.com', inputPassword)

      // Creating a document and assigning value username
      this.afstore.doc('user/${res.user.uid}').set({
        username
      })

      // Adding this user to the user.service https://youtu.be/W5GD6gwYC18?t=412
      if (res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        })

      }
      console.log(res)
      this.showAlert("Welcome", "Thank you for signing up!")
      // This should take the user to a diffrent page to config profile
      this.router.navigate(['/tabs'])
    } catch (error) {
      // Throws error
      this.showAlert("Error", error.message)
      console.dir(error)
    }
  }

  // Basic method that shows popup alertbox
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ["Confirm"]
    })
    await alert.present()
  }


  // Method to allow the user to logIn 
  logIn() {
    const { username, inputPassword } = this
    // Long way of creating alertbox
    // Please use other method
    const alert = document.createElement("ion-alert");
    alert.header = "Login";
    alert.inputs = [
      {
        name: "username",
        id: "username",
        type: "email",
        placeholder: "Email/Username"
      },
      {
        name: "password",
        id: "password",
        type: "password",
        placeholder: "Password"
      }
    ];
    alert.buttons = [
      {
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        handler: () => {
          console.log("Confirm Cancel");
        }
      },
      {
        text: "Ok",
        // This is for handling data 
        handler: async data => {
          try {
            // Getting information from user
            // This is using firebase auth to check if logIn is correct
            const res = await this.afAuth.auth.signInWithEmailAndPassword(data.username + '@fitness.com', data.password)
            this.showAlert("Welcome", "Are you ready to start your workout?")
            // This hides the register card
            this.isHidden = true;
            // This shows user information (you can do this on different page if you want)
            this.showInfo = false;

            // Setting service
            if (res.user) {
              this.user.setUser({
                username,
                uid: res.user.uid
              })
              // Use this to bring user to homepage
              this.router.navigate(['/home/applicationPage'])
            }
          } catch (err) {
            // Shows error if user make a mistake
            this.showAlert("Error", err.message)
            console.dir(err)
          }
          console.log("Confirm Ok");
        }
      }
    ];

    document.body.appendChild(alert);
    return alert.present();
  }

  // Method for the user logging out have not fully done this yet. So far basic 
  logOut() {
    // Hiding the user info
    this.showInfo = true;
    // Showing the logIn and sign up
    this.isHidden = false;
  }

}
