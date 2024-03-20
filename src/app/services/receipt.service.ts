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

}
