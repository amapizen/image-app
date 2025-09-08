import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';

import type { Gif } from '../interfaces/gif.interface';
import type { GiphyRespnse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyRespnse>(`${environment.giphyUrl}gifs/trending`, {
      params: {
        api_key: environment.giphyKey,
        limit: '25',
        rating: 'g'
      },
    })
    .subscribe( (resp) => {
      //console.log(resp);

      const gifs= GifMapper.mapGiphyItemsToGifArray( resp.data );
      this.trendingGifs.set(gifs);
      this.trendingGifLoading.set(false);
      //console.log({gifs});
    });
  }
}
