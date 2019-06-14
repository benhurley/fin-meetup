import { Component } from '@angular/core';
import { events } from '../staticdatafiles/allevents';
import { users } from '../staticdatafiles/allusers';
import { Router } from '@angular/router';
import { currentuser } from '../currentuser';

@Component({
    templateUrl: 'joinevent.component.html',
    styleUrls: ['./joinevent.component.css']
})

export class JoineventComponent {
    constructor(private router: Router) {

    }
    // Iterable list
    events = events;
    users = users;
    curuser = currentuser;

    joinEvent(event, eventid, user, userid) {
        console.log("Joining this event: " + eventid + " " + event + " for user: " + userid + " " + user);
        // search through groups and check if user already belongs

        // then route to home
        this.router.navigate(["/"]);
    }
}