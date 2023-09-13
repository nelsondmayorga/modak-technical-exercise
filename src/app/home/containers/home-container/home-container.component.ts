import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ArtworksActions, ArtworksSelectors } from 'src/app/store';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  private store = inject(Store);
  artworks$ = this.store.select(ArtworksSelectors.artworks);

  ngOnInit(): void {
    this.store.dispatch(ArtworksActions.getArtworks());
  }
}
