import { Component, input } from '@angular/core';
//import { GifItemComponent } from './item/gif-item.component';
import { GifListItemComponent } from '@components/gif-list/item/gif-list-item.component';


@Component({
  selector: 'gif-list',
  imports: [ GifListItemComponent ],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();
}
