import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';
import { ILoginRequest } from '../../types/login-request.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IApiResponse } from 'src/app/shared/types/api-response.interface';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  errorMessage: string | null = null;

  onSubmit(credentials: ILoginRequest): void {
    this.authService
      .login(credentials)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (currentUser) => {
          this.setUserInfoData(currentUser);
          this.errorMessage = null;
          this.router.navigateByUrl('/home');
        },
        error: (error: HttpErrorResponse) => {
          console.log('error', error.error);
          this.errorMessage = error.error;
        },
      });
  }

  setUserInfoData(currentUser: IApiResponse) {
    this.authService.setCurrentUser(currentUser);
    this.authService.setIsLoggedIn(true);
    this.authService.setToken(currentUser.accessToken);
  }
}
