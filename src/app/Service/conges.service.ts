import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conges } from "../models/conges";
import { EventsDto } from "../models/EventsDto";

@Injectable({
  providedIn: "root",
})
export class CongesService {
  private baseURL = "http://localhost:8080/conge";

  constructor(private httpClient: HttpClient) {}
  getConges(): Observable<Conges[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.httpClient.get<Conges[]>(`${this.baseURL}/`, {
      headers: headers,
    });
  }
  AddConges(conges: Conges): Observable<Object> {
    return this.httpClient.post<Conges>(`${this.baseURL}/`, conges);
  }

  UpdConges(id: number, conges: Conges): Observable<Conges> {
    return this.httpClient.put<Conges>(`${this.baseURL}/update/${id}`, conges);
  }

  getCongesById(id: number): Observable<Conges> {
    return this.httpClient.get<Conges>(`${this.baseURL}/${id}`);
  }
  deleteCongesById(id: number): Observable<Conges> {
    return this.httpClient.delete<Conges>(`${this.baseURL}/${id}`);
  }
  demmandeconge (conges:Conges,id:number){
    return this.httpClient.post<Conges>(`${this.baseURL}/demmandeconge/${id}`, conges)
  }


  getEventsDto(): Observable<EventsDto[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get<EventsDto[]>(`${this.baseURL}/events`, {
      headers: headers,
    });
  }

}
