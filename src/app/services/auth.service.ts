import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '../../../node_modules/@angular/router';
import { UserinfoService } from './userinfo.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  constructor(private firebaseAuth: AngularFireAuth,private router: Router) {
    this.user = firebaseAuth.authState;
  }

    signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
  // my own try
  signInWithGoogle() {
    console.log("it called");
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then((data)=>{
        console.log(data);
        this.router.navigate(['/review',data.user.uid]);
      });
  }
  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  signInWithFacebook() {
    console.log("facebook login called ");
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()).then(function(result){
        var accesstoken = result.credential;
        console.log(accesstoken);
        
      });
  }
  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
