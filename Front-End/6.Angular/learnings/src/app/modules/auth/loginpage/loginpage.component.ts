import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  loginform = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  mylogin(){
    if(this.loginform.value.email==='sawan' && this.loginform.value.password==='12345'){
      alert("Welcome to Home Page")
    }
    console.log(this.loginform.value);
  }
}
