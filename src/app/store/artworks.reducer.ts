import { createReducer, on } from '@ngrx/store';
import { ArtworksActions } from '.';

export interface ArtworksState {
  artworks: any[];
}

const initialState: ArtworksState = {
  artworks: [],
};

export const artworksReducer = createReducer(
  initialState,
  on(ArtworksActions.loadAllSuccess, (state, action) => ({ ...state, artworks: action.dataArtworks }))
);
