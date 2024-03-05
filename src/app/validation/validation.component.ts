import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {

    protected readonly faUser = faUser;
  protected readonly faCheck = faCheck;
}
