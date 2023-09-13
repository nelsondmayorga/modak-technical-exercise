import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit(): void {
    const isAuthenticaded = Boolean(localStorage.getItem('token'));
    this.authService.setIsLoggedIn(isAuthenticaded);
  }
}
