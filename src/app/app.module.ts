import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SigninComponent } from './signin/signin.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './routing';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule,    ReactiveFormsModule,
    FormsModule,HttpClientModule,NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
