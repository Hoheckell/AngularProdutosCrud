import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editproduto',
  templateUrl: './editproduto.component.html',
  styleUrls: ['./editproduto.component.css']
})
export class EditprodutoComponent implements OnInit {


  id = this.actRoute.snapshot.params['id'];
  prodObj: any = {};

  constructor(
    public prodService: ProdutoService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.prodService.showProduto(this.id).subscribe((res: {}) => {
      this.prodObj = res;
    })
  }

  updateProduto(id:any, data:any) {
    if(window.confirm('Confirma alteração?')){
      this.prodService.updateProduto(this.id, data).subscribe(res => {
        this.router.navigate(['/produtos'])
      })
    }
  }

}
