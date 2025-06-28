import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSignupForm } from '../user-signup-form/user-signup-form';
import { UserLoginForm } from '../user-login-form/user-login-form';


@Component({
  selector: 'app-welcome-view',
  imports: [ MatButtonModule],
  templateUrl: './welcome-view.html',
  styleUrl: './welcome-view.scss'
})
export class WelcomePage {
  protected title = 'myFlix-Angular-client';
  private dialog = inject(MatDialog);
  
  ngOnInit(): void {}

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
