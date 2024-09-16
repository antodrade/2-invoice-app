import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {

@Input() items: Item[] = [];

}
