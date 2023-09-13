import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { ArtworkCardComponent } from './components/artwork-card/artwork-card.component';
import { ArtworksEffects, artworksReducer } from '../store';
import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworksService } from '../shared/services/artworks.service';
import { HoverScaleDirective } from './directives/hover-scale.directive';

@NgModule({
  declarations: [HomeContainerComponent, ArtworkCardComponent, SearchBoxComponent, HoverScaleDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('artworksState', artworksReducer),
    EffectsModule.forFeature([ArtworksEffects]),
  ],
  providers: [ArtworksService],
})
export class HomeModule {}
