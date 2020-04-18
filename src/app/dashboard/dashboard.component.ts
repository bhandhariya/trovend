import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { saveAs } from "file-saver";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService,private storage:AngularFireStorage) { }
  displayName;
  file;
  ngOnInit() {
    this.displayName=localStorage.getItem('name');
    this.getAllImage();

  }
  logout(){
    this.auth.logout();
    this.auth.isLoggedIn(); 
  }

  onFileSelected(event){

    this.file = event.target.files[0];
    if(this.file.type!="image/jpeg"){
      alert('please upload only Jpeg Files')
    }
    
    
  }
  save(){
    if(this.file.type=="image/jpeg"){
      var dd=Date.now();
      console.log(dd)

      const filePath = 'raja/venture'+dd;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath,this.file);
      task.snapshotChanges().pipe(
        finalize(() =>{ var url = fileRef.getDownloadURL()
          url.subscribe(e=>{
            console.log(e)
            alert('file saved to db')
          })
        } )
     )
    .subscribe(e=>{
      
    })
  
    }



      saveAs(this.file,''+dd+'.jpg')
    }
    getAllImage(){
      var ref=this.storage.ref('raja');
      ref.listAll().subscribe(r=>{
        r.items.forEach((imageRef)=>{
          this.displayImage(imageRef)
        })
      })
    }

    imageArr=[];
    displayImage(imageref){
      imageref.getDownloadURL().then((url)=>{
        
        console.log(url)

        this.imageArr.push(url);
        console.log(this.imageArr)

      })
    }

  }

