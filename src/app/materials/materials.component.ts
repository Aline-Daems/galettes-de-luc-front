import {Component, OnInit} from '@angular/core';
import {materialForm} from "../models/material";
import {MaterialService} from "../services/material.service";
import {Subject, takeUntil} from "rxjs";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faPen} from "@fortawesome/free-solid-svg-icons/faPen";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent implements OnInit{

  array!: materialForm[];
  $destroyed = new Subject<Boolean>()

  constructor(private readonly _materialService:MaterialService) {
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


  protected readonly faPlus = faPlus;
  protected readonly faXmark = faXmark;
  protected readonly faPen = faPen;
  protected readonly faCheck = faCheck;
}
