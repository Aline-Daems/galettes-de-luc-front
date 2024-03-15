import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterialService} from "../services/material.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-material',
  templateUrl: './new-material.component.html',
  styleUrl: './new-material.component.css'
})
export class NewMaterialComponent {

  materialForm:FormGroup;

  constructor(private readonly _formBuilder:FormBuilder, private readonly _materialService:MaterialService, private readonly _router:Router) {

    this.materialForm = this._formBuilder.group ({

      name : this._formBuilder.control('', Validators.required),
      fresh: this._formBuilder.control(false, Validators.required),
      bio :  this._formBuilder.control(false, Validators.required),
    })
  }


  create(){

    if(this.materialForm.valid){

      this._materialService.create(this.materialForm.value).subscribe(() => {
        this._router.navigate(["/materials"])
      })

    }
  }
}
