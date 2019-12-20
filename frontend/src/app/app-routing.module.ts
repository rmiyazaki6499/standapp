import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StandupComponent } from './components/standup/standup.component';
import { StandupListComponent } from './components/standup-list/standup-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TeamComponent } from './components/team/team.component';
import { TeamListComponent } from './components/team-list/team-list.component';

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
    path: 'standup/:standupId',
    component: StandupListComponent
  },
  {
    path: 'standups',
    component: StandupComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'team/:teamId',
    component: TeamComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
