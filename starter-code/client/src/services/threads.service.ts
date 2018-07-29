import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ThreadsService {
  constructor(private http: Http) {}

  getAllThreads() {
    return this.http
      .get(`${environment.BASEURL}/api/threads`)
      .pipe(map(res => res.json()));
  }

  // getRecipesById(id){
  //   return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
  //     .map(res => res.json())
  // }
}
