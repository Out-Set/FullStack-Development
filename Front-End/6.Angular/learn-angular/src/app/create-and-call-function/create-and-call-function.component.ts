import { Component } from '@angular/core';

@Component({
  selector: 'app-create-and-call-function',
  templateUrl: './create-and-call-function.component.html',
  styleUrls: ['./create-and-call-function.component.scss']
})
export class CreateAndCallFunctionComponent {
  fun(){
    alert("Function Called")
  }
  funWithArgs1(name:String){
    alert(name)
  }
  funWithArgs2(amount:number){
    alert(amount)
  }
  funWithArgs3(name:String, amount:number){
    alert(name+" "+amount)
  }

  // We dont use any, bcoz this is not proper way
  funWithAny(data:any){
    alert(data)
  }
}
