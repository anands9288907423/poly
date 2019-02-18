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
  constructor(afs:AngularFirestore) {
    this.postcollection = afs.collection('posts');
    this.postlist = this.postcollection.valueChanges();
   }
   getposts(){
     return this.postlist;
   }
   getcollection(){
     return this.postcollection;
   }
}
