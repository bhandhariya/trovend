import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.GoogleLogin(new auth.GoogleAuthProvider());
  } 

  GoogleLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      console.log(result)
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  FacebookAuth() {
    return this.FacebookLogin(new auth.FacebookAuthProvider());
  } 



  FacebookLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      if(result){
          
      }

        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
  

}
