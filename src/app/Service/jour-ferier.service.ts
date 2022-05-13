import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JourFerier } from "../models/jour-ferier";

@Injectable({
  providedIn: "root",
})
export class JourFerierService {
  private baseURL = "http://localhost:8080/jourferie";
  constructor(private httpClient: HttpClient) {}
  GetJourF(): Observable<JourFerier[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.httpClient.get<JourFerier[]>(`${this.baseURL}/`, {
      headers: headers,
    });
  }
  AddJF(jF: JourFerier): Observable<Object> {
    return this.httpClient.post<JourFerier>(`${this.baseURL}/`, jF);
  }

  UpdJF(id: number, jF: JourFerier): Observable<JourFerier> {
    return this.httpClient.put<JourFerier>(`${this.baseURL}/update/${id}`, jF);
  }

  getJFById(id: number): Observable<JourFerier> {
    return this.httpClient.get<JourFerier>(`${this.baseURL}/${id}`);
  }
}
