import {Component, OnInit} from '@angular/core';


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

}
