import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";

class userForm {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:String) { }


  create(userForm: userForm){
    return this._httpClient.post(this._url+'/user/create', userForm)
  }
}
