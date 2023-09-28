import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  ngOnInit(): void {
    this.todos = [
      { content: 'Learn HTML', completed: true },
      { content: 'Learn CSS', completed: true },
      { content: 'Learn JavaScript', completed: false },
      { content: 'Learn Angular', completed: false },
    ];
  }

  toggleDone(i: number) {
    let item = this.todos[i];
    item.completed = !item.completed;
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => {
      return index != i;
    });
  }

  onSubmit() {
    if(this.inputTodo.length>0){
      this.todos.push({ content: this.inputTodo, completed: false });
      this.inputTodo = '';
    }
  }
}
