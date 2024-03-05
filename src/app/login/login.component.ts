import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm : FormGroup;

  constructor(private  readonly _userService:UserService, private readonly _formBuilder:FormBuilder, private readonly _router:Router) {

    localStorage.clear();

    this.loginForm = this._formBuilder.group({

      email: this._formBuilder.control('', Validators.required),
      password: this._formBuilder.control('', Validators.required)
    })
  }

  login(){

    this._userService.login(this.loginForm.value).subscribe({

      next:(response)=> {
        this._router.navigate(["home"])
    },
      error:(err)=> {
        if(err.error.status === 403){
          alert(err.error.message())
        }
      }
    })
  }

}
