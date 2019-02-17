import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  islove:boolean=false;
  
  fullpath:string = "../../assets/images/love_full.svg";
  emptypath:string = "../../assets/images/love_empty.svg";
  temp:string ="../../assets/images/love_empty.svg";
  items = [10,45,89];
  constructor() { }

  ngOnInit() {
  }
  isloved(){
    this.islove = (!this.islove);
    console.log("is loved called");
    console.log(this.islove);
    if(this.islove){
      this.temp = this.fullpath;
    }
    else{
      this.temp = this.emptypath;
    }
    
  }
}
