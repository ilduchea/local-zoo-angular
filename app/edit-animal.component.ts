import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="showEdit">
      <div>
        <label>Species:</label>
        <input [(ngModel)]="editAnimal.species">
      </div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="editAnimal.name">
      </div>
      <div>
        <label>Age:</label>
        <input type="number" [(ngModel)]="editAnimal.age">
      </div>
      <div>
        <label>Diet:</label>
        <select [(ngModel)]="editAnimal.diet">
          <option value="Omnivore">Omnivore</option>
          <option value="Herbivore">Herbivore</option>
          <option value="Carnivore">Carnivore</option>
        </select>
      </div>
      <div>
        <label>Location:</label>
        <input [(ngModel)]="editAnimal.location">
      </div>
      <div>
        <label>Caretakers:</label>
        <input type="number" [(ngModel)]="editAnimal.caretakers">
      </div>
      <div>
        <label>Sex:</label>
        <input [(ngModel)]="editAnimal.sex">
      </div>
      <div>
        <label>Likes:</label>
        <input [(ngModel)]="editAnimal.likes">
      </div>
      <div>
        <label>Dislikes:</label>
        <input [(ngModel)]="editAnimal.dislikes">
      </div>
    </div>
    <button (click)="showEdit = !showEdit" class="btn">
      {{showEdit? "Done": "Edit"}}
    </button>

  `

})

export class EditAnimalComponent {
  @Input() editAnimal: Animal;

}
