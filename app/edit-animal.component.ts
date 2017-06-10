import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="showEdit">
      <div class="row">
        <label class="col-md-2">Species:</label>
        <input [(ngModel)]="editAnimal.species">
      </div>
      <div class="row">
        <label class="col-md-2">Name:</label>
        <input [(ngModel)]="editAnimal.name">
      </div>
      <div class="row">
        <label class="col-md-2">Age:</label>
        <input type="number" [(ngModel)]="editAnimal.age">
      </div>
      <div class="row">
        <label class="col-md-2">Diet:</label>
        <select [(ngModel)]="editAnimal.diet">
          <option value="Omnivore">Omnivore</option>
          <option value="Herbivore">Herbivore</option>
          <option value="Carnivore">Carnivore</option>
        </select>
      </div>
      <div class="row">
        <label class="col-md-2">Location:</label>
        <input [(ngModel)]="editAnimal.location">
      </div>
      <div class="row">
        <label class="col-md-2">Caretakers:</label>
        <input type="number" [(ngModel)]="editAnimal.caretakers">
      </div>
      <div class="row">
        <label class="col-md-2">Sex:</label>
        <input [(ngModel)]="editAnimal.sex">
      </div>
      <div class="row">
        <div class="row">
          <label class="col-md-2">Likes:</label>
        </div>
        <div class="row" *ngFor="let like of editAnimal.likes; let i=index">
          <div class="col-md-2"></div>
          <input name="like{{i}}" #likeValue="ngModel" [ngModel]="like">
          <button (click)="updateItem(likeValue.value, i, 'likes')" class="btn std-btn">Update</button>
        </div>
        <button (click)="addItem(editAnimal.likes)" class="btn std-btn">Add Like</button>
      </div>
      <div class="row">
        <div class="row">
          <label class="col-md-2">Dislikes:</label>
        </div>
        <div class="row" *ngFor="let dislike of editAnimal.dislikes; let i=index">
          <div class="col-md-2"></div>
          <input name="dislike{{i}}" #dislikeValue="ngModel" [ngModel]="dislike">
          <button (click)="updateItem(dislikeValue.value, i, 'dislikes')" class="btn std-btn">Update</button>
        </div>
        <button (click)="addItem(editAnimal.dislikes)" class="btn std-btn">Add Like</button>
      </div>
    </div>
    <button (click)="showEdit = !showEdit" class="btn std-btn">
      {{showEdit? "Done": "Edit"}}
    </button>

  `

})

export class EditAnimalComponent {
  @Input() editAnimal: Animal;
  @Output() updateItemSender = new EventEmitter();

  addItem(array: string[]) {
    array.push('');
  }

  updateItem(item: string, index: number, list: string) {
    if (list === 'likes') {
      this.editAnimal.likes.splice(index, 1, item);
    }
    if (list === 'dislikes') {
      this.editAnimal.dislikes.splice(index, 1, item);
    }
    this.updateItemSender.emit(this.editAnimal);
  }

}
