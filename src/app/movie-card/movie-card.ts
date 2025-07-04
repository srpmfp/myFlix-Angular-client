import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


// Import Angular Material modules
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserRegistrationService } from '../fetch-api-data';
import { LocalStorageService } from '../services/storage.service';
import { MenubarView } from '../menubar-view/menubar-view';
import { DialogReturn } from '../details-dialog/details-dialog';


// Import Router for navigation
import { Router } from '@angular/router';
import { styleText } from 'node:util';



@Component({
  selector: 'app-movie-card',
  imports: [

    CommonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon,
    MenubarView

  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  localStorage = inject(LocalStorageService);


  movies: any[] = this.localStorage.getItem('movies') ? JSON.parse(this.localStorage.getItem('movies') || '[]') : [];

  private fetchApiData = inject(UserRegistrationService);
  private cdr = inject(ChangeDetectorRef);
  private Router = inject(Router);
  private snackBar = inject(MatSnackBar)

  navToProfile(): void {
    this.Router.navigate(['profile']);

  }


  dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, infoType: string, information: any): void {
    this.dialog.open(DialogReturn, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.setDialog(information, infoType)

    });
  }

/**
 * @function setDialog
 * Prepares the dialog data based on the information type.
 * @param data - The data to be displayed in the dialog.
 * Uses a switch statement to handle different information types (Genre, Director, Synopsis)
 * @param infoType - 
 * The parameter that determines which case to execute.
 * @returns The formatted dialog data.
 */

  setDialog(data: any, infoType: string): any {

    switch
    (infoType) {
      case ('Genre'): {
        console.log('Genre data:', data);
        return {
          title: infoType,
          content: {
            description: data.genre.description,
            genre: data.genre.genre
          }
        }
      }
      case ('Director'): {

        return {
          title: infoType,
          content: {
            name: data.name,
            description: data.bio,
            birthday: data.birthday,
            death: data.death
          }
        }

      }
      case ('Synopsis'): {
        return {
          title: infoType,
          content: {
            description: data.description
          }
        }
      }
    }
  }

  /**
   * @function ngOnInit
   * Initializes the component and fetches the list of movies.
   * This function is called when the component is created.
   */
  ngOnInit(): void {

    this.getMovies();

  }



/**
 * @function isFavorite
 * Checks if a movie is in the user's favorites list.
 * @param movieId - The ID of the movie to check.
 * @returns A string indicating whether the movie is a favorite or not to set CSS classes.
 */
  isFavorite(movieId: any): any {
    // const parsedMovies = JSON.parse(movieId || '[]');
    const user = this.localStorage.getItem('user');
    const parsedUser = JSON.parse(user || '{}');
    const favoriteMovies = parsedUser.movieId || [];


    if (favoriteMovies.includes(movieId._id)) {
      return 'selectFavorite'
    } else {
      return 'notFavorite'
    }
    // Trigger change detection to update the UI
  }

  /**
   * @function getMovies
   * Fetches the list of movies from the API and stores them in localStorage.
   * This function is called when the component is initialized.
   * @see UserRegistrationService.getAllMovies for API call
   * @see LocalStorageService {@link LocalStorageService.setItem} for storing movies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe({
      next: (resp: any) => {
        this.movies = resp;
        this.localStorage.setItem('movies', JSON.stringify(this.movies));
        this.cdr.detectChanges(); // Trigger change detection to update the UI
      },
      error: (error: any) => {
        console.log('Error loading movies:', error);
        // Handle the error appropriately
      }
    });
  }

  /**
   * @function addToFavorites
   * Adds or removes a movie from the user's favorites list. uses localstorage to optimistically update the UI.
   * @param movieId - The ID of the movie to be added or removed.
   * @see UserRegistrationService.addFavoriteMovie {@link UserRegistrationService.addFavoriteMovie} for API call
   * @see UserRegistrationService.deleteFavoriteMovie {@link UserRegistrationService.deleteFavoriteMovie} for API call
   * @see LocalStorageService {@link LocalStorageService.setItem} for storing user data
   * This  function optimistically updates the local state and then makes an API call.
   */

  addToFavorites(movieId: any): void {
    const localUser = this.localStorage.getItem('user');
    const user = JSON.parse(localUser || '{}');
    const favoriteMovies = user.movieId || [];

    const movieRequest = {
      movieId: movieId._id,
    }

    if (favoriteMovies.includes(movieId._id)) {
      //Remove from local storage
      const updatedFavorites = favoriteMovies.filter((id: string) => id !== movieId._id);
      user.movieId = updatedFavorites;
      this.localStorage.setItem('user', JSON.stringify(user));
      this.cdr.detectChanges();

      // Then make API call
      this.fetchApiData.deleteFavoriteMovie(user.Username, movieId._id).subscribe({
        next: (resp: any) => {
          this.snackBar.open('Movie removed from favorites!', 'Close', {
            duration: 3000,
          });
        },
        error: (error: any) => {
          // Revert on error
          user.movieId = favoriteMovies;
          this.localStorage.setItem('user', JSON.stringify(user));
          this.cdr.detectChanges();


          this.snackBar.open('Error removing movie from favorites.', 'Close', {
            duration: 3000,
          });
        }
      });
    } else {
      // Optimistically add to local state
      const updatedFavorites = [...favoriteMovies, movieId._id];
      user.movieId = updatedFavorites;
      this.localStorage.setItem('user', JSON.stringify(user));
      this.cdr.detectChanges();

      // Then make API call
      this.fetchApiData.addFavoriteMovie(user.Username, movieRequest).subscribe({
        next: (resp: any) => {

          this.snackBar.open('Movie added to favorites!', 'Close', {
            duration: 3000,
          });
        },
        error: (error: any) => {
          // Revert on error
          user.movieId = favoriteMovies;
          this.snackBar.open('Error adding movie to favorites.', 'Close', {
            duration: 3000,
          })
          this.localStorage.setItem('user', JSON.stringify(user));
          this.cdr.detectChanges();

        }
      });
    }
  }
}
