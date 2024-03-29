import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin(): void {
    this.authService.login();
    console.log(this.authService.userIsAuthenticated);
    this.router.navigate(['home']);
  }

  onLogout(): void {
    this.authService.logout();
  }
}
