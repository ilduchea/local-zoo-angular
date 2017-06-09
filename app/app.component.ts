import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Local Zoo</h1>
      </div>

      <list-animals [animals]="masterAnimalList"></list-animals>
      <!-- <new-animal></new-animal> -->

    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", ["Cool shade"], ["Loud noises"]),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", ["Laying in the sunshine"], ["Toys that are not rope-based"]),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", ["Delicate roots and leaves"], ["Loud Noises"]),
  ];

}
