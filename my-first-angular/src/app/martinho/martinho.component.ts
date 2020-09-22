import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martinho',
  templateUrl: './martinho.component.html',
  styleUrls: ['./martinho.component.scss']
})
export class MartinhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostraNome() : void{
    alert("Gabriel Martinho :)");

    document.getElementById('areaDoButton').innerHTML = '<span style="color: red;">¡Gabriel Martinho!</span>';

    document.getElementById('areaDoButton').className = "rodar";

  }

}
