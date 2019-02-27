import { Announcement } from './../models/Announcement';
import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { log } from 'util';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  ann: Announcement[];
  loading:boolean =true;
  constructor(private announcement:AnnouncementService,private afs:AngularFirestore) { 
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

}
