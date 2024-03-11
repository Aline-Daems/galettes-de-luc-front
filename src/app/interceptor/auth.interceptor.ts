import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor(private _router: Router) {


  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("ok")

    let JWT = localStorage.getItem("token");
    console.log(JWT)
    if (JWT) {
      const nouvelleReq = req.clone({

        headers: req.headers.set("Authorization", JWT)
      })
      return next.handle(nouvelleReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this._router.navigate(['/login'])
          }
          return throwError(error);
        }))
    } else {
      return next.handle(req);
    }
  }

};


