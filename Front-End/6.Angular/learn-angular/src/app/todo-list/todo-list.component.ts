import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  
  list:any[] = []

  addTask(item:string){
    this.list.push({id:this.list.length, name:item})
    console.log(this.list);
  }

  removetask(id:number){
    console.log(id);
    this.list = this.list.filter(item => item.id !== id)
  }
}
