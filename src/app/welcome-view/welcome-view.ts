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
  
  /**
   * @function ngOnInit
   * 
   * This function is called when the component is initialized.
   * It checks if a token exists in localStorage.
   * If a token exists, it redirects the user to the movies page.
   * @returns {void}
   */
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      // If token exists, redirect to profile
      this.Router.navigate(['movies']);
    }
  }

  /**
   * @function openUserRegistrationDialog
   *  Opens the user registration dialog.
   *  This function is triggered when the user clicks on the "Sign Up" button.
   * @see UserSignupForm {@link UserSignupForm} for the registration form component.
   * @returns {void}
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserSignupForm, {
      width: '280px'
    });
  }
  /**
   * @function openUserLoginDialog
   * Opens the user login dialog.
   * This function is triggered when the user clicks on the "Login" button.
   * @see UserLoginForm {@link UserLoginForm} for the login form component.
   * * @returns {void}
   */

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginForm, {
      width: '280px'
    });
  }
}
