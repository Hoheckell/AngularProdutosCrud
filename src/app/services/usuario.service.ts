import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppConfigs } from '../config/config';

export class Usuario {
  id!: string;
  nome!: string;
  email!: number;
  created_at!: Date;
  updated_at!: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  settings: AppConfigs;
  endpoint: string ;
  free_endpoint: string ;
  constructor(private httpClient: HttpClient) {
    this.settings = new AppConfigs();
    this.endpoint = this.settings.endpoint+'api/usuario';
    this.free_endpoint = this.settings.endpoint+'faztudo';
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('auth_token')
    })
  }

  getUsuarios(): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.endpoint + '/')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  showUsuario(id: any): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.endpoint + '/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addUsuario(data: any): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.free_endpoint + '/add-user', JSON.stringify(data))
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  delUsuario(id: any): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.endpoint +'/'+ id + '/delete', this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  updateUsuario(id: any,data: any): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.endpoint + '/' + id + '/update', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }


  login(loginObj: any): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.free_endpoint+"/login", JSON.stringify(loginObj), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}
