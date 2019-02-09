import 'rxjs/add/operator/map';
import { Reminder } from './../models/Reminder';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  remindercollection : AngularFirestoreCollection<Reminder>;
  reminder : Observable<Reminder[]>;
  constructor(private afs:AngularFirestore){
  this.remindercollection= this.afs.collection('remider'
  // ,(date) => date.limit(5).orderBy('date')
  );
  this.reminder = this.remindercollection.snapshotChanges()
  .map(changes =>{
    return changes.map(a =>{
      const data = a.payload.doc.data() as Reminder;
      data.id = a.payload.doc.id;
      return data;
    })
  });
// the working upload syntax to the firebase collection
// let theupload:Reminder = {
//   date:"anand",
//   reminder:"this is for uploaded text field",
//   id:"254"
// }
// this.remindercollection.add(theupload);
// console.log("the uploading is called");

}
getItems(){
  return this.reminder;
}
}
