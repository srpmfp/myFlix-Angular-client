import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


// Import Angular Material modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserRegistrationService } from '../fetch-api-data';
import { LocalStorageService } from '../services/storage.service';

// Import Router for navigation
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  imports: [

    CommonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon
   ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard implements OnInit {
  localStorage = inject(LocalStorageService);

  
  movies: any[] = [];

  private fetchApiData = inject(UserRegistrationService);
    private cdr = inject(ChangeDetectorRef);
    private Router = inject(Router);
  
navToProfile():void {
    this.Router.navigate(['profile']);

  }

  ngOnInit(): void {
  if(!this.localStorage.getItem('user')) { 
      this.Router.navigate(['welcome']);
    }
    // Initialize the component and fetch movies
      this.getMovies();

  }
 
  

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe({
      next: (resp: any) => {
        this.movies = resp;
    
        console.log('Movies loaded:', this.movies);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error loading movies:', error);
        // Handle the error appropriately
      }
    });
  }
  addToFavorites(movieId: any): void {
    const localUser = this.localStorage.getItem('user');

    const id = this.movies.find((movie: any) => movie.id === movieId)?.id;
    console.log ( localUser, id);
    // this.fetchApiData.addFavoriteMovie(localUser, movieId).subscribe({
    //   next: (resp: any) => {
    //     console.log('Movie added to favorites:', resp);
    //     this.cdr.detectChanges();
    //     // Optionally, you can show a success message or update the UI
    //   },
    //   error: (error: any) => {
    //     console.error('Error adding movie to favorites:', error);
    //     // Handle the error appropriately
    //   }
    // });
  }
}
