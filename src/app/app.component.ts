import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mini-store';

  constructor(public authService: AuthService, private router: Router, public cartservice: CartService) {}

  toggleLogin(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
      alert('Logged out');
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
