import { Component, OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';

@Component
({
  selector: 'app-luma',
  templateUrl: './luma.component.html',
  styleUrls: ['./luma.component.scss']
})
export class LumaComponent implements OnInit 
{
  estados: any = this.getEstados();
  myName= "Luma Chen";
  http: any;

  constructor(private myappService: MyappService) 
  {
  }

  ngOnInit(): void //executa quando abre o componente
  {
    for (let i= 0; i < this.estados.length; i++)
    {
      let estado= this.estados[i];
    }
  }
  
  getEstados ()
  {
    this.myappService.getEstadosRequest().subscribe 
    (
      sucesso =>
      {
        this.estados= sucesso;
        console.log (this.estados);
      },
      erro =>
      {
       console.log(erro);
      }
    ) 
  }
}