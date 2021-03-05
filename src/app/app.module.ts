import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddprodutoComponent } from './addproduto/addproduto.component';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditprodutoComponent } from './editproduto/editproduto.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    AddprodutoComponent,
    ListaprodutoComponent,
    EditprodutoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
