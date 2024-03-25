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
import {PreviewFormComponent} from "./preview-form/preview-form.component";
import {AllReceiptsComponent} from "./all-receipts/all-receipts.component";
import {GetFormComponent} from "./get-form/get-form.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'create', component: CreateComponent,canActivate:[authGuard]},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'validation', component:ValidationComponent, canActivate:[authGuard]},
  {path:'providers', component:ProviderComponent},
  {path:'providers/new/:id', component:NewProviderComponent, canActivate:[authGuard]},
  {path:'receipts/new', component:ReceiptComponent, canActivate:[authGuard]},
  {path:'receipts/all', component:AllReceiptsComponent},
  {path:'photo', component:WebcamComponent, canActivate:[authGuard]},
  {path:'preview', component:PreviewComponent, canActivate:[authGuard]},
  {path:'material/new', component:NewMaterialComponent, canActivate:[authGuard]},
  {path:'material/new/:id', component:NewMaterialComponent, canActivate:[authGuard]},
  {path:'materials', component:MaterialsComponent},
  {path:'getForm/:id', component:GetFormComponent},
  {path:'', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
