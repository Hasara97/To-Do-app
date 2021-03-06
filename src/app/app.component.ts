import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-Do List';
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3
    },

    {
      label: 'Wacth Game of Thrones',
      done: true,
      priority: 1
    },

    {
      label: 'Pay the mobile bill',
      done: true,
      priority: 2
    },

    {
      label: 'Clean the room',
      done: false,
      priority: 3
    },

  ];

  addTodo(newTodoLabel){
    var newTodo = {
      label : newTodoLabel,
      priority: 1,
      done: false
    };

    this.todos.push(newTodo);


  }

  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label) ;
    
  }

}
