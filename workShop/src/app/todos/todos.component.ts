import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  
  constructor(private todoService: TodoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTodos();
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getTodosByUser(params["userId"])
      }
    })
   
  }

    getTodos(){
      this.todoService.getTodos().subscribe(data=>{
        this.todos = data
  
        
      })
    }
    getTodosByUser(userId:number) {
    this.todoService.getTodosByUsers(userId).subscribe(data=>{
      this.todos = data
    })
    
  }
 
  
}

