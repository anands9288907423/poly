import { Announcement } from './../models/Announcement';
import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { log } from 'util';
import { CookieOptions, CookieService } from 'angular2-cookie';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  ann: Announcement[];
  loading:boolean =true;
  status: boolean=false;
  title:string;
  subtitle:string;
  description:string;
  notlog:boolean = false;
  constructor(private announcement:AnnouncementService,private afs:AngularFirestore ,private _cookieservice : CookieService) { 
    this.loading = true;
  }

  ngOnInit() {
    
    this.announcement.getItems().subscribe(data =>{
      console.log(data);
      this.ann = data;
      this.loading = false;
    });
  }
  isagree(dt:boolean,annid:string){
    console.log(dt,annid);
   this.afs.collection('announcement').doc('isagree').collection(annid).doc('agree').set({isagree:dt});
  }
  toggleclass(){
    
    
    if(this._cookieservice.get('uuid')==undefined){
      this.notlog = true;
      console.log("passed1");
    }
    else{
      console.log(this.status);
      this.status = (!this.status);}
  }
  setpost(event, id){
    if (id === 0) {
        this.title = event;
    } else if (id === 1) {
      this.subtitle = event;
    } else if (id === 3) {
      this.description = event;
    }
  }
  announce(){
    console.log(this.title , this.subtitle ,this.description );
    this.afs.collection('announcement').add({userid:this._cookieservice.get('name'),
    id:this._cookieservice.get('uuid'),
    title:this.title,
    subtitle:this.subtitle,
    message:this.description
  });
  }
}
