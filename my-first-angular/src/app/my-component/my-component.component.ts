import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyappService } from '../myapp.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  hello_world = "HELLO WORLD"

  constructor(
    private router: Router,
    private myappService: MyappService
  ) { }

  ngOnInit(): void {
  }

  chamaEstados(){
    this.myappService.getEstados()
  }

}
