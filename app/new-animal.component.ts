import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>New Animal</h2>
    <div>
      <label>Species:</label>
      <input #newSpecies>
    </div>
    <div>
      <label>Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Age:</label>
      <input type="number" #newAge>
    </div>
    <div>
      <label>Diet:</label>
      <select #newDiet>
        <option value="Omnivore">Omnivore</option>
        <option value="Herbivore">Herbivore</option>
        <option value="Carnivore">Carnivore</option>
      </select>
    </div>
    <div>
      <label>Location:</label>
      <input #newLocation>
    </div>
    <div>
      <label>Caretakers:</label>
      <input type="number" #newCaretakers>
    </div>
    <div>
      <label>Sex:</label>
      <input #newSex>
    </div>
    <div>
      <label>Likes:</label>
      <input #newLikes>
    </div>
    <div>
      <label>Dislikes:</label>
      <input #newDislikes>
    </div>
    <button class="btn btn-success" (click)="
      createAnimal(
        newSpecies.value,
        newName.value,
        newAge.value,
        newDiet.value,
        newLocation.value,
        newCaretakers.value,
        newSex.value,
        newLikes.value,
        newDislikes.value
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
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

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
