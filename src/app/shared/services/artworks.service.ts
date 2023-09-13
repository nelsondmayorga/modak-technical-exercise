import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IArtWorkList, IArtWorkResponse } from '../types/artwork-list.interface';
import { environment } from 'src/environments/environment';
import { IArtWork } from '../types/artwork.interface';

@Injectable()
export class ArtworksService {
  private http = inject(HttpClient);

  getArtworks(): Observable<IArtWorkList> {
    return this.http
      .get<IArtWorkList>(`${environment.baseApi}/artworks?limit=25`)
      .pipe(catchError(() => this.errorHandler()));
  }

  getArtwork(id: string): Observable<IArtWorkResponse> {
    return this.http
      .get<IArtWorkList>(`${environment.baseApi}/artworks/${id}`)
      .pipe(catchError(() => this.errorHandler()));
  }

  searchArtworks(term: string): Observable<IArtWorkList> {
    return this.http
      .get<IArtWorkList>(`${environment.baseApi}/artworks/search?q=${term}&limit=50`)
      .pipe(catchError(() => this.errorHandler()));
  }

  private errorHandler(): Observable<any> {
    return of({});
  }
}
