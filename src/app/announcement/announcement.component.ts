import { Announcement } from './../models/Announcement';
import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  ann: Announcement[];
  loading:boolean =true;
  constructor(private announcement:AnnouncementService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.announcement.getItems().subscribe(data =>{
      console.log(data);
      this.ann = data;
      this.loading = false;
    });
  }

}
