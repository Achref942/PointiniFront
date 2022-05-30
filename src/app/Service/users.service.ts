import { Entreprise } from './../models/entreprise';
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
  Present(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/present/${id}`);
  }
  absent(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/abscent/${id}`);
  }
  addUserEntreprise(id:number,ide:number):Observable<User>{
    return this.http.get<User>(`${this.baseURL}/addEntrepriseUser/${id}/${ide}`);
  }
  addUserRole(id:number,idr:number):Observable<User>{
    return this.http.get<User>(`${this.baseURL}/addRole/${id}/${idr}`);
  }
  activer(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/activer/${id}`);
  }
  desactiver(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/desactiver/${id}`);

  }


}
