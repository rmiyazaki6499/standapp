import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component'
import { ProgressComponent } from './components/progress/progress.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
