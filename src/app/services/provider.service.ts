import {Inject, Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";
import {providerForm} from "../models/provider";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:string) { }


  create(providerForm:providerForm){
    return this._httpClient.post(this._url+'provider/create', providerForm)

  }

  getAll(){

    return this._httpClient.get<providerForm[]>(this._url+"provider/all")
  }

  delete(providerId:number){

    return this._httpClient.put(this._url+`provider/delete/${providerId}`, null)
  }

  update( providerId:number, providerForm: providerForm,){

    return this._httpClient.put(this._url+`provider/update/${providerId}`, providerForm)
  }

  getItemById(id:number){

    return this._httpClient.get(this._url+`provider/${id}`);
  }
}


