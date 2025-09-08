import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifListComponent } from '@components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.services';
import type { Gif } from '../../interfaces/gif.interface';

/* const imageUrls: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];
 */

@Component({
  selector: 'trending-page',
  imports: [ GifListComponent],
  standalone: true,
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  //gifs = imageUrls;
  //gifs = signal(imageUrls);
  gifsService = inject( GifsService );

}
