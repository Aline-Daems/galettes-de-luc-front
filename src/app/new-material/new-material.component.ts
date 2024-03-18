import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterialService} from "../services/material.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-material',
  templateUrl: './new-material.component.html',
  styleUrl: './new-material.component.css'
})
export class NewMaterialComponent implements OnInit{

  materialForm:FormGroup;

  isUpdate:boolean = false;

  itemId:number|null=null;

  constructor(private readonly _formBuilder:FormBuilder, private readonly _materialService:MaterialService, private readonly _router:Router,private _activateRouter:ActivatedRoute) {

    this.materialForm = this._formBuilder.group ({

      name : this._formBuilder.control('', Validators.required),
      fresh: this._formBuilder.control(false, Validators.required),
      bio :  this._formBuilder.control(false, Validators.required),
    })
  }

  ngOnInit(): void {

    this._activateRouter.params.subscribe(params=> {
      if(params['mode'] === 'update'){

        this.itemId = +params ['id'];

        this.isUpdate = true;

        this.loadItem(this.itemId);
      }
    })
  }


  loadItem(id:number):void{

    this._materialService.getItemById(id).subscribe(data => {

      this.materialForm.patchValue(data);
    });
  }


  createOrUpdate(){

    if(this.materialForm.valid){

      if(this.isUpdate && this.itemId !== null){

        this._materialService.update(this.itemId!, this.materialForm.value).subscribe(() => {
          this._router.navigate(['/materials']);
        })
      }else {
        this._materialService.create(this.materialForm.value).subscribe(() => {
          this._router.navigate(["/materials"])
        })

      }


    }
  }
}
