import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { UserInf } from '../models/userinfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  data;
  userinfocollection :AngularFirestoreCollection<UserInf>;
  userinfo : Observable<UserInf[]>;
    constructor(afs: AngularFirestore) {
      
      this.userinfocollection = afs.collection('uid');
      this.userinfo = this.userinfocollection.valueChanges();
    }
    getUserid(){
      return this.userinfo;
    }
}
