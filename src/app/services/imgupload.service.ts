import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ImguploadService  {

  constructor() {
    firebase.storage().ref('/lib').put('../../assets/images/bg-01.jpg');
  }

  // upload(event) {
  //   const id = Math.random().toString(36).substring(2);
  //   this.ref = this.afStorage.ref(id);
  //   this.task = this.ref.put(event.target.files[0]);
  // }
}
