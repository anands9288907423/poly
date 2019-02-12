import { Announcement } from './../models/Announcement';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  collectionref:AngularFirestoreCollection<Announcement>;
  announcement:Observable<Announcement[]>;
  constructor(public afs:AngularFirestore) { 
    
  }
  getItems(){
    this.collectionref = this.afs.collection('announcement');
    this.announcement = this.collectionref.valueChanges();
    //do this in the announcement component
    console.log("the value change service is loaded");
    return this.announcement;
  }
}
