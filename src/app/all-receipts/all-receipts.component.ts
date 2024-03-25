import {Component, OnInit} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {Receipt, receiptForm} from "../models/receipt";
import {Subject, takeUntil} from "rxjs";
import {ReceiptService} from "../services/receipt.service";
import {Router} from "@angular/router";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

@Component({
  selector: 'app-all-receipts',
  templateUrl: './all-receipts.component.html',
  styleUrl: './all-receipts.component.css'
})
export class AllReceiptsComponent  implements OnInit{
  array!: Receipt[];

  $destroyed = new Subject<Boolean>();

  constructor(private readonly _receiptService:ReceiptService, private readonly _router:Router) {


  }

  ngOnInit(): void {

    this.view();
  }

  view(){

    this._receiptService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({

      next:(valeur) => this.array = valeur,
      error:(err) => console.log(err)
    })
  }

  desactive(id:number){


    this._receiptService.desactive(id).subscribe( () => this.view())

  }


  protected readonly faPlus = faPlus;
  protected readonly faXmark = faXmark;
}
