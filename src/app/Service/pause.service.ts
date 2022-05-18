import { Pause } from "./../models/pause";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PauseService {
  private baseURL = "http://localhost:8080/pause";

  constructor(private http: HttpClient) {}

  GetAll():Observable<Pause[]>{
      return this.http.get<Pause[]>(`${this.baseURL}/`);
    }

  getPauseById(id: number): Observable<Pause> {
    return this.http.get<Pause>(`${this.baseURL}/${id}`);
  }
  UpdUser(id: number, pause: Pause): Observable<Pause> {
    return this.http.put<Pause>(`${this.baseURL}/update/${id}`, pause);
  }
  AddUser(pause: Pause): Observable<Object> {
    return this.http.post<Pause>(`${this.baseURL}/`, pause);
  }
}
