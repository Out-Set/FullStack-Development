import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.scss']
})
export class IfElseComponent {
  show:boolean = false
  toggle(){
    this.show = !this.show
  }
}
