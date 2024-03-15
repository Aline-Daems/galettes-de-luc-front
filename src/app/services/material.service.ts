import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";
import {materialForm} from "../models/material";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private  readonly _httpClient:HttpClient, @Inject(url) private _url:string) { }

  create(materialForm:materialForm){

    return this._httpClient.post(this._url+'material/create', materialForm)
  }

  getAll() {

    return this._httpClient.get<materialForm[]>(this._url+ 'material/all')
  }

}


