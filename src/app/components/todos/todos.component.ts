import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos:Todo[];
	updateData:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  	this.todos = this.todoService.getTodos();
  }

  deleteTodo(t:Todo){
    this.todos = this.todos.filter( todo => todo.id !== t.id );
  }

  markCompleted(t:Todo){
    this.todos = this.todos.map( todo => {
    	if (todo.id == t.id) {
    		todo.completed = !t.completed;
    	}
    	return todo;
    });
  }

  addTodo(title){
    const get_length = this.todos.length;
    const last_id = get_length > 0 ? this.todos[get_length-1].id : 0 ;
    const newTodo = {
      id: last_id+1,
      title,
      completed: false
    }
    this.todos = [...this.todos,newTodo];
  }

  updateForm(t){
    this.updateData = t;
  }

  updateTodo(t){
    this.todos = this.todos.map(todo => {
      if (todo.id === t.id) {
        todo.title = t.title;
      }
      return todo;
    });
    this.updateData = [];
  }
}
