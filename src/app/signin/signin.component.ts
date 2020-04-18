import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService){}

  ngOnInit() {
  }
  
  googleLogin(){
    this.authService.GoogleAuth();
  }
  facebookLogin(){
    this.authService.FacebookAuth();
  }


}
