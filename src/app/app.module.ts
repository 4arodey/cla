import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAuth } from './components/menu-auth/menu-auth';
import { Slider } from './components/slider/slider';
import { NewsPreviewComponent } from './components/news-preview/news-preview.component';
import { NewsPreviewItemComponent } from './components/news-preview-item/news-preview-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImageComponent } from './components/image/image.component';
import { LayoutItemComponent } from './components/layout-item/layout-item.component';
import { RatingComponent } from './components/rating/rating.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ButtonComponent } from './ui-kit/button/button.component';
import { AboutGameComponent } from './pages/about-game/about-game.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { PlayOnlineComponent } from './pages/play-online/play-online.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DownloadComponent } from './pages/download/download.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsItemComponent } from './components/reviews-item/reviews-item.component';
import { TextComponent } from './components/text/text.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { StaticNewsComponent } from './components/static-news/static-news.component';
import { ListComponent } from './components/list/list.component';
import { TokenInterceptor } from './interceptors/auth.interceptor';
import { ResponseFormComponent } from './components/response-form/response-form.component';
import {SharedService} from "./services/shared.service";
import { UsersComponent } from './components/users/users.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};



@NgModule({
  declarations: [
    AppComponent,
    MenuAuth,
    Slider,
    NewsPreviewComponent,
    NewsPreviewItemComponent,
    FooterComponent,
    FooterMenuComponent,
    CopyrightComponent,
    NewsItemComponent,
    MenuNavComponent,
    MenuComponent,
    ImageComponent,
    LayoutItemComponent,
    RatingComponent,
    CommentsComponent,
    HomeComponent,
    NewsComponent,
    ButtonComponent,
    AboutGameComponent,
    HowToPlayComponent,
    PlayOnlineComponent,
    AboutUsComponent,
    NotFoundComponent,
    DownloadComponent,
    SignupComponent,
    LoginComponent,
    RegistrationComponent,
    ReviewsComponent,
    ReviewsItemComponent,
    TextComponent,
    AuthComponent,
    UserProfileComponent,
    ProfileComponent,
    StaticNewsComponent,
    ListComponent,
    ResponseFormComponent,
    UsersComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
