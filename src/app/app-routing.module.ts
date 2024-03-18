import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ValidationComponent} from "./validation/validation.component";
import {ProviderComponent} from "./provider/provider.component";
import {NewProviderComponent} from "./new-provider/new-provider.component";
import {ReceiptComponent} from "./receipt/receipt.component";
import {WebcamComponent} from "./webcam/webcam.component";
import {PreviewComponent} from "./preview/preview.component";
import {NewMaterialComponent} from "./new-material/new-material.component";
import {MaterialsComponent} from "./materials/materials.component";

const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'validation', component:ValidationComponent},
  {path:'providers', component:ProviderComponent},
  {path:'providers/new', component:NewProviderComponent},
  {path:'providers/new/:id', component:NewProviderComponent},
  {path:'receipts/new', component:ReceiptComponent},
  {path:'photo', component:WebcamComponent},
  {path:'preview', component:PreviewComponent},
  {path:'material/new', component:NewMaterialComponent},
  {path:'material/new/:id', component:NewMaterialComponent},
  {path:'materials', component:MaterialsComponent},
  {path:'', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
