import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) {}

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
