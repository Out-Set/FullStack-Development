import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.scss']
})
export class ToggleElementComponent {
  display = false
  toggle(){
    this.display = !this.display
  }
}
