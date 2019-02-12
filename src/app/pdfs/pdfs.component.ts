import { Component, OnInit } from '@angular/core';
import { PdfsService } from '../services/pdfs.service';
import { Pdfs } from '../models/pdfs';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {
  public pdfs : Pdfs[];
  constructor(private pdfservice : PdfsService) {
    this.pdfservice.getPdfs().subscribe((pdfdata)=>{
      console.log(pdfdata);
      this.pdfs = pdfdata;
    });
   }

  ngOnInit() {

  }

}
