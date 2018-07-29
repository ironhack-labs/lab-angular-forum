import { Injectable } from "@angular/core";
import { Http } from "../../../node_modules/@angular/http";
import { environment } from "../../environments/environment";
import { map } from 'rxjs/operators';

const { baseurl } = environment;

@Injectable({
  providedIn: "root"
})
export class threadService {
  options: object = { withCredentials: true };
  constructor(private http : Http){}
  getThreads(){
    return this.http.get(`${baseurl}/api/threads/`)
      .pipe(map( (res) => res.json()))
  }
}