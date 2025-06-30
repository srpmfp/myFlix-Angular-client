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
export class MenubarView {
  Router = inject(Router);
  localStorage = inject(LocalStorageService);
  snackBar = inject(MatSnackBar);
  navToProfile(): void {
    this.Router.navigate(['profile']);

  }

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
