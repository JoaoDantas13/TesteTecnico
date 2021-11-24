import { Cliente } from './../class/cliente';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs';
import { Produto } from '../class/produto';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'http://localhost:3000/cliente';
  private readonly API2 = 'http://localhost:3000/produto';

  constructor(private http: HttpClient) { }


 createproduto(produto){
   return this.http.post(this.API2,produto).pipe(take(1));
 }

 listProduto(){
   return this.http.get<Produto[]>(this.API2);
 }

list(){
  return this.http.get<Cliente[]>(this.API);
}

  create(clientes){
    return this.http.post(this.API,clientes).pipe(take(1));
  }
}
