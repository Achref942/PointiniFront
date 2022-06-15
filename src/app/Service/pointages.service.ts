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
  UpdPointage(id: number, pointage: Pointages): Observable<Pointages> {
    return this.http.put<Pointages>(`${this.baseURL}/updateP/${id}`,pointage);
  }
  getPointageById(id: number): Observable<Pointages> {
    return this.http.get<Pointages>(`${this.baseURL}/findPointageById/${id}`);
  }
  createPoinage(pointage:Pointages,id: number): Observable<Pointages> {
    return this.http.put<Pointages>(`${this.baseURL}/createPointage/${id}`,pointage);
  }
  findPointageByUserIdEtat(id:number):Observable<Number>{
   return this.http.get<Number>(`${this.baseURL}/findPointageByUserIdEtat/${id}`);
  }

}
