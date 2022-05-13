import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pack } from "../models/pack";

@Injectable({
  providedIn: "root",
})
export class PackService {
  private baseURL = "http://localhost:8080/pack";

  constructor(private http: HttpClient) {}
  GetPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.baseURL}/`);
  }
  AddPack(pack: Pack): Observable<Object> {
    return this.http.post<Pack>(`${this.baseURL}/`, pack);
  }

  UpdPackr(id: number, pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${this.baseURL}/update/${id}`, pack);
  }

  getPackById(id: number): Observable<Pack> {
    return this.http.get<Pack>(`${this.baseURL}/${id}`);
  }
}
