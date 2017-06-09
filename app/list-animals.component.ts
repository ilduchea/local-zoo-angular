import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animals',
  template: `
    <label for="sort">Sort by:</label>
    <select (change)="sortSelector($event.target.value)">
      <option value="all">All</option>
      <option value="young">Young</option>
      <option value="mature">Mature</option>
    </select>
    <ul>
      <li class="row" *ngFor="let animal of animals | sort:sortByOption; let i=index">
        <animal-detail [animalDetail]="animal" [animalIndex]="i" (removeAnimalSender)="removeAnimal($event)"></animal-detail>
      </li>
    </ul>
  `
})

export class ListAnimalsComponent {
  @Input() animals: Animal[];
  @Output() removeAnimalSender = new EventEmitter();

  sortByOption: string = "all";

  removeAnimal(i: number) {
    this.removeAnimalSender.emit(i);
  }

  sortSelector(sortOption: string) {
    this.sortByOption = sortOption;
  }

}
