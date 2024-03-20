import {Component, OnInit} from '@angular/core';
import {ReceiptService} from "../services/receipt.service";
import {Receipt, receiptForm} from "../models/receipt";
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.css'
})
export class PreviewFormComponent implements OnInit{
  receipt!: Receipt
  id? = this._photoService.idForm;
  constructor(private _receiptService:ReceiptService, private _photoService:PhotoService) {
  }

  ngOnInit(): void {


     if(this.id){
       this.getOne(this.id);
     }



  }


  getOne(id:number){
    this._receiptService.getOne(id).subscribe(receipt => {
        this.receipt = receipt;
      }
    )
  }




}
