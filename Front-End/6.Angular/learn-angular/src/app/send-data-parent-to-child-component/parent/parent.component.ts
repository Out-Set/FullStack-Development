import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  title = '18.Send Data Parent to Child Component';
  data=10;
  updateChild(){
    this.data = Math.floor(Math.random()*100);
  }
}
