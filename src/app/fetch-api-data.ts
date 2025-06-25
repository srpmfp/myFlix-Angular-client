import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

const apiUrl = 'https://appflixcf-d4726ef19667.herokuapp.com/';

// const apiUrl = '/api/'; // Use relative path for local development
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) {

  }
//C
  public userRegistration(userDetails: any): Observable<any> {
    console.log('API call - userRegistration with:', userDetails);
    console.log('API URL:', apiUrl + 'users');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
     });

    const body = JSON.stringify(userDetails);


    return this.http.post(apiUrl + 'users', body, { headers }).pipe(
      map((response: any) => {
        console.log('Registration response:', response);
        return response;
      }),
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
    return this.http.post(apiUrl + 'users/' + userName +'/' + movieId, {}).pipe(
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
  }
  
  public getUser(userInfo: any): Observable<any> {
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
  public editUser(username: any, userData: any): Observable<any> {
    console.log(username, userData)
    return this.http.put(apiUrl + 'users/' + username, userData).pipe(
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