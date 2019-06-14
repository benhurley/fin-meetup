import { Component } from '@angular/core';
import { users } from './staticdatafiles/allusers';
import { currentuser } from './currentuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = users;
  curuser = currentuser;
  title = 'Fin Meetup';
}
