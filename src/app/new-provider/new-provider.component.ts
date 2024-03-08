import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProviderService} from "../services/provider.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrl: './new-provider.component.css'
})
export class NewProviderComponent {

  providerForm: FormGroup;

  constructor(private readonly _providerService: ProviderService, private _formBuilder: FormBuilder, private _router: Router) {

    this.providerForm = this._formBuilder.group({
      name: this._formBuilder.control('', Validators.required),
      description: this._formBuilder.control('')
    })


  }

  create() {

    if (this.providerForm.valid) {

      this._providerService.create(this.providerForm.value).subscribe(() => this._router.navigate(['/providers']));
    }
  }


}
