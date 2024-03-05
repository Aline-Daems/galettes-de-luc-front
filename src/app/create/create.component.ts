import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  userForm: FormGroup;

  constructor(private readonly _userService:UserService, private readonly _formBuilder:FormBuilder, private _router:Router) {

    this.userForm = this._formBuilder.group({
      firstname: this._formBuilder.control('', Validators.required),
      lastname: this._formBuilder.control('', Validators.required),
      password:  this._formBuilder.control('', Validators.required),
      email: this._formBuilder.control('', Validators.required),
      role: this._formBuilder.control('', Validators.required),
    })
  }

  create(){

    this._userService.create(this.userForm.value).subscribe(()=> this._router.navigate(['/validation']));
  }


}
