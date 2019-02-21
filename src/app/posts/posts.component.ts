import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { PostsService } from '../services/posts.service';
import { AngularFirestore } from 'angularfire2/firestore';

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
  items:Posts[];
  title:string;
  poster:string;
  status:boolean = false;
// Main task
task: AngularFireUploadTask;

 // Progress monitoring
percentage: Observable<number>;

snapshot: Observable<any>;

// Download URL
downloadURL: Observable<string>;
  file: File;
  isupload: boolean = false;

  constructor(private post: PostsService ,private storage: AngularFireStorage , private db: AngularFirestore) { 
    post.getposts().subscribe((post)=>{
        this.items = post;
    })
  }

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
  abset(event){
    this.isupload =  false;
    this.title = event.target.value;
    //title se
  }
  bcset(event){
    this.isupload =  false;
    this.poster = event.target.value;
    //post set
    console.log(this.poster);
    
  }
  //img uploading //
  btnpst(){
    console.log("btn pressed");
       // Client-side validation example
       if (this.file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        return;
      }
    
      // The storage path
      const path = `test/${new Date().getTime()}_${this.file.name}`;
    
      // Totally optional metadata
      const customMetadata = { app: 'Created by anand s' };
    
      // The main task
      this.task = this.storage.upload(path, this.file, { customMetadata });
      // Progress monitoring
      this.percentage = this.task.percentageChanges().map((data)=>{
        if(data==100){
          data=0;
        }
        return data;
      });
      this.snapshot = this.task.snapshotChanges().pipe(
        tap(snap => {
          if (snap.bytesTransferred === snap.totalBytes) {
            //Update firestore on completion
    
          }
        }),
        finalize(() => {
          this.downloadURL = this.storage.ref(path).getDownloadURL();
          console.log("ya data uploaded ");
          this.isupload =  true;
          this.downloadURL.subscribe((data)=>{
            this.post.getcollection().add({post:this.poster,
            title:this.title ,
            imgurl:data
        });     
          })
        })
      );
      this.snapshot.subscribe();
    
  }
  startUpload(event: FileList) {
    // The File object
    console.log(event);
 
    const file = event.item(0);
     this.file =file;
 
    // this.downloadURL = this.storage.ref(path).getDownloadURL().map((data)=>{return data+"?alt=media";});
    // this.downloadURL.subscribe((data)=>{
    //   console.log(data);
      
    // })
  
    // The file's download URL
  }
}
