import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
 
  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    this.completeStateChange.emit(todoToChange);
  }
}
