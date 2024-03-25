import {Component, OnInit} from '@angular/core';
import {Receipt, receiptForm} from "../models/receipt";
import {ReceiptService} from "../services/receipt.service";
import {PhotoService} from "../services/photo.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrl: './get-form.component.css'
})
export class GetFormComponent implements OnInit{
  receipt!: Receipt

  receiptForm!: receiptForm;

 id!:number;
  image:any;
  constructor(private _receiptService:ReceiptService, private  sanitizer:DomSanitizer, private _router:Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.getOne(this.id);
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
