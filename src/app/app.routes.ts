import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-view/welcome-view';
import { MovieCard } from './movie-card/movie-card';
import { ProfileView } from './profile-view/profile-view';

export const routes: Routes = [
    { path: 'welcome', component: WelcomePage },
  { path: 'movies', component: MovieCard },
  {path: 'profile', component: ProfileView},
   { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
];
