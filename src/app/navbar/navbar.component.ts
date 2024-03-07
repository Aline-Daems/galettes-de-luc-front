import {Component, OnInit} from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faRectangleList} from "@fortawesome/free-solid-svg-icons/faRectangleList";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faTruckRampBox} from "@fortawesome/free-solid-svg-icons/faTruckRampBox";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons/faRightToBracket";
import {BehaviorSubject, Subscription} from "rxjs";
import {UserService} from "../services/user.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    isConnected: boolean = false;




    protected readonly faHouse = faHouse;
    protected readonly faUser = faUser;
    protected readonly faRectangleList = faRectangleList;

    protected readonly faUserPlus = faUserPlus;
    protected readonly faTruckRampBox = faTruckRampBox;

    protected readonly faPowerOff = faPowerOff;


    constructor(private readonly _userService: UserService) {
    }

    ngOnInit(): void {

         this._userService.userConnected.subscribe(status => {
                this.isConnected = status !== null;
            }
        )

    }


    logout() {

        const token = localStorage.getItem("token")

        if (token !== null) {

            localStorage.removeItem("token");
            localStorage.clear();

        }
    }

    protected readonly faRightToBracket = faRightToBracket;
}
