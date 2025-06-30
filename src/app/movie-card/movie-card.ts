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
            bio: data.bio,
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

  ngOnInit(): void {

    this.getMovies();

  }




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
