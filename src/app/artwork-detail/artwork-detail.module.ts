import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArtworkDetailRoutingModule } from './artwork-detail-routing.module';
import { ArtworkDetailComponent } from './components/artwork-detail/artwork-detail.component';
import { ArtworkDetailContainerComponent } from './containers/artwork-detail-container/artwork-detail-container.component';
import { SharedModule } from '../shared/shared.module';
import { ArtworksService } from '../shared/services/artworks.service';

@NgModule({
  declarations: [ArtworkDetailComponent, ArtworkDetailContainerComponent],
  imports: [CommonModule, RouterModule, ArtworkDetailRoutingModule, SharedModule],
  providers: [ArtworksService],
})
export class ArtworkDetailModule {}
