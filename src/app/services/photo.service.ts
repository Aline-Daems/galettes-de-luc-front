import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  previewImage: File | undefined;

  idForm?:number;
  constructor(private readonly  _httpClient:HttpClient, @Inject(url) private _url:string) { }


  captureImage(file:File, idForm:number){

    const formData = new FormData();

    formData.append('file', file);

    return this._httpClient.put(this._url+`receipt/file/${idForm}`, formData, { responseType: 'blob' })
  }
}
