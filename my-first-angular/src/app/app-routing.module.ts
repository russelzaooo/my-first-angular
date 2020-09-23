import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LumaComponent } from './luma/luma.component';
import { MartinhoComponent } from './martinho/martinho.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { OliveiraComponent } from './oliveira/oliveira.component';

const routes: Routes = [
  { path: '', component: MyComponentComponent },
  { path: 'luma', component: LumaComponent },
  { path: 'oliveira', component: OliveiraComponent },
  { path: 'martinho', component: MartinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
