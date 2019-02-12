import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserinfoService } from '../services/userinfo.service';
import { UserInf } from '../models/userinfo';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-infocollect',
  templateUrl: './infocollect.component.html',
  styleUrls: ['./infocollect.component.css']
})
//test

export class InfocollectComponent implements OnInit {
  Userinfo:UserInf;
  userinfocollection :AngularFirestoreCollection<UserInf>;
  userinfo : Observable<UserInf[]>;
  constructor(private aads : UserinfoService,uid :ActivatedRoute,afs: AngularFirestore) { 
    //test
    
    uid.params.subscribe(params=>{
      console.log(params.uid);
      this.userinfocollection = afs.collection('uid').doc(params.uid).collection('uid');
      this.userinfo = this.userinfocollection.valueChanges();
      this.userinfo.subscribe((data)=>{
        this.Userinfo = data[0];
        console.log(this.Userinfo);
    });
    });
  }

  ngOnInit() {
    
  }

}
