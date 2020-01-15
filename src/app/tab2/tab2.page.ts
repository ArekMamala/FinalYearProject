import { Component, OnInit } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { DatabaseService, Dev } from "../services/database.service";
import { Observable } from "rxjs";
// This os for online storage
// https://www.youtube.com/watch?v=5e7k8T8D4Lo
import * as firebase from "firebase";
import { snapshotToArray } from "../../app/environment";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  items = [];
  ref = firebase.database().ref("items/");
  inputText: string = "";

  constructor(public navCtrl: NavController) {
    this.ref.on("value", resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addItem(item) {
    if (item !== undefined && item !== null) {
      let newItem = this.ref.push();
      newItem.set(item);
      this.inputText = '';
    }
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
