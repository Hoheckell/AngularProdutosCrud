import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico, ServicoService } from '../services/servico.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nossosservicos',
  templateUrl: './nossosservicos.component.html',
  styleUrls: ['./nossosservicos.component.css']
})
export class NossosservicosComponent implements OnInit {

  loggedUser: any =  false;
  services: Servico[] = [{id:'',nome:'',descricao:'',image:''}];
  rota:any;
  constructor(public servicoService: ServicoService,
    public router: Router) { }

  ngOnInit(): void {
    this.rota = this.router.url;
    if(localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') != ""){
      this.loggedUser = true
    }

      this.servicoService.getServicos().subscribe((data: Servico[]) => {
        this.services = data;
      });
  }

}
