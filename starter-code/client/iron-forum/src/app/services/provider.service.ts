import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProviderService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getAll() {
        return this.http.get(`${this.BASE_URL}/api/threads`)
          .map((res) => res.json());

      }

}
