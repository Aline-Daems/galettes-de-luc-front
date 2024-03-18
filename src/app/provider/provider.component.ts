import {Component, OnDestroy, OnInit, Provider} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {providerForm} from "../models/provider";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faPen} from "@fortawesome/free-solid-svg-icons/faPen";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent implements  OnInit, OnDestroy{


  array!: providerForm[];
  $destroyed = new Subject<Boolean>()

  constructor(private readonly _providerService:ProviderService, private _router:Router) {
  }

  ngOnInit(){

    this.afficher();

  }


  afficher(){
    this._providerService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur) => this.array = valeur,
      error:(err) => console.log(err)

    })
  }

  delete(providerId:number){

  this._providerService.delete(providerId).subscribe(()=>
    this.afficher())

  }

  gotToUpdate (itemId:number){
    this._router.navigate(['providers/new', itemId, {mode: 'update'}])

  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }


  protected readonly faHouse = faHouse;
  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;
  protected readonly faXmark = faXmark;
  protected readonly faPen = faPen;
}
