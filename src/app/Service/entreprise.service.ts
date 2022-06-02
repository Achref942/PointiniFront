import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Entreprise } from "./../models/entreprise";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EntrepriseService {
  private baseURL = "http://localhost:8080/entreprise";

  constructor(private http: HttpClient) {}

  getEntrepriseListe(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.baseURL}/`);
  }

  AddEntreprise(entreprise: Entreprise): Observable<Object> {
    return this.http.post<Entreprise>(`${this.baseURL}/`, entreprise);
  }
  UpdEntreprise(id: number, entreprise: Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(
      `${this.baseURL}/update/${id}`,
      entreprise
    );
  }
  getEntrepriseById(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(
      `${this.baseURL}/findEntrepriseById/${id}`
    );
  }
  AddPackToEntreprise(idp:number,ide:number):Observable<Entreprise>{
    return this.http.get<Entreprise>(`${this.baseURL}/AddPackToEntreprise/${idp}/${ide}`);
  }

  DesactiverEntreprise(ide:number):Observable<Entreprise>{
    return this.http.get<Entreprise>(`${this.baseURL}/desactiverEntreprise/${ide}`);
  }

  DeleteEntreprise(ide:number):Observable<Entreprise>{
    return this.http.delete<Entreprise>(`${this.baseURL}/delete/${ide}`);
}






}
