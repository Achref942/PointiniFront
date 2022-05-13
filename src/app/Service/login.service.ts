import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseURL = "http://localhost:8080/user";
  login: any;

  constructor(private http: HttpClient) {}

  Post(login: any) {
    return this.http.post(`${this.baseURL}/login`, login);
  }
}
