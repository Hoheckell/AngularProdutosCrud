import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppConfigs } from '../config/config';

export class Servico {
  id!: string;
  nome!: string;
  descricao!: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  settings: AppConfigs;
  endpoint: string ;
  free_endpoint: string ;
  constructor(private httpClient: HttpClient) {
    this.settings = new AppConfigs();
    this.endpoint = this.settings.endpoint+'api/servico';
    this.free_endpoint = this.settings.endpoint+'faztudo';
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    })
  }

  getServicos(): Observable<Servico> {
    return this.httpClient.get<Servico>(this.endpoint + '/')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  showServico(id: any): Observable<Servico> {
    return this.httpClient.get<Servico>(this.endpoint + '/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addServico(data: any): Observable<Servico> {
    return this.httpClient.post<Servico>(this.free_endpoint + '/add-servico', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  delServico(id: any): Observable<Servico> {
    return this.httpClient.delete<Servico>(this.endpoint +'/'+ id + '/delete', this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  updateServico(id: any,data: any): Observable<Servico> {
    return this.httpClient.put<Servico>(this.endpoint + '/' + id + '/update', JSON.stringify(data), this.httpHeader)
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
