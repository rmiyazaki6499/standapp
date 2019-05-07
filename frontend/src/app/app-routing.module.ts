import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StandupComponent } from './components/standup/standup.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ContactComponent } from './components/contact/contact.component';
import { StandupDetailComponent } from './components/standup-detail/standup-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'standups',
    component: StandupComponent
  },
  {
    path: 'standup/:standupId',
    component: StandupDetailComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
