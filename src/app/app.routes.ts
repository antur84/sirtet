import { Routes } from '@angular/router';
import { MainMenuPageComponent } from './pages/main-menu-page/main-menu-page.component';
import { HighscorePageComponent } from './pages/highscore-page/highscore-page.component';

export const routes: Routes = [
  { component: MainMenuPageComponent, path: '' },
  { component: HighscorePageComponent, path: 'highscore' },
];
