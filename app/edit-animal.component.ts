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
        <item-array [items]="editAnimal.likes" [options]="itemArrayOptionsLike" (updateItemSender)="likesUpdate($event)"></item-array>
      </div>
      <div class="row">
        <div class="row">
          <label class="col-md-2">Dislikes:</label>
        </div>
        <item-array [items]="editAnimal.dislikes" [options]="itemArrayOptionsDislike" (updateItemSender)="dislikesUpdate($event)"></item-array>
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
  itemArrayOptionsLike: [string, boolean] = ['Like', false];
  itemArrayOptionsDislike: [string, boolean] = ['Dislike', false];

  likesUpdate(likes: string[]) {
    this.editAnimal.likes = likes;
    this.updateItemSender.emit(this.editAnimal);
  }

  dislikesUpdate(dislikes: string[]) {
    this.editAnimal.dislikes = dislikes;
    this.updateItemSender.emit(this.editAnimal);
  }

}
