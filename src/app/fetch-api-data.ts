import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './services/storage.service';


const apiUrl = 'https://appflixcf-d4726ef19667.herokuapp.com/';

// const apiUrl = '/api/'; // Use relative path for local development
@Injectable({
  providedIn: 'root'
})

/**
 * @module UserRegistrationService
 * @remarks This module provides a service for user registration, login, and profile management in the MyFlix Angular application.
 *
 */
export class UserRegistrationService {

  constructor(private http: HttpClient) { }
  localStorage = inject(LocalStorageService);

  //C


  //Create User
  /**
   * 
   * @param userDetails - An object containing user details such as username, password, email, and birthday.
   * @example
   * ```typescript
   * const userDetails = {
   *   Username: 'john_doe',
   *   Password: 'securePassword123',
   *   Email: 'john@example.com',
   *   Birthday: '1990-01-01'
   * };
   * ```
   * @returns An observable containing the server response.
   */
  public userRegistration(userDetails: any): Observable<any> {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = JSON.stringify(userDetails);

    return this.http.post(apiUrl + 'users', body, { headers }).pipe(
      map((response: any) => {

        return response;
      }),
      catchError(this.handleError)
    );
  }

 
  /**
   * @function userLogin
   * @param user  
   * This function handles user login by sending a POST request to the server with the user's credentials.
   * It expects an object containing the username and password.
   *
   * @returns An observable containing the server response. 
   * If the login is successful, it stores the token in localStorage.
   * @example 
   * request body should be in the following format:
   * ```typescript
   * const user = {
   *   Username: 'john_doe',
   *   Password: 'securePassword123'
   * };
   * ```
   * Response will include a token if login is successful:
   * 
   * ```typescript
   * {
   *   token: 'your_jwt_token_here',
   *   user: {
   *     Passord: 'hashedPassword',
   *     Username: 'john_doe',
   *     Birthday: '1990-01-01',     
   *     Email: 'john@example.com'
   *     movieID: ['movieId1', 'movieId2'],
   *     _id: 'userId123',
   *   }
   * };
   * ```
   * @remarks
   * This function is used to authenticate users in the MyFlix Angular application.
   */


  public userLogin(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(apiUrl + 'login', user, { headers }).pipe(
      map((response: any) => {
        // Store token and user info in localStorage after successful login
        if (response.token) {
          this.localStorage.setItem('token', response.token);
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

/**
 * @function addFavoriteMovie
 * This function adds a movie to the user's favorite list.
 * It sends a POST request to the server with the user's username and the movie ID.
 * @param userName - The username of the user.
 * @param movieId - The ID of the movie to add.
 * @returns An observable containing the server response.
 */

  //Add a favorite movie to the user's list
  public addFavoriteMovie(userName: any, movieId: any): Observable<any> {
    return this.http.post(apiUrl + 'users/' + userName, movieId, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    }).pipe(
      map((response: any) => {

        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @function getOneMovie
   * This function retrieves details of a specific movie by its title.
   * It sends a GET request to the server with the movie title.
   * @param movieDetail - The title of the movie to retrieve.
   * @returns An observable containing the movie details.
  */

  public getOneMovie(movieDetail: any): Observable<any> {

    return this.http.get(apiUrl + 'movies/' + movieDetail, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    }).pipe(
      catchError(this.handleError)
    )
  }
  //Get Director by name
  /**
   * @function getDirector
   * @param directorName 
   * @returns 
   */
  public getDirector(directorName: any): Observable<any> {

    return this.http.get(apiUrl + 'movies/director/' + directorName, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    })
  }

  /**
   * @function getGenre
   * @param genreName 
   * @returns 
   * This function retrieves details of a specific genre by its name.
   * It sends a GET request to the server with the genre name.
   * @remarks
   */
  // get genre by name
  public getGenre(genreName: any): Observable<any> {

    return this.http.get(apiUrl + 'movies/genre/' + genreName, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    })
  }

  /**
   * @function getUser
   * @param userInfo - The username of the user to retrieve.
   * @returns An observable containing the user information.
   * This function retrieves user information by username.
   * It sends a GET request to the server with the username.
   * Be sure to include the token in the request headers for authentication.
   * @remarks
   * The user information includes details such as username, email, birthday, and favorite movies.
   */

  // Get user info by username
  public getUser(userInfo: any): Observable<any> {

    return this.http.get(apiUrl + 'users/' + userInfo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    }).pipe(
      map((response: any) => {
        // Store user info in localStorage when fetched
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @function editUser
   * This function updates user information such as username, email, and birthday.
   * @param Username - The username of the user to update.
   * @param userData - An object containing the updated user information.
   * @returns An observable containing the server response.
   * 
   */


  //Update user information
  public editUser(Username: any, userData: any): Observable<any> {

    return this.http.put(apiUrl + 'users/' + Username, userData, { //sends Username, email, birthday

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.localStorage.getItem('token'),
      })
    }).pipe(
      map((response: any) => {
        // Return the response properly
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @function deleteFavoriteMovie
   * This function removes a movie from the user's favorite list.
   * It sends a DELETE request to the server with the user's ID and the movie ID.
   * @param userId - The ID of the user.
   * @param movieId - The ID of the movie to remove from favorites.
   * @returns An observable containing the server response.
   */
  public deleteFavoriteMovie(userId: any, movieId: any): Observable<any> {

    return this.http.delete(apiUrl + 'users/' + userId + "/movies/" + movieId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.localStorage.getItem('token'),
      })
    }).pipe(
      map((response: any) => {
        // Update localStorage after removing favorite movie

        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @function getStoredUser
   * This function retrieves the stored user data from localStorage.
   * It parses the JSON string stored under the key 'user' and returns the user object.
   * @returns The user object if found, or null if not found.
   * @remarks
   * This function is used to access user data such as username, email, birthday, and favorite movies.
   * It is typically called after a user logs in or registers to retrieve their profile information.
   */
  // Local storage utility methods
  public getStoredUser(): any {
    const user = this.localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public getFavoriteMovies(): any {
    const user = this.getStoredUser();
    return user.movieID ? user.movieID : [];
  }


  public updateStoredUser(userData: any): void {
    this.localStorage.setItem('user', JSON.stringify(userData));
  }




  // Fetch all movies also requires a token

  public getAllMovies(): Observable<any> {
    try {
      return this.http.get(apiUrl + 'movies', {

        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.localStorage.getItem('token')
        })

      }).pipe(
        map((response: any) => {
          // Store movies in localStorage
          this.localStorage.setItem('movies', JSON.stringify(response));
          return response;
        }),
        catchError(this.handleError)
      );
    }
    catch (error) {

      return throwError(() => new Error('Failed to fetch movies'));
    }
  }


  //D

  public deleteUser(userId: any): Observable<any> {

    return this.http.delete(apiUrl + 'users/' + userId, {
     
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.localStorage.getItem('token') || ''
      })
    }).pipe(
      map(() => {
        // Clear stored user data and token after successful deletion
        this.localStorage.removeItem('user');
      }),
      catchError(this.handleError)
    );
  }


  //Error handling

  private handleError(error: HttpErrorResponse): any {
    console.error('HTTP Error occurred:', error);

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server returned code ${error.status}, error body:`, error.error);

      if (error.status === 0) {
        console.error('This is likely a CORS issue or network connectivity problem');
      }
    }

    return throwError(() => error);
  }
}