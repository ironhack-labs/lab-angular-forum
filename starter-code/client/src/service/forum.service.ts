import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForumService{
 
    BASE_URL: string = 'http://localhost:3000';
    constructor(private http:Http){} 

     
     getList(){
        return this.http.get(`${this.BASE_URL}/api/threads`)
        .map((res) => res.json());
  
     }

//      get(id) {
//       return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
//         .map((res) => res.json());
    
// }
}