import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {url} from "../url";
import {receiptForm} from "../models/receipt";

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  userConnected = new BehaviorSubject<string| null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:String, ) { }


  create(receiptForm: receiptForm){
    return this._httpClient.post(this._url+'receipt/create', receiptForm)
  }

}
