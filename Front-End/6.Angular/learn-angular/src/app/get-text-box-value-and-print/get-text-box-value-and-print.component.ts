import { Component } from '@angular/core';

@Component({
  selector: 'app-get-text-box-value-and-print',
  templateUrl: './get-text-box-value-and-print.component.html',
  styleUrls: ['./get-text-box-value-and-print.component.scss']
})
export class GetTextBoxValueAndPrintComponent {
  
  displayVal:string = ''
  getValue(val:string){
    console.log(val);
    this.displayVal = val
  }
}
