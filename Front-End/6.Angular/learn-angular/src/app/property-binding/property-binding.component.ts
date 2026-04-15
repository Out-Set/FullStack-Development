import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  name:string = 'sawan'
  disable:boolean = true
  toggle(){
    this.disable = !this.disable
  }
}
