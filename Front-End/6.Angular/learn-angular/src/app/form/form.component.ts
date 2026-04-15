import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userData:any = {}
  getData(data:NgForm){
    console.log(data);
    this.userData = data
    
  }
}
