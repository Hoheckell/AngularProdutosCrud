import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  loggedUser: any =  false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') != ""){
      this.loggedUser = true
    }
  }

}
