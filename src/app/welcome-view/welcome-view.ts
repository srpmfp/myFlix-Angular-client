import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSignupForm } from '../user-signup-form/user-signup-form';
import { UserLoginForm } from '../user-login-form/user-login-form';
import { LocalStorageService } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-view',
  imports: [MatButtonModule],
  templateUrl: './welcome-view.html',
  styleUrl: './welcome-view.scss'
})
export class WelcomePage {
  protected title = 'myFlix-Angular-client';
  private dialog = inject(MatDialog);
  private Router = inject(Router);
  private localStorage = inject(LocalStorageService);
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      // If token exists, redirect to profile
      this.Router.navigate(['movies']);
    }
  }

  openUserRegistrationDialog(): void {
    this.dialog.open(UserSignupForm, {
      width: '280px'
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginForm, {
      width: '280px'
    });
  }
}
