import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `

  `
})

export class AnimalDetailComponent {
  @Input() animalDetail: Animal;
  @Input() animalIndex: number;

}
