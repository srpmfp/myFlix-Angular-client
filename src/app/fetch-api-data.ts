import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

const apiUrl = 'https://myflix-2023.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) {

  }
//C

  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails)
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }
  // User login function
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails)
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      map((response: any) => {
        // Store token and user info in localStorage after successful login
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  public addFavoriteMovie(userName: any, movieId: any): Observable<any> {
    console.log(userName, movieId)
    return this.http.post(apiUrl + 'users/' + userName + movieId, {}).pipe(
      catchError(this.handleError)
    );
  }
  
//R

  public getOneMovie(movieDetail: any): Observable<any> {
    console.log(movieDetail)
    return this.http.get(apiUrl + 'movies/' +movieDetail).pipe(
      catchError(this.handleError)
    )
  }
  
  public getDirector(directorName: any): Observable<any> {
    console.log(directorName)
    return this.http.get(apiUrl + 'movies/director/' + directorName)
  }

  public getGenre(genreName: any): Observable<any> {
    console.log(genreName)
    return this.http.get(apiUrl + 'movies/genre/' + genreName)
  }  public getUser(userInfo: any): Observable<any> {
    console.log(userInfo)
    return this.http.get(apiUrl + 'users/' + userInfo).pipe(
      map((response: any) => {
        // Store user info in localStorage when fetched
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      }),
      catchError(this.handleError)
    );
  }
  //U
  public editUser(userId: any, userData: any): Observable<any> {
    console.log(userId, userData)
    return this.http.put(apiUrl + 'users/' + userId, userData).pipe(
      map((response: any) => {
        // Update stored user data after successful edit
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      }),
      catchError(this.handleError)
    );
  }

 
  public deleteFavoriteMovie(userId: any, movieId: any): Observable<any> {
    console.log(userId, movieId)
    return this.http.delete(apiUrl + 'users/' + userId+ "/" + movieId).pipe(
      catchError(this.handleError)
    );
  }

  // Local storage utility methods
  public getStoredUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public getFavoriteMovies(): any {
    const user = this.getStoredUser();
    return user.movieID ? user.movieID : [];
  }

  public getStoredToken(): string | null {
    return localStorage.getItem('token');
  }

  public clearStoredData(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  public updateStoredUser(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
  }


  
  
  // Fetch all movies also requires a token
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      catchError(this.handleError)
    );  } //modern angular uses observables to handle asynchronous operations so dont need the private variable

  
  
  //D

  public deleteUser(userId: any): Observable<any> {
    console.log(userId)
    return this.http.delete(apiUrl + 'users/' + userId).pipe(
      map(() => {
        // Clear stored user data and token after successful deletion
        this.clearStoredData();
      }),
      catchError(this.handleError)
    );
  }
  

  //Error handling
  
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message)
    } else {
      console.error(
        'Error status code: ${error.status}, ' +
        'Error body: ${error.error}'
      )
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
 }