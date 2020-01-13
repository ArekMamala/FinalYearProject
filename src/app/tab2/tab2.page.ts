import { Component, OnInit } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { DatabaseService } from '../services/database.service';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {

  constructor(private db: DatabaseService){ }




  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if (ready){
      
      }
    })
  }
  
}
