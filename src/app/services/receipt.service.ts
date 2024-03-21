import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {url} from "../url";
import {Receipt, receiptForm} from "../models/receipt";

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  userConnected = new BehaviorSubject<string| null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:String, ) { }


  create(receiptForm: receiptForm): Observable<number | undefined>{
    return this._httpClient.post<number |undefined>(this._url+'receipt/create', receiptForm)

  }

  getOne(id:number){
      return this._httpClient.get<Receipt>(this._url+`receipt/${id}`)
  }

  getImageByID(id: number){
    return this._httpClient.get(this._url+`receipt/photo/${id}`, {responseType: 'blob'});
  }
  sendMail(receiptForm:receiptForm, templateName:string, providerId:number, materialId:number){

    const formData  = {
      receiptForm:receiptForm,
      templateName:templateName,
      providerId:providerId,
      materialId:materialId
    }
    return this._httpClient.post<String>(this._url+'mail/sendEmail', formData)
  }

}
