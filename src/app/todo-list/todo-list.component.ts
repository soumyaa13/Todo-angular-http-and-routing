import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todoDetails: any = [];
  constructor(private todoinfo: TodoService) {}

  ngOnInit(): void {
    this.todoDetails = this.todoinfo.getTodo();
  }
}
