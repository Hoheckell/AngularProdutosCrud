import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loginObj = { email: '', password: '' }
  authObj:any = {};
  constructor(public userService: UsuarioService,
    public router: Router) {

  }

  ngOnInit(): void {
  }

  submit(){
    this.userService.login(this.loginObj).subscribe((data: {}) => {
      this.authObj = data;
      if(this.authObj.token){
        localStorage.setItem("auth_token",this.authObj.token);
        localStorage.setItem('user_email',this.authObj.email);
        this.router.navigate(['/dashboard'])
      }
    });
  }

}
