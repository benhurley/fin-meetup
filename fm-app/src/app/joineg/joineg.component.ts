import { Component } from '@angular/core';
import { groups } from '../staticdatafiles/allgroups';
import { users } from '../staticdatafiles/allusers';
import {Router} from '@angular/router';
@Component({ 
    templateUrl: 'joineg.component.html',
    styleUrls: ['./joineg.component.css'] 
})
export class JoinegComponent {
    constructor(private router: Router){

    }
    // Iterable list
    groups = groups;
    users = users;

    joinGroup(group, groupid, user, userid) {
        console.log("Joining this group: " + groupid + " " + group + " for user: " + userid + " " + user);
        // search through groups and check if user already belongs
        
        // then route to home
        this.router.navigate(["/"]);
    }
}