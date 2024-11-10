import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private username: string | null = null;

  // Simulate a login
  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') { 
      this.isLoggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  // Logout method
  logout(): void {
    this.isLoggedIn = false;
    this.username = null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Get username of the logged-in user
  getUsername(): string | null {
    return this.username;
  }
}
