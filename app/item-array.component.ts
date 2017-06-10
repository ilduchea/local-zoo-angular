import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'item-array',
  template: `
    <div class="row" *ngFor="let item of items; let i=index">
      <div class="col-md-2"></div>
      <input #itemValue="ngModel" [ngModel]="item">
      <button (click)="updateItem(itemValue.value, i, 'update')" class="btn std-btn">{{options[1]? "Add": "Update"}} {{options[0]}}</button>
      <button (click)="updateItem(itemValue.value, i, 'delete')" class="btn btn-danger">Delete</button>
    </div>
    <button (click)="addItem()" class="btn std-btn">Add New {{options[0]}}</button>

  `

})

export class ItemArrayComponent {
  @Input() items: string[];
  @Input() options: [string, boolean];
  @Output() updateItemSender = new EventEmitter();

  addItem() {
    this.items.push('');
  }

  updateItem(item: string, index: number, option: string) {
    if (option === 'update') {
      this.items.splice(index, 1, item);
    }
    if (option === 'delete') {
      this.items.splice(index, 1);
    }
    this.updateItemSender.emit(this.items);
  }

}
