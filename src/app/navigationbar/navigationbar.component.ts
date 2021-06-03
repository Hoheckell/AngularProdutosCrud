import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  loggedUser: any =  false;
  rota:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rota = false;
    if(this.router.url == '/'){
      this.rota = true;
    }
    if(localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') != ""){
      this.loggedUser = true
    }
  }

  home(){
    this.router.navigate(['/home']);
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
