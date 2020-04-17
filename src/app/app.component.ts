import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AuthService } from "./auth.service";

export interface NewsSource {
  id: number;
  name: string;
  val:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'yoga1';
constructor(public authService: AuthService){}
  googleLogin(){
    alert('raja')
    this.authService.GoogleAuth();
  }
  facebookLogin(){
    alert('facebook')
    this.authService.FacebookAuth();
  }
  
  
}
