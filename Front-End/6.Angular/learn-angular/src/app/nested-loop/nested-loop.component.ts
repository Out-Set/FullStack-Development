import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.scss']
})
export class NestedLoopComponent {

  userDetails = [
    {name:'ajay', email:'ajay@email.com', add:'noida', socialAccounts:['facebook','insta','gmail','twitter']},
    {name:'arun', email:'arun@email.com', add:'delhi', socialAccounts:['facebook','insta','gmail','twitter']},
    {name:'amar', email:'amar@email.com', add:'goa', socialAccounts:['facebook','insta','gmail','twitter']},
    {name:'vijay', email:'vijay@email.com', add:'pune', socialAccounts:['facebook','insta','gmail','twitter']},
    {name:'rohit', email:'rohit@email.com', add:'ajmer', socialAccounts:['facebook','insta','gmail','twitter']}
  ];
}
