import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

export class interceptor implements  HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("ok")

    let JWT = localStorage.getItem("token");
    console.log(JWT)
    if (JWT) {
      const nouvelleReq = req.clone({

        headers: req.headers.set("Authorization", JWT)
      })
      return next.handle(nouvelleReq)
    } else {
    return next.handle(req);
  }
  }

}
