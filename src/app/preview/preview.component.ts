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


  preview: File| undefined;

  previewUrl : string="";


  constructor(private _photoService:PhotoService, private _router:Router) {
    this.preview =  this._photoService.previewImage;

    this.previewUrl = this._photoService.previewImageUrl;


  }


  return(){

    this._router.navigate(['/photo']);
  }
  proceed(){


    if(this._photoService.idForm !== undefined  && this._photoService.previewImage){

      this._photoService.captureImage(this._photoService.previewImage, this._photoService.idForm).subscribe(  () => {

         this._router.navigate(['/previewForm'])
      });
    }


  }

}
