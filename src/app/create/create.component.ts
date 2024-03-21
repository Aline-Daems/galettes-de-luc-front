import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {PasswordValidator} from "../validators/password.validator";
import {Role, RolesMapping} from "../models/enums";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrl: './create.component.css'
})
export class CreateComponent {

    userForm: FormGroup;
    errorMail: string = "";
    errorFirstname:string="";
    errorLastname:string="";
    errorPassword:string="";
    public RolesMapping = RolesMapping;
    public roles = Object.values(Role);


    constructor(private readonly _userService: UserService, private readonly _formBuilder: FormBuilder, private _router: Router) {

        this.userForm = this._formBuilder.group({
            firstname: this._formBuilder.control('', [Validators.required, Validators.minLength(3)]),
            lastname: this._formBuilder.control('', [Validators.required, Validators.minLength(3)]),
            password: this._formBuilder.control('', [Validators.required, PasswordValidator()]),
            email: this._formBuilder.control('', [Validators.required, Validators.email]),
            role: this._formBuilder.control(''),
        })
    }

    get email() {
        return this.userForm.get('email');
    }

    get firstname() {
        return this.userForm.get('firstname');
    }
    get lastname(){

      return this.userForm.get('lastname');
    }

    get password(){
      return this.userForm.get('password');
    }

    createUser() {

        if (this.userForm.valid) {
            this._userService.create(this.userForm.value).subscribe(() => this._router.navigate(['/validation']));
        } else {

            if (this.email?.errors) {

                this.errorMail = "Le format de l'email est incorrect"

            }
            if(this.firstname?.errors){
                this.errorFirstname="Le prénom doit contenir au minimum 3 lettres"
            }
            if(this.lastname?.errors){
              this.errorLastname = "Le nom doit contenir au minimum 3 lettres"
            }

            if(this.password?.errors){
              this.errorPassword = "Le mot de passe doit contenir au moins une majuscule"
            }


        }


    }



}
