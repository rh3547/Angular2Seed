import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
var $ = require('jquery');

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    users: User[];

    constructor(private userService: UserService) {
        userService.getUsers().subscribe((users: User[]) => {
            this.users = users;
        });
    }

    ngOnInit() {
        $(document).ready(function() {
            console.log("jquery!");
        });
    }

    ngOnDestroy() {

    }
}
