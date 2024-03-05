import { Component } from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";
import {faReceipt} from "@fortawesome/free-solid-svg-icons/faReceipt";
import {faRectangleList} from "@fortawesome/free-solid-svg-icons/faRectangleList";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  protected readonly faHouse = faHouse;
  protected readonly faUser = faUser;
  protected readonly faTruck = faTruck;
  protected readonly faReceipt = faReceipt;
  protected readonly faRectangleList = faRectangleList;
}
