import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {

  Usuarios: any = [];
  constructor
  (
    public usuarioService: UsuarioService,
    public router: Router
    ) {
  }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  fetchUsuarios() {
    return this.usuarioService.getUsuarios().subscribe((res: {}) => {
      this.Usuarios = res;
    })
  }

  delete(usuario: Usuario) {
    return this.usuarioService.delUsuario(usuario.id).subscribe(() => {
      this.fetchUsuarios();
    })
  }

}
