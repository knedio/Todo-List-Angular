import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
	@Input() updateData: Todo;
	@Output() updateTodo: EventEmitter<any> = new EventEmitter();
	@Output() addTodo: EventEmitter<any> = new EventEmitter();
	id:number;
	title:string;
	showUpdate: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
  	if (this.updateData) {
  		if (this.title !== this.updateData.title && (!this.id || this.id !== this.updateData.id)) {
  			this.id = this.updateData.id;
  			this.title = this.updateData.title;
  			this.showUpdate = true;
  		}
  	}else{
  		this.showUpdate = false;
  	}

  }

  onSubmit() {
  	if (this.showUpdate) {
  		this.updateTodo.emit({id:this.id,title:this.title});
			this.id = null;
			this.title = '';
  		this.showUpdate = false;
  	}else{
  		this.addTodo.emit(this.title);
  		this.title = '';
  	}
  }

}
