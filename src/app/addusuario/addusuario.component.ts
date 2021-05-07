import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {

  @Input() userObj = { nome: '', email: '', password: '' }

  constructor(
    public userService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  addUsuario(data: any) {
    this.userService.addUsuario(this.userObj).subscribe((data: {}) => {
      this.router.navigate(['/login'])
    });
  }

}
