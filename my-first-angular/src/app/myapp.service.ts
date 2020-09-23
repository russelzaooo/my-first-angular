import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(
    private http: HttpClient
  ) { }

  getEstadosRequest(){
    return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  }

  getEstados(){

   this.getEstadosRequest().subscribe(
     sucesso =>{
        console.log(sucesso)
     },
     erro =>{
      console.log(erro)
     }
   ) 

  }
}
