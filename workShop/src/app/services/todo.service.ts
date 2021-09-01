import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todos/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = "http://localhost:3000/todos"

  constructor(private httpClient: HttpClient) {}

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl)
  }
  getTodosByUsers(userId:number):Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl+"/?userId="+userId);
 
  }
}