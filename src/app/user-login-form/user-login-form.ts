import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserRegistrationService } from '../fetch-api-data';


@Component({
  selector: 'app-user-login-form',
  imports: [
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './user-login-form.html',
  styleUrl: './user-login-form.scss'
})
export class UserLoginForm {
  // Modern signal-based input
  userDetails = { Username: '', Password: '' };

  // Inject services using the modern inject() function
  private fetchApiData = inject(UserRegistrationService);
  private dialogRef = inject(MatDialogRef<UserLoginForm>);
  private snackBar = inject(MatSnackBar);

  // Function responsible for sending the form inputs to the backend
  loginUser(): void {
    console.log('Attempting login with data:', this.userDetails);

    // Validate form data
    if (!this.userDetails.Username || !this.userDetails.Password) {
      this.snackBar.open('Please fill in all required fields.', 'OK', {
        duration: 3000
      });
      return;
    }

    this.fetchApiData.userLogin(this.userDetails).subscribe({
      next: (result) => {
        console.log('Login successful:', result);
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open('Login successful!', 'OK', {
          duration: 2000
        });
      },
      error: (error) => {
        console.error('Login error:', error);
        let errorMessage = 'Login failed. Please try again.';

        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status === 0) {
          errorMessage = 'Cannot connect to server. Please check your internet connection.';
        } else if (error.status === 401) {
          errorMessage = 'Invalid username or password.';
        }

        this.snackBar.open(errorMessage, 'OK', {
          duration: 4000
        });
      }
    });
  }
}
