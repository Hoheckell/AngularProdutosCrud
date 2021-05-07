import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('auth_token') == null || localStorage.getItem('auth_token') == ""){
      this.router.navigate(['/']);
    }
  }

}
