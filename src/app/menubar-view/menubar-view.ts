import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

//Services
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/storage.service';

@Component({
  selector: 'app-menubar-view',
  imports: [
    CdkMenu,
    CdkMenuItem,
    MatSnackBarModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './menubar-view.html',
  styleUrl: './menubar-view.scss'
})

// test documentation
export class MenubarView {
  Router = inject(Router);
  localStorage = inject(LocalStorageService);
  snackBar = inject(MatSnackBar);
  /**
   * @function navToProfile
   * Navigates to the user profile page.

   * 
   * This function is triggered when the user clicks on the profile button in the menubar.
   * It uses the Angular Router to navigate to the 'profile' route.
   */
  navToProfile(): void {
    this.Router.navigate(['profile']);

  }

  /**
   * @function logOut
   * Logs the user out by clearing localStorage and navigating to the welcome page.
   */
  logOut(): void {
    // Clear localStorage
    this.localStorage.clear();
    // Navigate to welcome page
    this.Router.navigate(['welcome']);
    // Optionally, you can show a success message or update the UI
    this.snackBar.open('You have been logged out.', 'Close', {
      duration: 3000,
    });
  }

}
