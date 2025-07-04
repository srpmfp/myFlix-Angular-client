import { Component, inject, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../fetch-api-data';
import { LocalStorageService } from '../services/storage.service';
import { Pipe } from '@angular/core';


@Component({
  selector: 'app-profile-view',
  imports: [
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DatePipe

  ],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.scss'
})

/**
 * @module ProfileView
 * @name ProfileView
 * @link app/profile-view/profile-view.ts
 * @class ProfileView
 * @description
 * This module contains the ProfileView component, which allows users to view and edit their profile information.
 * It includes functionality to update user details such as username, email, and birthday,
 * as well as delete the user profile.
 * It uses Angular Material for UI components and services for API interactions.
 * @author Sean R. McGowan
 * @version 1.0.0
 * 
 */

export class ProfileView implements OnInit {
  localStorage = inject(LocalStorageService);
  userDetails = { Username: '', Password: '', email: '', birthday: '' };

  private fetchApiData = inject(UserRegistrationService);
  // private dialogRef = inject(MatDialogRef<ProfileView>);
  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);
  private Router = inject(Router);


  // Helper method to check if running in browser
  /**
   * @function isBrowser
   * Checks if the application is running in a browser environment.
   * @returns True if running in a browser, false otherwise.
   */
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }


  /**
   * @function ngOnInit
   * This function is called when the component is initialized.
   * It checks if a user is logged in by looking for a 'user' item in localStorage.
   * If no user is found, it redirects to the welcome page.
   */
  ngOnInit(): void {
    if (!this.localStorage.getItem('user')) {
      this.Router.navigate(['welcome']);
    }
    this.loadUserDetails();

  }

/**
 * @function loadUserDetails
 * Loads existing user details from localStorage and populates the userDetails object.
 * This function is called during component initialization to pre-fill the form with user data.
 * * It retrieves the user data from localStorage, parses it, and assigns the values to the userDetails object.
 * * @remarks
 */

  // Load existing user details from localStorage
  private loadUserDetails(): void {

    if (this.isBrowser()) {
      const storedUser = this.localStorage.getItem('user');
      const userData = JSON.parse(storedUser || '{}');

      if (userData) {
        try {

          this.userDetails = {
            Username: userData.Username,
            Password: '', // Don't pre-fill password for security
            email: userData.email,
            birthday: userData.birthday
          };
        } catch (error) {
          console.error('Error parsing stored user data:', error);
        }
      }
    }
  }

  /**
   * @function updateUser
   * This function is called when the user submits the profile update form.
   * It retrieves the current user data from localStorage,
   * validates the input, and sends an update request to the server.
   * * If the update is successful, it updates the localStorage with the new user data,
   * clears the password field in userDetails, and shows a success message.
   * * If there is an error during the update, it logs the error and shows an error message in a snackbar.
   * @see UserRegistrationService.editUser for the API interaction.
   * @see LocalStorageService for managing localStorage operations.
   * Updates the user profile information.
   * @returns void
   */

  updateUser(): void {
    if (!this.isBrowser()) {
      console.error('localStorage not available in server environment');
      return;
    }

    const storedUser = this.localStorage.getItem('user');
    const userData = JSON.parse(storedUser || '{}');

    // Include password if provided, otherwise send existing password or empty string
    const updateData = {
      Username: this.userDetails.Username,
      email: this.userDetails.email,
      birthday: this.userDetails.birthday,
      Password: this.userDetails.Password || '' // Include password field
    }

    try {


      this.fetchApiData.editUser(userData.Username, updateData).subscribe({
        next: (result) => {
          console.log('User updated successfully:', result);

          // Update localStorage with new user data
          this.localStorage.setItem('user', JSON.stringify(result));

          // Update local userDetails to reflect changes
          this.userDetails = {
            Username: result.Username,
            Password: '', // Clear password field after update
            email: result.email,
            birthday: result.birthday
          };

          // Show success message
          this.snackBar.open('Profile updated successfully!', 'OK', {
            duration: 2000
          });
        },
        error: (error) => {
          console.error('Error updating user:', error);
          this.snackBar.open('Failed to update profile. Please try again.', 'OK', {
            duration: 3000
          });
        }
      });
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      this.snackBar.open('Error loading user data.', 'OK', {
        duration: 3000
      });
    }
  }

  /**
   * @function deleteUser
   * Deletes the user profile by sending a request to the server.
   * It retrieves the username from localStorage, sends a delete request,
   * and handles the response.
   * If the deletion is successful, it clears the localStorage and navigates to the welcome page.
   * If there is an error, it logs the error and shows an error message in a snackbar.
   * @see UserRegistrationService.deleteUser for the API interaction.
   * @see LocalStorageService for managing localStorage operations.
   */

  deleteUser(): void {
    const Username = JSON.parse(this.localStorage.getItem('user') || '{}').Username;
      console.log('Deleting user with ID:', Username);
    this.fetchApiData.deleteUser(Username).subscribe({
      next: (result) => {
        console.log('User deleted successfully:', result);
        this.localStorage.removeItem('user');
        this.localStorage.removeItem('token');
        this.localStorage.removeItem('movies');
        this.Router.navigate(['welcome']);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        this.snackBar.open('Failed to delete profile. Please try again.', 'OK', {
          duration: 3000
        });
      }
    });
  }

  /**
   * @function goBack
   * Navigates back to the movies page.
   * This function is typically called when the user clicks a "Back" button in the profile view.
   *  @returns void
   */ 
  goBack(): void {

    this.Router.navigate(['/movies']); // or wherever you want to navigate back to

  }
}

