import { Pointages } from "./../models/pointages";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PointagesService {
  private baseURL = "http://localhost:8080/pointage";

  constructor(private http: HttpClient) {}
  GetPointages(): Observable<Pointages[]> {
    return this.http.get<Pointages[]>(`${this.baseURL}/`);
  }

  CheakPoinage(id: number): Observable<Pointages> {
    return this.http.get<Pointages>(`${this.baseURL}/checkPointage/${id}`);
  }
}
