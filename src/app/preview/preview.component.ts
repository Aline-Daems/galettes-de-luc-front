import {Component, Input} from '@angular/core';
import {WebcamImage} from "ngx-webcam";
import {PhotoService} from "../services/photo.service";
import {Router} from "@angular/router";
import {ReceiptService} from "../services/receipt.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {


  preview:string =""

  constructor(private _photoService:PhotoService, private _router:Router, private  receiptService:ReceiptService) {
    this.preview =  this._photoService.previewImage
  }


  return(){

    this._router.navigate(['/photo']);
  }
  proceed(){
    console.log(this._photoService.previewImage);

    console.log(this._photoService.id)

    if(this._photoService.id !== undefined){

      this._photoService.captureImage(this._photoService.previewImage, this._photoService.id).subscribe(  () => {

         this._router.navigate(['/home'])
      });
    }


  }

}
