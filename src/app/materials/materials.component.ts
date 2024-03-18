import {Component, OnInit} from '@angular/core';
import {materialForm} from "../models/material";
import {MaterialService} from "../services/material.service";
import {Subject, takeUntil} from "rxjs";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faPen} from "@fortawesome/free-solid-svg-icons/faPen";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {Router} from "@angular/router";


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent implements OnInit{

  array!: materialForm[];
  $destroyed = new Subject<Boolean>()

  constructor(private readonly _materialService:MaterialService, private readonly _router:Router) {
  }

  ngOnInit(): void {
    this.view();
  }

  view(){

    this._materialService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({

        next: (valeur) => this.array = valeur,
        error: (err) => console.log(err),
        complete: () => console.log("chargement ok")
      }
    )
  }

  desactive(materialId:number){

    this._materialService.desactive(materialId).subscribe(() => this.view())


  }

  gotToUpdate (itemId:number){
    this._router.navigate(['material/new', itemId, {mode: 'update'}])

  }


  protected readonly faPlus = faPlus;
  protected readonly faXmark = faXmark;
  protected readonly faPen = faPen;
  protected readonly faCheck = faCheck;
}
