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
      <li class="row" *ngFor="let animal of animals; let i=index">
        <animal-detail [animalDetail]="animal" [animalIndex]="i"></animal-detail>
      </li>
    </ul>
  `
})

export class ListAnimalsComponent {
  @Input() animals: Animal[];
  sortByOption: string = "all";

  sortSelector(sortOption: string) {
    this.sortByOption = sortOption;
  }

}
