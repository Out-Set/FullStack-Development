import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  color= 'red'
  bgColor = 'green'

  updateColor(){
    this.color = 'blue'
    this.bgColor = 'orange'
  }
}
