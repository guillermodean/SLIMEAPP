import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ListaCompraService } from 'src/app/services/lista-compra.service';


@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
  lista:any = {
    _id: null,
    Producto: '',
    Marca: '',
    Cantidad: 0,
    Check: false
  }
  displayedColumns: string[] = ['Producto', 'Marca', 'Cantidad', 'Check'];
  constructor(private listaCompraService:ListaCompraService) { }

  ngOnInit(): void {
    this.listaCompraService.getListaCompra()
      .subscribe(
        res => {
          this.lista = res;
          console.log(this.lista)
        },
        err => console.log(err)
      );
  }

}
