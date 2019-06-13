import { Component } from '@angular/core';
/* . . . */
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* . . . */
import { groups } from '../staticdatafiles/allgroups';
import { events } from '../staticdatafiles/allevents';

@Component({
    templateUrl: 'groups.component.html',
    styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
    groups = groups
    events = events

    groupToDisplay

    constructor(route: ActivatedRoute) {
        const id: Observable<string> = route.params.pipe(map(p => p.id));
        const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
        // route.data includes both `data` and `resolve`
        const user = route.data.pipe(map(d => d.user));

        var routeid = route.snapshot.params.groupId
        for(var i = 0; i < groups.length; i++){
            if(groups[i].groupName == routeid) {
                this.groupToDisplay = groups[i]
            }
        }
    }

}