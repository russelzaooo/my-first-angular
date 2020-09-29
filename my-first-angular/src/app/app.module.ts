import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { LumaComponent } from './luma/luma.component';
import { MartinhoComponent } from './martinho/martinho.component';
import { OliveiraComponent } from './oliveira/oliveira.component';
import { MyappService } from './myapp.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    LumaComponent,
    MartinhoComponent,
    OliveiraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MyappService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }