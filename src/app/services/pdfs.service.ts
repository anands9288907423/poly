import { Injectable } from '@angular/core';
import { Pdfs } from '../models/pdfs';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfsService {
pdfs : Observable<Pdfs[]>;
pdfcollection : AngularFirestoreCollection<Pdfs>;

  constructor(private afs : AngularFirestore) { 
    console.log("the pdf service construcor called");
    

  }
  getPdfs(){
    this.pdfcollection = this.afs.collection('pdfs');
    this.pdfs = this.pdfcollection.valueChanges();
    return this.pdfs;
  }
}
