import {Component, OnInit} from '@angular/core';
import {ReceiptService} from "../services/receipt.service";
import {Receipt, receiptForm} from "../models/receipt";
import {PhotoService} from "../services/photo.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.css'
})
export class PreviewFormComponent implements OnInit{
  receipt!: Receipt

  receiptForm!: receiptForm;
  id? = this._photoService.idForm;

  image:any;
  constructor(private _receiptService:ReceiptService, private _photoService:PhotoService, private  sanitizer:DomSanitizer, private _router:Router) {
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


      },
      error: err => console.log(err)
      } );



  }



  sendMail(receipt:Receipt, providerId:number, materialId:number){

    this._receiptService.sendMail(receipt, providerId, materialId).subscribe(()=> {

      this._router.navigate(["/validation"])
    })


  }


}
