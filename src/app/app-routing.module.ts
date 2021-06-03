import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusuarioComponent } from './addusuario/addusuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { EditusuarioComponent } from './editusuario/editusuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NossosservicosComponent } from './nossosservicos/nossosservicos.component';
import { ProfileComponent } from './profile/profile.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: AddusuarioComponent },
  { path: 'quemsomos', component: QuemsomosComponent },
  { path: 'nossosservicos', component: NossosservicosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'usuario/edit/:id', component: EditusuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
