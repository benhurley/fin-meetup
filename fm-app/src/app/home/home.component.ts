import { Component } from '@angular/core';
import { groups } from '../staticdatafiles/allgroups';
import { events } from '../staticdatafiles/allevents';
import { users } from '../staticdatafiles/allusers';
import {Router} from '@angular/router';

@Component({ 
    templateUrl: 'home.component.html', 
    styleUrls: ['./home.component.css'] 
})

export class HomeComponent {
    groups = groups;
    events = events;
    users = users;
    /* 
        create new group list based off of user membership. 
    */
    curUser = users[0]
    //curUser.groupMemberships
    /* 
        create new event list based off of user attendance. 
    */
}
