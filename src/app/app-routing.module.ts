import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PlayOnlineComponent} from './pages/play-online/play-online.component';
import {HowToPlayComponent} from './pages/how-to-play/how-to-play.component';
import {AboutGameComponent} from './pages/about-game/about-game.component';
import {DownloadComponent} from './pages/download/download.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about-game',
    component: AboutGameComponent
  },
  {
    path: 'how-to-play',
    component: HowToPlayComponent
  },
  {
    path: 'play-online',
    component: PlayOnlineComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
