import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
@Injectable()
export class RepliesService {

  BASE_URL: string = "http://localhost:3000";
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  saveReply(id, content) {
    console.log(`Saving reply ${content} for ${id}`);
    return this.http
      .post(`${this.BASE_URL}/api/threads/${id}/replies`, { content }, this.options)
      .map(res => res.json());
  }

  getReplies(id) {
    return this.http
      .get(`${this.BASE_URL}/api/threads/${id}/replies`)
      .map(res => res.json());
  }
}
