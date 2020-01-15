import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
=======
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
import { DatabaseService, Dev } from "../services/database.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  developers: Dev[] = [];
<<<<<<< HEAD
  products: Observable<any[]>;

=======
 
  products: Observable<any[]>;
 
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
  developer = {};
  product = {};
 
  selectedView = 'devs';
<<<<<<< HEAD
  
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.db.getDevs().subscribe(devs => {
          console.log("devs changes: ", devs);
          this.developers = devs;
        });
=======
 
  constructor(private db: DatabaseService) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        })
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
        this.products = this.db.getProducts();
      }
    });
  }
<<<<<<< HEAD
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
  }
}
=======
 
  addDeveloper() {
    let skills = this.developer['skills'].split(',');
    skills = skills.map(skill => skill.trim());
 
    this.db.addDeveloper(this.developer['name'], skills, this.developer['img'])
    .then(_ => {
      this.developer = {};
    });
  }
 
  addProduct() {
    this.db.addProduct(this.product['name'], this.product['creator'])
    .then(_ => {
      this.product = {};
    });
  }
 
}
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
