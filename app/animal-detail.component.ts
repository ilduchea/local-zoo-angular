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
        <li>Likes:
          <ul>
            <li *ngFor="let like of animalDetail.likes; let i=index">{{like}}</li>
          </ul>
        </li>
        <li>Dislikes:
          <ul>
            <li *ngFor="let dislike of animalDetail.dislikes; let i=index">{{dislike}}</li>
          </ul>
        </li>
        <li>Joined the Zoo on: {{animalDetail.created | date:mediumDate}}</li>
      </ul>
    </div>

    <div class="col-md-6">
      <edit-animal *ngIf="showDetails" [editAnimal]="animalDetail" (updateItemSender)="updateAnimal($event)"></edit-animal>
      <button class="btn btn-danger" (click)="removeAnimal(animalIndex)">Remove</button>
    </div>
  `
})

export class AnimalDetailComponent {
  @Input() animalDetail: Animal;
  @Input() animalIndex: number;
  @Output() removeAnimalSender = new EventEmitter();

  removeAnimal(i: number) {
    this.removeAnimalSender.emit(i);
  }

  updateAnimal(animal: Animal) {
    this.animalDetail = animal;
  }



}
