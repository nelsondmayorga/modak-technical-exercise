import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworksService } from 'src/app/shared/services/artworks.service';
import { IArtWorkResponse } from 'src/app/shared/types/artwork-list.interface';

@Component({
  selector: 'app-artwork-detail-container',
  templateUrl: './artwork-detail-container.component.html',
  styleUrls: ['./artwork-detail-container.component.scss'],
})
export class ArtworkDetailContainerComponent {
  private artworkService = inject(ArtworksService);
  artwork$ = new Observable<IArtWorkResponse>();

  @Input()
  set id(id: string) {
    this.artwork$ = this.artworkService.getArtwork(id);
  }

  // Before Angular 16
  /* ngOnInit(): void {
    this.artwork$ = this.getArtwork();
  }

  getArtwork(): Observable<IArtWorkResponse> {
    return this.route.paramMap.pipe(
      switchMap((params) => {
        const artworkId = params.get('id') as string;
        return this.artworkService.getArtwork(artworkId);
      })
    );
  } */
}
