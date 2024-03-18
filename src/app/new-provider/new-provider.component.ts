import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProviderService} from "../services/provider.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrl: './new-provider.component.css'
})
export class NewProviderComponent implements OnInit{

  providerForm: FormGroup;

  isUpdate: boolean = false;

  itemId:number | null = null;

  constructor(private readonly _providerService: ProviderService, private _formBuilder: FormBuilder, private _router: Router, private _activateRoute:ActivatedRoute) {

    this.providerForm = this._formBuilder.group({
      name: this._formBuilder.control('', Validators.required),
      description: this._formBuilder.control('')
    })


  }

  ngOnInit(): void {

    this._activateRoute.params.subscribe(params => {

      if(params['mode'] === 'update') {

        this.itemId = +params ['id'];

        this.isUpdate = true;

        this.loadItem(this.itemId);
      }
    })
  }


  loadItem(id:number):void {

    this._providerService.getItemById(id).subscribe(data => {

      this.providerForm.patchValue(data)
    });
  }


  createOrUpdate() {

    if (this.providerForm.valid) {
      if(this.isUpdate && this.itemId !== null){

        this._providerService.update( this.itemId!, this.providerForm.value).subscribe(response => {

          this._router.navigate(['/providers'])

        })
      }else {
        this._providerService.create(this.providerForm.value).subscribe(() => this._router.navigate(['/providers']));

      }
    }
  }


}
