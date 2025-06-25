import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSignupForm } from './user-signup-form/user-signup-form';
import { UserLoginForm } from './user-login-form/user-login-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'myFlix-Angular-client';
  private dialog = inject(MatDialog);

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
