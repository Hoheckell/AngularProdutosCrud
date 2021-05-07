import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {


  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};

  constructor(
    public usuarioService: UsuarioService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.usuarioService.showUsuario(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }

  updateUsuario(id:any, data:any) {
    if(window.confirm('Confirma alteração?')){
      this.usuarioService.updateUsuario(this.id, data).subscribe(res => {
        this.router.navigate(['/usuarios'])
      })
    }
  }

}
