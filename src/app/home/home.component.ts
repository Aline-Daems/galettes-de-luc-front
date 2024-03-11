import {Component, OnInit} from '@angular/core';
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faRectangleList} from "@fortawesome/free-solid-svg-icons/faRectangleList";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {Router} from "@angular/router";
import {faTruckRampBox} from "@fortawesome/free-solid-svg-icons/faTruckRampBox";
import {faTruckFront} from "@fortawesome/free-solid-svg-icons/faTruckFront";
import {faEgg} from "@fortawesome/free-solid-svg-icons/faEgg";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons/faClipboardList";


  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    firstname:string=""
      ngOnInit(): void {
          this.getFirstname()
      }

      getFirstname(){

      const token = localStorage.getItem('token');
      const firstname = localStorage.getItem('firstname')

        if(firstname){
          this.firstname = firstname;
        }
      }

    protected readonly faTruck = faTruck;
    protected readonly faUserPlus = faUserPlus;
    protected readonly faRectangleList = faRectangleList;
    protected readonly faUser = faUser;

    constructor(private _router:Router) {

    }

    receipt(){

    this._router.navigate(['/receipt'])
    }

    createUser(){
      this._router.navigate(['/create'])
    }

    forms(){
      this._router.navigate(['/forms'])
    }

    profile(){
      this._router.navigate(['/profile'])
    }

    newProvider(){

      this._router.navigate(['/providers/new'])
    }
    providers(){

      this._router.navigate(['/providers'])
    }

    protected readonly faTruckRampBox = faTruckRampBox;
    protected readonly faTruckFront = faTruckFront;
    protected readonly faEgg = faEgg;
    protected readonly faClipboardList = faClipboardList;
  }
