import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { IApiResponse } from 'src/app/shared/types/api-response.interface';
import { ILoginRequest } from '../types/login-request.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<IApiResponse | null>(null);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  currentUser$ = this.currentUser.asObservable();

  login(loginRequest: ILoginRequest): Observable<IApiResponse> {
    return this.http.get<IApiResponse>('../../assets/fake-api.json').pipe(catchError(() => this.errorHandler()));
  }

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn.next(value);
  }

  setCurrentUser(value: IApiResponse): void {
    this.currentUser.next(value);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private errorHandler(): Observable<any> {
    return throwError(() => new Error('Error in Auth Service.'));
  }
}
