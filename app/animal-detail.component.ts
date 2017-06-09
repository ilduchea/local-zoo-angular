import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `
    <div class="col-md-6">
      <h3 (click)="showDetails = !showDetails">{{animalDetail.name}} - {{animalDetail.species}}</h3>
      <ul *ngIf="showDetails">
        <li>Age: {{animalDetail.age}}</li>
        <li>Diet: {{animalDetail.diet}}</li>
        <li>Location: {{animalDetail.location}}</li>
        <li>Caretakers: {{animalDetail.caretakers}}</li>
        <li>Sex: {{animalDetail.sex}}</li>
        <li>Likes: {{animalDetail.likes[0]}}</li>
        <li>Dislikes: {{animalDetail.dislikes[0]}}</li>
        <li>Joined the Zoo on: {{animalDetail.created}}</li>
      </ul>
    </div>

  `
})

export class AnimalDetailComponent {
  @Input() animalDetail: Animal;
  @Input() animalIndex: number;

}
