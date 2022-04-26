import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  private URL = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getListaCompra() {
    return this.http.get<any>(this.URL+'/lista');
  }
  getOneListaCompra(id:any) {
    return this.http.get<any>(this.URL+'/lista/'+id);
  }
  postListaCompra(lista: { Producto: string; Marca: string;Cantidad: number;Check: boolean; }){
    console.log(lista)
    return this.http.post<any>(this.URL+'/lista',lista);

  }
  deleteListaCompra(id:any){
    console.log(this.URL+'/lista/'+id,id)
    return this.http.delete<any>(this.URL+'/lista/'+id,id)
  }
  editListaCompra(id:any,lista: { Producto: string; Marca: string;Cantidad: number;Check: boolean; }){
    return this.http.put<any>(this.URL+'/lista'+id,lista)
  }
}
