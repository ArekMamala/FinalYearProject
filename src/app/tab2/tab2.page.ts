import { Component } from "@angular/core";
// This is for online storage
// https://www.youtube.com/watch?v=5e7k8T8D4Lo
import * as firebase from "firebase";
import { snapshotToArray } from "../../app/environment";
import { NavController, AlertController } from "@ionic/angular";
// This is for user login
// https://www.youtube.com/watch?v=Q8zcieAWn3g
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  items = [];
  ref = firebase.database().ref("items/");
  inputText: string = "";
  inputPassword: string = "";
  isHidden = false;
  showInfo = true;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public afAuth: AngularFireAuth) {
    this.ref.on("value", resp => {
      this.items = snapshotToArray(resp);
    });
  }

  async addUser(){
  const {inputText, inputPassword } = this
  try {
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(inputText + '@fitness.com', inputPassword)
    console.log(res)
  } catch (error) {
    console.dir(error)
  }
} 

  logIn() {
    const { inputText, inputPassword} = this
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
        handler: async data => {
          try {
          const res = await this.afAuth.auth.signInWithEmailAndPassword(data.username + '@fitness.com', data.password)
          this.isHidden = true;
          this.showInfo = false;
        } catch (err) {
          console.dir(err)
        }
          console.log("Confirm Ok");
        }
      }
    ];

    document.body.appendChild(alert);
    return alert.present();
  }

  logOut(){
    this.showInfo = true;
    this.isHidden = false;
  }

  /* This is for local storage (DO NOT NEED ANYMORE)
  developers: Dev[] = [];
  products: Observable<any[]>;

  developer = {};
  product = {};
 
  selectedView = 'devs';
  
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.db.getDevs().subscribe(devs => {
          console.log("devs changes: ", devs);
          this.developers = devs;
        });
        this.products = this.db.getProducts();
      }
    });
  }
  addDeveloper() {
    let skills = this.developer["skills"].split(",");
    skills = skills.map(skill => skill.trim());

    this.db
      .addDeveloper(this.developer["name"], skills, this.developer["img"])
      .then(_ => {
        this.developer = {};
      });
  }

  addProduct() {
    this.db
      .addProduct(this.product["name"], this.product["creator"])
      .then(_ => {
        this.product = {};
      });
  } */
}
