import { Component } from '@angular/core';
import { child } from '../childComp/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  updateData(item:string){
    console.warn(item);
    
  }
}
