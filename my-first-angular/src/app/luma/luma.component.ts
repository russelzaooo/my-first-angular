import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luma',
  templateUrl: './luma.component.html',
  styleUrls: ['./luma.component.scss']
})
export class LumaComponent implements OnInit {

  meu_nome = "Luma Chen"

  constructor() { }

  ngOnInit(): void {
  }

}
