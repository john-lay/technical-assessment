﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ComplianceService {

    constructor(private http: Http) { }

    getData(): Observable<number[]> {
        return this.http.get('https://arcane-beach-70387.herokuapp.com/dashboard/compliance')
            .map((response: Response) => <number[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error}`
        console.log(msg);       

        return Observable.throw(msg);
    }
}