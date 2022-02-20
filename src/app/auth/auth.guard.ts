import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log('i am here');
    return this.authService.userIsAuthenticated;
  }
}
