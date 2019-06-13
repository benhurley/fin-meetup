import { Component } from '@angular/core';
import { groups } from '../staticdatafiles/allgroups';
import { events } from '../staticdatafiles/allevents';
import { users } from '../staticdatafiles/allusers';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    groups = groups;
    events = events;
    users = users;

    curUser = users[0]
    //curUser.groupMemberships
    newUserGroups = []
    newUserEvents = []
    //new group template 
    constructor() {
        var memSize = this.curUser.groupMemberships.length
        var ateSize = this.curUser.eventAttendance.length
        var groupSize = groups.length
        var eventSize = events.length
        // create new group list based off of user membership. 
        for (var i = 0; i < memSize; i++) {
            for (var j = 0; j < groupSize; j++) {
                if (this.curUser.groupMemberships[i] == groups[j].groupId) {
                    console.log(groups[j].groupId)
                    this.newUserGroups.push(groups[j])
                }
            }
        }
        // create new event list based off of user attendance.
        for (var i = 0; i < ateSize; i++) {
            for (var j = 0; j < eventSize; j++) {
                if (this.curUser.eventAttendance[i] == events[j].eventId) {
                    console.log(events[j].eventId)
                    this.newUserEvents.push(events[j])
                }
            }
        }
    }
}
