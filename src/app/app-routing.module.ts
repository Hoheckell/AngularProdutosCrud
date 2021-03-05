import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodutoComponent } from './addproduto/addproduto.component';
import { EditprodutoComponent } from './editproduto/editproduto.component';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';

const routes: Routes = [
  { path: 'produto', component: AddprodutoComponent },
  { path: 'produtos', component: ListaprodutoComponent },
  { path: 'edit/:id', component: EditprodutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
