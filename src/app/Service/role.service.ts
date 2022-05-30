import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../models/role";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  private baseURL = "http://localhost:8080/role";

  constructor(private httpClient: HttpClient) {}

  GetAll(): Observable<Role[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get<Role[]>(`${this.baseURL}/`, {
      headers: headers,
    });
  }
  addrole(user: Role): Observable<Object> {
    return this.httpClient.post<Role>(`${this.baseURL}/`, user);
  }

  Updrole(id: number, user: Role): Observable<Role> {
    return this.httpClient.put<Role>(`${this.baseURL}/update/${id}`, user);
  }

  getroleById(id: number): Observable<Role> {
    return this.httpClient.get<Role>(`${this.baseURL}/${id}`);
  }

  findUserByRole(id: number): Observable<Role> {
    return this.httpClient.get<Role>(`${this.baseURL}/findUserByRole/${id}`);
  }
  findUserByRoleEntreprise(id: number,ide:number): Observable<Role> {
    return this.httpClient.get<Role>(`${this.baseURL}/findUserByRoleEntreprise/${id}/${ide}`);
  }
}
