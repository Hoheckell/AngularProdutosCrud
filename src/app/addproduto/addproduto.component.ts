import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})
export class AddprodutoComponent implements OnInit {

  @Input() prodObj = { nome: '', preco: 0, quantidade: 0 }

  constructor(
    public prodService: ProdutoService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  addProduto(data: any) {
    this.prodService.addProduto(this.prodObj).subscribe((data: {}) => {
      this.router.navigate(['/produtos'])
    });
  }

}
