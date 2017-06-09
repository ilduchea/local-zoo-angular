import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListAnimalsComponent } from './list-animals.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ 
    AppComponent,
    ListAnimalsComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
