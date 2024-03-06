import { Component } from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";
import {faReceipt} from "@fortawesome/free-solid-svg-icons/faReceipt";
import {faRectangleList} from "@fortawesome/free-solid-svg-icons/faRectangleList";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faTruckRampBox} from "@fortawesome/free-solid-svg-icons/faTruckRampBox";
import {faTruckFront} from "@fortawesome/free-solid-svg-icons/faTruckFront";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  protected readonly faHouse = faHouse;
  protected readonly faUser = faUser;
  protected readonly faRectangleList = faRectangleList;

  protected readonly faUserPlus = faUserPlus;
  protected readonly faTruckRampBox = faTruckRampBox;

}
