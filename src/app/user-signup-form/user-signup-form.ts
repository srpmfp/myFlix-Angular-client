import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserRegistrationService } from '../fetch-api-data';

@Component({
  selector: 'app-user-signup-form',
  imports: [
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './user-signup-form.html',
  styleUrl: './user-signup-form.scss'
})
export class UserSignupForm {
  // Modern signal-based input
  userDetails = { Username: '', Password: '', email: '', birthday: '' };

  // Inject services using the modern inject() function
  private fetchApiData = inject(UserRegistrationService);
  private dialogRef = inject(MatDialogRef<UserSignupForm>);
  private snackBar = inject(MatSnackBar);
  // Function responsible for sending the form inputs to the backend

  /**
   * 
   * @function registerUser
   *  This function is called when the user submits the registration form.
   *  It validates the form data and sends a registration request to the backend.
   * If the registration is successful, it closes the dialog and shows a success message.
   * If there is an error, it displays an error message in a snackbar.
   * @see UserRegistrationService {@link UserRegistrationService.userRegistration} for the API interaction.
   * @returns {void}
   */
  registerUser(): void {

    // Validate form data
    if (!this.userDetails.Username || !this.userDetails.Password || !this.userDetails.email) {
      this.snackBar.open('Please fill in all required fields.', 'OK', {
        duration: 3000
      });
      return;
    }

    this.fetchApiData.userRegistration(this.userDetails).subscribe({
      next: (result) => {
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open('Registration successful!', 'OK', {
          duration: 2000
        });
      },
      error: (error) => {
        let errorMessage = 'Registration failed. Please try again.';

        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status === 0) {
          errorMessage = 'Cannot connect to server. Please check your internet connection.';
        } else if (error.status === 400) {
          errorMessage = 'Invalid registration data. Please check your inputs.';
        }

        this.snackBar.open(errorMessage, 'OK', {
          duration: 4000
        });
      }
    });
  }
}
