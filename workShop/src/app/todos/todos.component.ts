import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from './todos';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
 
  constructor(private todoService: TodoService,private activatedRoute:ActivatedRoute) { }
  totalRecords:number
  page:number=1
 
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data=>{
      this.todos = data
      this.totalRecords=data.length
      
    })
   
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getTodosByUser(params["userId"])
      }
    })
   
  }

   
    getTodosByUser(userId:number) {
    this.todoService.getTodosByUsers(userId).subscribe(data=>{
      this.todos = data
    })
    
  }

 
  
}

