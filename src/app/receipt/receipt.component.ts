import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptService} from "../services/receipt.service";
import {Router} from "@angular/router";
import {providerForm} from "../models/provider";
import {ProviderService} from "../services/provider.service";
import {Subject, takeUntil} from "rxjs";
import {DateValidator} from "../validators/date.validator";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent implements OnInit{

  receiptForm:FormGroup;
  array!: providerForm[];


  errorDate?=" La date d'expiration doit être supérieur à la date du jour"
  errorQuantity = "La quantité doit être supérieur à 0"

  $destroyed = new Subject<Boolean>()

  constructor(private readonly _receiptService:ReceiptService, private readonly _formBuilder: FormBuilder, private _router: Router, private  _providerService:ProviderService) {

    this.receiptForm= this._formBuilder.group({
        dateReceipt :  this._formBuilder.control((new Date()).toISOString().substring(0,10)),
        email: this._formBuilder.control(this.getEmail()),
        providerId : this._formBuilder.control('', Validators.required),
        providerNumber: this._formBuilder.control('', Validators.required),
        quantity:this._formBuilder.control('', [Validators.required, Validators.min(0)]),
        expirationDate : this._formBuilder.control(((new Date()).toISOString().substring(0,10)+1), [Validators.required, DateValidator()]),
        temperature: this._formBuilder.control(''),
        frozen: this._formBuilder.control(''),
        frozenTemp : this._formBuilder.control(''),
        frozenDate: this._formBuilder.control(''),
        thawedDate: this._formBuilder.control(''),
        frozenExpirationDate: this._formBuilder.control(''),
        frozenDays: this._formBuilder.control(''),
        labelling: this._formBuilder.control(''),
        labelComment: this._formBuilder.control(''),
        packaging: this._formBuilder.control(''),
        packagingComment: this._formBuilder.control(''),
        hygiene : this._formBuilder.control(''),
        hygieneComment: this._formBuilder.control(''),
        comment :this._formBuilder.control(''),

    })
  }

  ngOnInit(): void {

    this._providerService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(value) => this.array=value,
      error:(err)=> console.log(err.err()),
      complete:()=> console.log("Chargement des fournisseurs effectués")


    })
  }



  getEmail(){
   return  localStorage.getItem('email');
  }

  create(){
    if(this.receiptForm.valid) {
      this._receiptService.create(this.receiptForm.value).subscribe(() => this._router.navigate(['/home']));
    }else{
      console.log(this.receiptForm.get("expirationDate")?.errors)

    }
  }

}
