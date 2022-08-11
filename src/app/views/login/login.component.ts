import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService:UserService ) { 

  }

  userModel = new User()

  logarUsuario(){
    this.userService.register(this.userModel).subscribe( function(response){
      console.log(response.body);
    })

  }

  ngOnInit(): void {
  }

}
