import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { ArtworksActions } from '.';
import { ArtworksService } from '../shared/services/artworks.service';

@Injectable()
export class ArtworksEffects {
  private actions$ = inject(Actions);
  private artworksService = inject(ArtworksService);

  loadArtworks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtworksActions.getArtworks),
      exhaustMap(() =>
        this.artworksService
          .getArtworks()
          .pipe(map((artworks) => ArtworksActions.loadAllSuccess({ dataArtworks: artworks.data })))
      )
    )
  );

  searchArtworks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtworksActions.searchArtworks),
      exhaustMap((action) =>
        this.artworksService
          .searchArtworks(action.searchTerm)
          .pipe(map((artworks) => ArtworksActions.loadAllSuccess({ dataArtworks: artworks.data })))
      )
    )
  );
}
