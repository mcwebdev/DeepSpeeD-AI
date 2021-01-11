import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //public items: Observable<any[]>;

  //constructor(db: AngularFirestore) {
  //  this.items = db.collection('/items').valueChanges();
  //}

  ngOnInit() {
  }

}
