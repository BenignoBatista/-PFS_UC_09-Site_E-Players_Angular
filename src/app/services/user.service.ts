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

    // rota da api para logar e cadastrar
    urlSignin = "http://localhost:3000/signin"//logar
    urlRegister = "http://localhost:3000/register"//cadastrar

    // login com post
    signin(usuario: User):Observable<any> {
      return this.httpClient.post(this.urlSignin, JSON.stringify(usuario) ,  {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      })
    }


    register(usuario: User):Observable<any> {
      return this.httpClient.post(this.urlRegister, JSON.stringify(usuario) ,  {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      })
    }
}
