import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [
    {
      title: 'Todo 1', isCompleted: false,
    },
    {
      title: 'Todo 2', isCompleted: true,
    },
    {
      title: 'Todo 3', isCompleted: false,
    },
    {
      title: 'Todo 4', isCompleted: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleCompleteStateChange(todoToChnage: Todo): void {
    todoToChnage.isCompleted = !todoToChnage.isCompleted

  }

  markAllTodosAsCompeted(): void {
    for (const todo of this.todos) {
      todo.isCompleted = true; 
    }
  }

}
