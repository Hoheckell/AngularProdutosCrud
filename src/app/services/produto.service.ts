import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Produto {
  id!: string;
  nome!: string;
  preco!: number;
  quantidade!: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // REST API
  endpoint = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProdutos(): Observable<Produto> {
    return this.httpClient.get<Produto>(this.endpoint + '/')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  showProduto(id: any): Observable<Produto> {
    return this.httpClient.get<Produto>(this.endpoint + '/produto/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addProduto(data: any): Observable<Produto> {
    return this.httpClient.post<Produto>(this.endpoint + '/add-produto', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  delProduto(id: any): Observable<Produto> {
    return this.httpClient.delete<Produto>(this.endpoint + '/delete-produto/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  updateProduto(id: any,data: any): Observable<Produto> {
    return this.httpClient.put<Produto>(this.endpoint + '/update-produto/' + id, JSON.stringify(data), this.httpHeader)
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
