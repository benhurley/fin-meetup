import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// Include new pages
import { EventsComponent } from './events';
import { GroupsComponent } from './groups';
import { JoinegComponent } from './joineg';
import { CreateegComponent } from './createeg';
import { JoineventComponent } from './joinevent';
import { CreateeventComponent } from './createevent';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Include new pages
  { path: 'events', component: EventsComponent},
  { path: 'groups', component: GroupsComponent },
  { path: 'join', component: JoinegComponent },
  { path: 'create', component: CreateegComponent },
  { path: 'joinEvent', component: JoineventComponent },
  { path: 'createEvent', component: CreateeventComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
