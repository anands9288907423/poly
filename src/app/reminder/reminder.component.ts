import { Reminder } from './../models/Reminder';
import { ReminderService } from './../services/reminder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
    reminder : Reminder[];
    info = [{date:"2/11/1999",remainder:"all students must do assignmet"},
           {date:"3/11/1999",remainder:"all students must compleate record"},
           {date:"4/11/1999",remainder:"all students must present"},
           {date:"5/11/1999",remainder:"all students must read text book"}
           ];
      
  constructor(private itemService:ReminderService) { 
    console.log("information");
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(remid=>{
      console.log(remid);
      this.reminder = remid;
    });
  }
}