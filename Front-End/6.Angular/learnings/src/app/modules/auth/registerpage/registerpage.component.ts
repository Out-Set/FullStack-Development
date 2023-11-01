import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent {
  myform = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
    remark: new FormControl()
  })

  mysubmitform(){
    console.log(this.myform.value);
  }
}
