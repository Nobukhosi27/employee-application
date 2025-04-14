import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.auth.authenticate();
    if (!isAuthenticated) {
      this.router.navigate(['/employee-list']); // Redirect to home if authentication fails
      return false;
    }
    return true;
  }
}