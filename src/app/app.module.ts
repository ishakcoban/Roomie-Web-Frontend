import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { AdvertCardComponent } from './components/advert-card/advert-card.component';
import { PopupComponent } from './components/popup/popup.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SavedAdvertsComponent } from './pages/saved-adverts/saved-adverts.component';
import { LoadingIndicatorComponent } from './components/loading-indicators/loading-indicator/loading-indicator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupService } from './services/popup.service';
import { ProfileService } from './services/profile.service';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { PopupUpdateContentComponent } from './components/popup/popup-update-content/popup-update-content.component';
import { PopupCreateContentComponent } from './components/popup/popup-create-content/popup-create-content.component';
import { PopupShowContentComponent } from './components/popup/popup-show-content/popup-show-content.component';
import { SortingSectionComponent } from './components/sorting-section/sorting-section.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { LastViewedSectionComponent } from './components/last-viewed-section/last-viewed-section.component';
import { HelpCenterSectionComponent } from './components/help-center-section/help-center-section.component';
import { MyAdvertsComponent } from './pages/my-adverts/my-adverts.component';
import { LoginRegisterBackgroundComponent } from './components/login-register-background/login-register-background.component';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { InputDesignComponent } from './components/input-design/input-design.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonLoadingIndicatorComponent } from './components/loading-indicators/button-loading-indicator/button-loading-indicator.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PhotoSliderComponent } from './components/photo-slider/photo-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    AdvertsComponent,
    AdvertCardComponent,
    PopupComponent,
    SuccessMessageComponent,
    NotFoundComponent,
    NavbarComponent,
    SavedAdvertsComponent,
    LoadingIndicatorComponent,
    CustomInputComponent,
    PopupUpdateContentComponent,
    PopupCreateContentComponent,
    PopupShowContentComponent,
    SortingSectionComponent,
    FilterSectionComponent,
    LastViewedSectionComponent,
    HelpCenterSectionComponent,
    MyAdvertsComponent,
    LoginRegisterBackgroundComponent,
    InputDesignComponent,
    ButtonLoadingIndicatorComponent,
    ErrorMessageComponent,
    PhotoSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    /*AuthGuard,*/ HttpService,
    PopupService,
    ProfileService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
