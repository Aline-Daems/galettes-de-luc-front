import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
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

    })
  }

}
