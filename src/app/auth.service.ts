import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth,private router:Router) { }

  GoogleAuth() {
    return this.GoogleLogin(new auth.GoogleAuthProvider());
  } 

  GoogleLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
     this.setresult(result)
    }).catch((error) => {
        console.log(error)
    })
  }
setresult(result){
  console.log(result)

  result.user.getIdToken().then(token=>{
    this.setToken(token)
  })
    console.log('You have been successfully logged in!')
}
  FacebookAuth() {
    return this.FacebookLogin(new auth.FacebookAuthProvider());
  } 



  FacebookLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
     this.setresult(result)
    }).catch((error) => {
        console.log(error)
    })
  }

  setToken(token){
    console.log(token);
    localStorage.setItem('token',token);
    this.isLoggedIn();
  }

  isLoggedIn(){
    var token=localStorage.getItem('token');
    if(token){
    this.router.navigateByUrl('dash')
   
    }else{
      this.router.navigateByUrl('sign');

    }
  }
  

}
