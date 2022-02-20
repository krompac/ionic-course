import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = false;

  constructor(private router: Router) {}

  public get userIsAuthenticated() {
    if (!this._userIsAuthenticated) {
      this.router.navigate(['/auth']);
    }

    return this._userIsAuthenticated;
  }

  login(): void {
    this._userIsAuthenticated = true;
    this.router.navigate(['/places']);
  }

  logout(): void {
    this._userIsAuthenticated = false;
    this.router.navigate(['/auth']);
  }
}
