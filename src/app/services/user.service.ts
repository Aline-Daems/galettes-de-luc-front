import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../url";

import {BehaviorSubject, tap} from "rxjs";
import {AuthDTO, loginForm, UserForm} from "../models/user";

class userForm {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userConnected = new BehaviorSubject<string| null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(url) private _url:string) { }

  create(userForm: UserForm){
    return this._httpClient.post(this._url+'user/create', userForm)
  }

  login(loginform: loginForm){

    return this._httpClient.post<AuthDTO>(this._url+'user/login', loginform).pipe(tap (data=> {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      localStorage.setItem("roles", data.roles)
      localStorage.setItem("firstname", data.firstname);

      this.userConnected.next(data.email)


    }))
  }

  logout() {

    const token = localStorage.getItem("token")

    if (token !== null) {

      localStorage.removeItem("token");
      localStorage.clear();

    }
  }

  getUserRole():string | null {

    const token = localStorage.getItem('roles');
    return  token;
  }

  getOne(id:number){
    return this._httpClient.get<UserForm>(this._url+`user/${id}`);
  }


}
