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


export class ProfileView implements OnInit {
  localStorage = inject(LocalStorageService);
  userDetails = { Username: '', Password: '', email: '', birthday: '' };

  private fetchApiData = inject(UserRegistrationService);
  // private dialogRef = inject(MatDialogRef<ProfileView>);
  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);
  private Router = inject(Router);


  // Helper method to check if running in browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.localStorage.getItem('user')) {
      this.Router.navigate(['welcome']);
    }
    this.loadUserDetails();

  }

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

  goBack(): void {

    this.Router.navigate(['/movies']); // or wherever you want to navigate back to

  }
}

