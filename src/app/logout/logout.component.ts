import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) { }
  loggedUser: any =false;

  ngOnInit(): void {
    if(localStorage.getItem('auth_token') != null || localStorage.getItem('auth_token') != ""){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_email');
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/']);
    }
  }


}
