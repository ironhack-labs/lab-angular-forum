import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs";




@Injectable()
export class ThreadsService {
    BASE_URL: string = "http://localhost:3000";

constructor(private http: Http) { }

    getThreads() {
        return this.http.get(`${this.BASE_URL}/api/threads`)
            .map(res => res.json());
    }



}
