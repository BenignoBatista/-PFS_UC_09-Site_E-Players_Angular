import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userModel = new User()

  recebeDados(){
    console.log(this.userModel)

  }

  ngOnInit(): void {
  }

}