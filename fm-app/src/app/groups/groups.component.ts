import { Component } from '@angular/core';
/* . . . */
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* . . . */
import { groups } from '../staticdatafiles/allgroups';
import { events } from '../staticdatafiles/allevents';
/* . . . */
import { Router } from '@angular/router';

@Component({
    templateUrl: 'groups.component.html',
    styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
    groups = groups
    events = events

    groupToDisplay
    newGroupEvents = []
    eventDateInfo = []

    constructor(route: ActivatedRoute, private router: Router) {
        const id: Observable<string> = route.params.pipe(map(p => p.id));
        const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
        // route.data includes both `data` and `resolve`
        const user = route.data.pipe(map(d => d.user));

        var sdate
        var edate
        var newDateObj
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var routeid = route.snapshot.params.groupId

        for (var i = 0; i < groups.length; i++) {
            if (groups[i].groupName == routeid) {
                this.groupToDisplay = groups[i]
                for (var j = 0; j < events.length; j++) {
                    if (groups[i].groupId == events[j].groupId) {
                        // consolidate events
                        this.newGroupEvents.push(events[j])
                        sdate = new Date(events[j].startTime);
                        edate = new Date(events[j].endTime);
                        // some date formatting
                        newDateObj = {
                            day: days[sdate.getDay()],
                            date: sdate.getDate(),
                            stime: sdate.getHours() + ":" + ((sdate.getMinutes() < 10 ? '0' : '') + sdate.getMinutes()),
                            etime: edate.getHours() + ":" + ((edate.getMinutes() < 10 ? '0' : '') + edate.getMinutes()),
                            year: sdate.getFullYear(),
                            month: months[sdate.getMonth()],
                        }
                        this.eventDateInfo.push(newDateObj)
                    }
                }
            }
        }

    }
    // action handling
    viewEvent(eid){
        this.router.navigate(["/events/"+eid]);
    }

}