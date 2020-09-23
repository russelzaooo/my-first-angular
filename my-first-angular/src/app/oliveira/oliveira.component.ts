import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oliveira',
  templateUrl: './oliveira.component.html',
  styleUrls: ['./oliveira.component.scss']
})
export class OliveiraComponent implements OnInit {

  Myname = "Gabriel Oliveira";
  Mygit = "https://www.github.com/gabrielsoli"

  constructor() { }

  ngOnInit(): void {

  }

}
