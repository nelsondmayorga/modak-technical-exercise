import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ArtworksActions } from 'src/app/store';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  searchBox = new FormControl();
  emptyCharacter = '';

  ngOnInit(): void {
    this.searchBox.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (value === this.emptyCharacter) {
          this.store.dispatch(ArtworksActions.getArtworks());
        } else {
          this.store.dispatch(ArtworksActions.searchArtworks({ searchTerm: value }));
        }
      });
  }
}
