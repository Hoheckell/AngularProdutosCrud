import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  loggedUser: any =  false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') != ""){
      this.loggedUser = true
    }
  }

  logout(){
    if(localStorage.getItem('auth_token') != null || localStorage.getItem('auth_token') != ""){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_email');
      this.loggedUser = false;
      this.router.navigate(['/login']);
    }
  }

}
