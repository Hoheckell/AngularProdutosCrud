import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {

  Produtos: any = [];
  constructor
  (
    public produtoService: ProdutoService,
    public router: Router
    ) {
  }

  ngOnInit(): void {
    this.fetchProduto();
  }

  fetchProduto() {
    return this.produtoService.getProdutos().subscribe((res: {}) => {
      this.Produtos = res;
    })
  }

  delete(produto: Produto) {
    return this.produtoService.delProduto(produto.id).subscribe((res: {}) => {
      this.fetchProduto();
    })
  }

}
