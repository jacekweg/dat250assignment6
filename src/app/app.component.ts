import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  newTodo = { description: '', summary: '' };

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo).subscribe(() => {
      this.loadTodos();
      this.newTodo = { description: '', summary: '' };
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => this.loadTodos());
  }
}
