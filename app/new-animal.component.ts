import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>New Animal</h2>
    <div class="col-md-6">
      <div class="row">
        <label class="col-md-2">Species:</label>
        <input #newSpecies>
      </div>
      <div class="row">
        <label class="col-md-2">Name:</label>
        <input #newName>
      </div>
      <div class="row">
        <label class="col-md-2">Age:</label>
        <input type="number" #newAge>
      </div>
      <div class="row">
        <label class="col-md-2">Diet:</label>
        <select #newDiet>
          <option value="Omnivore">Omnivore</option>
          <option value="Herbivore">Herbivore</option>
          <option value="Carnivore">Carnivore</option>
        </select>
      </div>
      <div class="row">
        <label class="col-md-2">Location:</label>
        <input #newLocation>
      </div>
      <div class="row">
        <label class="col-md-2">Caretakers:</label>
        <input type="number" #newCaretakers>
      </div>
      <div class="row">
        <label class="col-md-2">Sex:</label>
        <input #newSex>
      </div>
      <div class="row">
        <label class="col-md-2">Likes:</label>
        <input #newLikes>
      </div>
      <div class="row">
        <div class="row">
          <label class="col-md-2">Dislikes:</label>
        </div>
        <div class="row dislikes">
          <div class="col-md-2"></div>
          <input #newDislike>
          <button (click)="addItem(newDislike.value, 'dislikes')" class="btn std-btn">Add</button>
        </div>
      </div>
      <button class="btn std-btn" (click)="
        createAnimal(
          newSpecies.value,
          newName.value,
          newAge.value,
          newDiet.value,
          newLocation.value,
          newCaretakers.value,
          newSex.value
        );
        newSpecies.value='';
        newName.value='';
        newAge.value='';
        newLocation.value='';
        newCaretakers.value='';
        newSex.value='';
        newLikes.value='';
        newDislikes.value='';
      ">Add New Animal</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  likes: string[] = [];
  dislikes: string[] = [];

  createAnimal(
    species: string,
    name: string,
    age: number,
    diet: string,
    location: string,
    caretakers: number,
    sex: string,
    likes: string,
    dislikes: string
  ){
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, [likes], [dislikes]);
    this.newAnimalSender.emit(newAnimal);
  }
}
