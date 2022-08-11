import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//injeção de dependeência do módulo HttpClient
  constructor(
    private httpClient: HttpClient
  ) { }

    url = "http://localhost:3000/signin"

    register(usuario: User):Observable<any> {
      return this.httpClient.post(this.url, JSON.stringify(usuario) ,  {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      })
    }
}
