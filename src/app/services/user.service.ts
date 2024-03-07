import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";

import {BehaviorSubject, tap} from "rxjs";
import {AuthDTO, loginForm} from "../models/user";

class userForm {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userConnected = new BehaviorSubject<string| null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:String) { }

  create(userForm: userForm){
    return this._httpClient.post(this._url+'user/create', userForm)
  }

  login(loginform: loginForm){

    return this._httpClient.post<AuthDTO>(this._url+'user/login', loginform).pipe(tap (data=> {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("firstname", data.firstname);

      console.log(data);

      this.userConnected.next(data.email)
    }))
  }


  updateUserStatus(status:string |null){

    this.userConnected.next(status);
  }



}
