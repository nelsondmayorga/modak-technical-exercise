import { createAction, props } from '@ngrx/store';
import { IArtWork } from '../shared/types/artwork.interface';

export const getArtworks = createAction('[Home page] Get artworks');
export const searchArtworks = createAction('[Home page] Search artworks', props<{ searchTerm: string }>());
export const loadAllSuccess = createAction(
  '[Home page] Load artworks success',
  props<{ dataArtworks: IArtWork[] }>()
);
