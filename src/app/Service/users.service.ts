import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./../models/users";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseURL = "http://localhost:8080/user";

  constructor(private http: HttpClient) {}
  GetAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/`);
  }

  AddUser(user: any): Observable<Object> {
    return this.http.post<User>(`${this.baseURL}/`, user);
  }

  UpdUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/update/${id}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  getByEntreprise(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/findByEntreprise/${id}`);
  }

}
