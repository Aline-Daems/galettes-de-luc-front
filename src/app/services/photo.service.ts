import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  previewImage: string = "";

  id?:number;
  constructor(private readonly  _httpClient:HttpClient, @Inject(url) private _url:string) { }


  captureImage(file:String, id:number){

    return this._httpClient.put<any>(this._url+`receipt/file/${id}`, file)
  }
}
