import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to home after successful login
      this.router.navigate(['/']);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
