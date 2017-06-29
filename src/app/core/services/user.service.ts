import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

/*
    UserService

    A service built to make HTTP requests to handle external data.
*/
@Injectable()
export class UserService {
    constructor(private http: Http) { }

    apiURL: string = "http://localhost:3001/api/generic/user";

    getUsers() {
        return this.http.get(this.apiURL)
            .map((res) => {
                if (res.ok) {
                    return res.json() as User[];
                }
                else {
                    return this.logError(res);
                }
            });
    }

    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch (e) {
            // ...ignore
            console.error(error);
        }

        return Observable.throw(error);
    }
}
