import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptService} from "../services/receipt.service";
import {ActivatedRoute, Router} from "@angular/router";
import {providerForm} from "../models/provider";
import {ProviderService} from "../services/provider.service";
import {Subject, takeUntil} from "rxjs";
import {DateValidator} from "../validators/date.validator";
import {PhotoService} from "../services/photo.service";
import {ReceiptValidator} from "../validators/receipt.validator";
import {MaterialService} from "../services/material.service";
import {materialForm} from "../models/material";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent implements OnInit {

  receiptForm: FormGroup;
  array!: providerForm[];

  materiaArray!: materialForm[];
  fresh: boolean = false;

  errorDate? = " La date d'expiration doit être supérieur à la date du jour"
  errorFrozen = "Si le produit est congelé, merci de rentrer toutes les informations nécessaires"
  errorQuantity = "La quantité doit être supérieur à 0"
  selectedMaterial: any | null = null;

  $destroyed = new Subject<Boolean>()

  constructor(private readonly _receiptService: ReceiptService, private readonly _formBuilder: FormBuilder, private _router: Router, private _providerService: ProviderService, private _photoService: PhotoService, private _materialService: MaterialService, private _activateRoute: ActivatedRoute) {

    this.receiptForm = this._formBuilder.group({
      dateReceipt: this._formBuilder.control((new Date()).toISOString().substring(0, 10)),
      email: this._formBuilder.control(this.getEmail()),
      materialId: this._formBuilder.control('', Validators.required),
      providerId: this._formBuilder.control('', Validators.required),
      providerNumber: this._formBuilder.control('', Validators.required),
      quantity: this._formBuilder.control('', [Validators.required, Validators.min(0)]),
      expirationDate: this._formBuilder.control(((new Date()).toISOString().substring(0, 10) + 1), [Validators.required, DateValidator()]),
      temperature: this._formBuilder.control(''),
      frozen: this._formBuilder.control(false),
      frozenTemp: this._formBuilder.control('', ReceiptValidator('frozen')),
      frozenDate: this._formBuilder.control(''),
      thawedDate: this._formBuilder.control(''),
      frozenExpirationDate: this._formBuilder.control(''),
      frozenDays: this._formBuilder.control(''),
      labelling: this._formBuilder.control(false),
      labelComment: this._formBuilder.control(''),
      packaging: this._formBuilder.control(false),
      packagingComment: this._formBuilder.control(''),
      hygiene: this._formBuilder.control(false),
      hygieneComment: this._formBuilder.control(''),
      comment: this._formBuilder.control(''),

    })
  }

  ngOnInit(): void {

    this._providerService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next: (value) => this.array = value,
      error: (err) => console.log(err.err()),
      complete: () => console.log("Chargement des fournisseurs effectués")


    })


    this._materialService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({

        next: (valeur) => this.materiaArray = valeur,
        error: (err) => console.log(err),
        complete: () => console.log("chargement ok")
      }
    )
  }


  getEmail() {
    return localStorage.getItem('email');
  }

  create() {
    if (this.receiptForm.valid) {


      this._receiptService.create(this.receiptForm.value).subscribe(id => {

        console.log(id)
        this._photoService.id = id
        this._router.navigate(['/photo'])
      });
    } else {
      console.log(this.receiptForm.get("expirationDate")?.errors)
      console.log(this.receiptForm.get("frozenTemp")?.errors)

    }
  }

  onMaterialChange(): void {
    const materialId = this.receiptForm.value.materialId;

    this.selectedMaterial = this.materiaArray.find(m => m.id === materialId)

    if (this.selectedMaterial && this.selectedMaterial.fresh) {
      this.fresh = true
    } else {
      this.fresh = false;
    }

  }


}
