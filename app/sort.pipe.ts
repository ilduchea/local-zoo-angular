import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sort",
  pure: false
})


export class SortPipe implements PipeTransform {
  transform(input: Animal[], args) {
    var output: Animal[] = [];
    if (args === "young") {
      input.forEach(animal => {
        if (animal.age <= 2) {
          output.push(animal);
        }
      });
      return output;
    } else if (args === "mature") {
      input.forEach(animal => {
        if (animal.age > 2) {
          output.push(animal);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
