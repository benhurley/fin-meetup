import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// Include new pages
import { EventsComponent } from './events';
import { GroupsComponent } from './groups';
import { JoinegComponent } from './joineg';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Include new pages
  { path: 'events', component: EventsComponent},
  { path: 'groups', component: GroupsComponent },
  { path: 'join', component: JoinegComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
