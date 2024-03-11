import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptService} from "../services/receipt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent {

  receiptForm:FormGroup;

  constructor(private readonly _receiptService:ReceiptService, private readonly _formBuilder: FormBuilder, private _router: Router) {

    this.receiptForm= this._formBuilder.group({
        dateReceipt :  this._formBuilder.control((new Date()).toISOString().substring(0,10)),
        email: this._formBuilder.control(this.getEmail()),
        providerNumber: this._formBuilder.control('', Validators.required),
        quantity:this._formBuilder.control('', Validators.required),
        expirationDate : this._formBuilder.control('', Validators.required),
        temperature: this._formBuilder.control(''),
        frozen: this._formBuilder.control(''),
        labelling: this._formBuilder.control(''),
        packaging: this._formBuilder.control(''),
        hygiene : this._formBuilder.control(''),
        comment :this._formBuilder.control(''),

    })


  }

  getEmail(){

   return  localStorage.getItem('email');
  }

  create(){
    if(this.receiptForm.valid) {

      this._receiptService.create(this.receiptForm.value).subscribe(() => this._router.navigate(['/home']));
    }
  }

}
