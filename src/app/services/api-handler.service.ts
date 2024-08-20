import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiHandlerService {
  http: HttpClient = inject(HttpClient);
  url: string = "https://jsonplaceholder.typicode.com";

  // constructor(private http: HttpClient) {}
  constructor() {}

  reviews() {
    return this.http.get(this.url + "/comments");
  }
}
