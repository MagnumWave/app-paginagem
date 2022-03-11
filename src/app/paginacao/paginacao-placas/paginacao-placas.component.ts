import { Component, OnInit, Input } from '@angular/core';
import { PlacasServiceService } from '../placas-service.service';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-paginacao-placas',
  templateUrl: './paginacao-placas.component.html',
  styleUrls: ['./paginacao-placas.component.css']
})
export class PaginacaoPlacasComponent implements OnInit {

  page: number = 0;
  size: number = 10;

  @Input()scope!: string;
  headers = [
    {header: "ID", property: "id", orderType: "none"},
    {header: "Mark Number", property: "markNumber", orderType: "none"},
    {header: "Código SAP", property: "codigoSap", orderType: "none"},
    {header: "Peso", property: "peso", orderType: "none"},
    {header: "Altura", property: "altura", orderType: "none"},
    {header: "Largura", property: "largura", orderType: "none"},
    {header: "Espessura", property: "espessura", orderType: "none"}
  ];

  realLista:any = {};
  isLoading: boolean = false;
  isErrado: boolean = false;

  constructor(private _service: PlacasServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.consultaPraMim(this.scope, this.page, this.size);
  }

  // logaPraMim(){
  //   console.log(this.realLista.content);
  // }

  consultaPraMim(scope:string, page:number, size:number, params?:HttpParams){
    this._service.getAll(scope, page, size, params).subscribe(resp => {
      console.log(resp);
      this.realLista = resp;
      this.isLoading = false;
    },
    err => {
      console.log(err);
      this.isErrado = true;
      this.isLoading = false;
    })

  }

  ordena(index:number){
    let columnOrder = this.headers[index].orderType;
    let columnProperty = this.headers[index].property;
    let params = new HttpParams();

    switch (columnOrder) {
      case "none":
        columnOrder = "asc";
        break;

      case "asc":
        columnOrder = "desc";
        break;

      case "desc":
        columnOrder = "none";
        break;
    }

    this.headers[index].orderType = columnOrder;

    if (columnOrder !== "none"){
      params = params.append("property", columnProperty);
      params = params.append("order", columnOrder);
    }

    this.consultaPraMim(this.scope,this.page,this.size, params);
  }

  resetaPraMim(){
    this.headers.forEach(zezito => {
      zezito.orderType = "none";
    });

    this.consultaPraMim(this.scope, this.page, this.size);
  }
}
