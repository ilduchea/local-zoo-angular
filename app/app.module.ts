import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListAnimalsComponent } from './list-animals.component';
import { AnimalDetailComponent } from './animal-detail.component'
import { NewAnimalComponent } from './new-animal.component'
import { EditAnimalComponent } from './edit-animal.component'
import { ItemArrayComponent } from './item-array.component'
import { SortPipe } from './sort.pipe'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ListAnimalsComponent,
    AnimalDetailComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    ItemArrayComponent,
    SortPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
