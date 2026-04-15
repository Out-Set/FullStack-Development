import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.scss']
})
export class SimpleCounterComponent {
  count:number = 0
  counter(type:string){
    type === 'add' ? this.count++:this.count--;
  }
}
