import {Component, Input, input} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WebcamImage} from "ngx-webcam";
import {faTruckRampBox} from "@fortawesome/free-solid-svg-icons/faTruckRampBox";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {Router} from "@angular/router";
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent {
 stream:any = null;
 status: any=null;


 trigger: Subject<void> = new Subject();

 btnLabel:string ="Prendre une photo";

 constructor(private _router:Router, private _photoService:PhotoService) {
 }
 get $trigger(): Observable<void> {
   return this.trigger.asObservable();
 }


 snapshot(event: WebcamImage){
    console.log(event)

 const blob = this.dataURItoBlob(event.imageAsDataUrl);

    const file = new File([blob], 'captured_image.jpg', {type:'image/jpeg'})

   this._photoService.previewImage = file;
    this.btnLabel = 'Reprendre une photo'
 }

  dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: 'image/jpeg' });
  }
    checkPermissions(){
    navigator.mediaDevices.getUserMedia({
      video: {
          width: 250,
          height:250
      }
    }).then((res) => {
      console.log("response", res);
      this.stream = res;
      this.btnLabel = "Prendre une photo"

      })
      .catch(err => {
      console.log(err);
      this.status = err;

      if(err?.message === 'The request is not allowed by the user agent or the platform in the current context.'){

        this.status = 'Permission refusée. Merci d\'autoriser la caméra à accéder à l\'application'
      }else {
        this.status = "Vous n'avez pas de caméra. Merci de réessayer."
      }
    })
  }

  capture(){
    this.trigger.next()
    this._router.navigate(['/preview']);
  }



  protected readonly faTruckRampBox = faTruckRampBox;
  protected readonly faCamera = faCamera;
}
