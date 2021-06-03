import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddusuarioComponent } from './addusuario/addusuario.component';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NossosservicosComponent } from './nossosservicos/nossosservicos.component';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { MaosaobraComponent } from './maosaobra/maosaobra.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    AddusuarioComponent,
    ListaprodutoComponent,
    EditusuarioComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    NossosservicosComponent,
    HomeComponent,
    QuemsomosComponent,
    MaosaobraComponent
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
