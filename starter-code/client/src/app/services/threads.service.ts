import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

interface user {
    username: string
}

@Injectable()
export class SessionService {
    
    constructor(private http: Http){}

    getAllThreads(){

    }
}