import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Posts } from '../models/posts';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postlist:Observable<Posts[]>;
  postcollection:AngularFirestoreCollection<Posts>;
  constructor(public afs:AngularFirestore) {
    
   }
   getposts(){
    this.postcollection = this.afs.collection('posts');
    this.postlist = this.postcollection.snapshotChanges().map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Posts;
        data.id = a.payload.doc.id;
        return data;
      });
       });
     return this.postlist;
   
   }
   getcollection(){
    this.postcollection = this.afs.collection('posts');
    this.postlist = this.postcollection.valueChanges();
     return this.postcollection;
   }
}
