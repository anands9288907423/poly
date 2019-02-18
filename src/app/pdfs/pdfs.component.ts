import { Component, OnInit } from '@angular/core';
import { PdfsService } from '../services/pdfs.service';
import { Pdfs } from '../models/pdfs';
import { Observable } from 'rxjs/Observable';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { tap, finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {
  title:string="";
  description:string="";
  public pdfs : Pdfs[];
  public pdf:Pdfs[];
  link : string;
  status:boolean=false;
  //testing injection 2
// Main task
task: AngularFireUploadTask;

 // Progress monitoring
percentage: Observable<number>;

snapshot: Observable<any>;

// Download URL
downloadURL: Observable<string>;

  //
  constructor(private pdfservice : PdfsService ,private storage: AngularFireStorage , private db: AngularFirestore) {
    this.pdfservice.getPdfs().subscribe((pdfdata)=>{
      console.log(pdfdata);
      this.pdfs = pdfdata;
    });
   }
  ngOnInit() {

  }
//test
startUpload(event: FileList) {
  // The File object
  console.log(event);
  
  const file = event.item(0);

  // Client-side validation example
  if (file.type.split('/')[0] !== 'image') {
    console.error('unsupported file type :( ');
    return;
  }

  // The storage path
  const path = `test/${new Date().getTime()}_${file.name}`;

  // Totally optional metadata
  const customMetadata = { app: 'Created by anand s' };

  // The main task
  this.task = this.storage.upload(path , file, { customMetadata });
  // Progress monitoring
  this.percentage = this.task.percentageChanges();
  this.snapshot = this.task.snapshotChanges().pipe(
    tap(snap => {
      if (snap.bytesTransferred === snap.totalBytes) {
        //Update firestore on completion

      
      }
    }),
    finalize(() => {
      this.downloadURL = this.storage.ref(path).getDownloadURL();
      console.log("ya data uploaded ");
      this.downloadURL.subscribe((data)=>{
        this.db.collection('pdfs').add({ description : this.description ,
        title : this.title,
        url : data});
        console.log(this.description,this.title,data);
        
      })
    })
  );
  // this.downloadURL = this.storage.ref(path).getDownloadURL().map((data)=>{return data+"?alt=media";});
  // this.downloadURL.subscribe((data)=>{
  //   console.log(data);
    
  // })

  // The file's download URL
}
toggleclass(){
  this.status = (!this.status);
}
titleset(value) {
  this.title = value.target.value;
  
}
descriptionset(value){
console.log(value);
this.description = value.target.value;
}
}
