import { Component } from '@angular/core';
import { OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { };
  @Input() item = 0;   
  ngOnInit(): void {
      
  }

}
