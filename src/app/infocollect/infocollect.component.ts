import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserinfoService } from '../services/userinfo.service';
import { UserInf } from '../models/userinfo';
import { ActivatedRoute, Route } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infocollect',
  templateUrl: './infocollect.component.html',
  styleUrls: ['./infocollect.component.css']
})
//test

export class InfocollectComponent implements OnInit {
  public Userinfo:UserInf;
  userinfocollection :AngularFirestoreCollection<UserInf>;
  userinfodocument : AngularFirestoreDocument<UserInf>
  userinfo : Observable<UserInf>;
  constructor(private aads : UserinfoService,uid :ActivatedRoute,afs: AngularFirestore,private route:Router) { 
    //test
    
    uid.params.subscribe(params=>{
      console.log(params.uid);
      console.log("dai");
      
      this.userinfodocument = afs.collection('uid').doc(params.uid);
      this.userinfo = this.userinfodocument.valueChanges();
      this.userinfo.subscribe((data)=>{
      if(data){
        this.Userinfo = data;
      }
      else{
        this.Userinfo = {
          profileurl:"null"
        }
      }
    });
    });
  }
  handleClick(event: Event) {
    console.log('Click!', event);
    console.log(this.Userinfo);
    this.userinfodocument.set(this.Userinfo).then(
      ()=>{console.log("uploaded information "); }
    ).catch(()=>{ console.log("some error occured");
     })
    this.route.navigate(['home']);
  }
  ngOnInit() {
    
  }
}
