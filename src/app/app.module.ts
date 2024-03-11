import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import {url} from "./url";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {NavbarComponent} from "./navbar/navbar.component";
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ValidationComponent } from './validation/validation.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ProviderComponent } from './provider/provider.component';
import { NewProviderComponent } from './new-provider/new-provider.component';
import {authInterceptor} from "./interceptor/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ValidationComponent,
    ReceiptComponent,
    ProviderComponent,
    NewProviderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgOptimizedImage
  ],
  providers: [
    {provide: url, useValue:"http://localhost:8080/"},
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
