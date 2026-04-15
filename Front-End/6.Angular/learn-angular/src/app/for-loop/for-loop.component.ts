import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss']
})
export class ForLoopComponent {
  user = ['aman', 'rohit', 'shivam', 'ajay'];

  userDetails = [
    {name:'ajay', email:'ajay@email.com', add:'noida'},
    {name:'arun', email:'arun@email.com', add:'delhi'},
    {name:'amar', email:'amar@email.com', add:'goa'},
    {name:'vijay', email:'vijay@email.com', add:'pune'},
    {name:'rohit', email:'rohit@email.com', add:'ajmer'}
  ];
}
