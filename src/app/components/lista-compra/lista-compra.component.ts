import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ListaCompraService } from 'src/app/services/lista-compra.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPseudoCheckbox } from '@angular/material/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
  lista: any = {
    _id: null,
    Producto: '',
    Marca: '',
    Cantidad: 0,
    Check: false
  }
  producto: any = {
    _id: null,
    Producto: '',
    Marca: '',
    Cantidad: 0,
    Check: false
  }
  selectedRow: any = {
    _id: null,
    Producto: '',
    Marca: '',
    Cantidad: 0,
    Check: false
  }
  dataSource = [];
  displayedColumns: string[] = ['Producto', 'Marca', 'Cantidad', 'Check'];
  

  constructor(private listaCompraService: ListaCompraService) { }

  ngOnInit(): void {
    this.listaCompraService.getListaCompra()
      .subscribe(
        res => {
          this.lista = res;
          this.dataSource = this.lista;

        },
        err => console.log(err)
      );
  }


radioSelected() {
  console.log(this.selectedRow);
}
  postListaCompra() {
    this.producto.Check = true;
    this.listaCompraService.postListaCompra(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit()
        },
        err => {
          console.log(err)
          alert('error al introducir tarea')
        }
      )

  }
  
}
