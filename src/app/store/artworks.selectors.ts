import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArtworksState } from './artworks.reducer';

export const artworksState = createFeatureSelector<ArtworksState>('artworksState');
export const artworks = createSelector(artworksState, (artworksState) => artworksState.artworks);