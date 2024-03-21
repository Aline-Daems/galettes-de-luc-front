import {Component, OnInit} from '@angular/core';
import {ReceiptService} from "../services/receipt.service";
import {Receipt, receiptForm} from "../models/receipt";
import {PhotoService} from "../services/photo.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.css'
})
export class PreviewFormComponent implements OnInit{
  receipt!: Receipt
  id? = this._photoService.idForm;

  image:any;
  constructor(private _receiptService:ReceiptService, private _photoService:PhotoService, private  sanitizer:DomSanitizer) {
  }

  ngOnInit(): void {

     if(this.id){
       this.getOne(this.id);


     }

     this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ${image}');

  }

  getOne(id:number){
    this._receiptService.getOne(id).subscribe(receipt => {
        this.receipt = receipt;
        this.getImageDataUrl(id)
      }
    )
  }



  getImageDataUrl(id:number):any{

    this._receiptService.getImageByID(id).subscribe( {

      next: response => {
        const blob = new Blob([response], { type: 'image/jpeg' });
        this.image = URL.createObjectURL(blob);
        console.log("tout va bien !!")

      },
      error: err => console.log(err)
      } );



  }




}
