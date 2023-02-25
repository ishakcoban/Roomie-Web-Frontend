import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAdvertsComponent } from './pages/my-adverts/my-adverts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SavedAdvertsComponent } from './pages/saved-adverts/saved-adverts.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',/*canActivate:[AuthGuard]*/component:HomeComponent},
  {path:'adverts',/*canActivate:[AuthGuard]*/component:AdvertsComponent},
  {path:'my-adverts',/*canActivate:[AuthGuard]*/component:MyAdvertsComponent},
  {path:'saved-adverts',/*canActivate:[AuthGuard]*/component:SavedAdvertsComponent},
  {path:'profile'/*,canActivate:[AuthGuard]*/,component:ProfileComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
