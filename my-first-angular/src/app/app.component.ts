import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-angular';


  constructor(
    private router: Router
  ) { }

  navegar(path:string){
    this.router.navigate([path])
  }
}
