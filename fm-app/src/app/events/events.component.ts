import { Component } from '@angular/core';
/* . . . */
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* . . . */
import { groups } from '../staticdatafiles/allgroups';
import { events } from '../staticdatafiles/allevents';

@Component({
    templateUrl: 'events.component.html',
    styleUrls: ['./events.component.css']
})

export class EventsComponent {
    events = events
    eventToDisplay
    dateDetails
    constructor(route: ActivatedRoute) {
        const id: Observable<string> = route.params.pipe(map(p => p.id));
        const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
        // route.data includes both `data` and `resolve`
        const user = route.data.pipe(map(d => d.user));
        // grab url parameter
        var routeid = route.snapshot.params.eventId
        // date handling
        var sdate
        var edate
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        // edit information from main page
        for (var i = 0; i < events.length; i++) {
            if (events[i].eventId == routeid) {
                this.eventToDisplay = events[i]
                sdate = new Date(events[i].startTime);
                edate = new Date(events[i].endTime);
                // some date formatting
                this.dateDetails = {
                    day: days[sdate.getDay()],
                    date: sdate.getDate(),
                    stime: sdate.getHours() + ":" + ((sdate.getMinutes() < 10 ? '0' : '') + sdate.getMinutes()),
                    etime: edate.getHours() + ":" + ((edate.getMinutes() < 10 ? '0' : '') + edate.getMinutes()),
                    year: sdate.getFullYear(),
                    month: months[sdate.getMonth()],
                }
            }
        }
    }
}