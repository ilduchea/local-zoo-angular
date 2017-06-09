import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbtron">
        <h1>local-zoo</h1>
      </div>

      <list-animals></list-animals>
      <new-animal></new-animal>

    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [

  ];

}
