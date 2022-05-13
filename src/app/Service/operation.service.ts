import { Operation } from "./../models/oparation";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OperationService {
  private baseURL = "http://localhost:8080/operation";

  constructor(private http: HttpClient) {}
  GetAllOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.baseURL}/`);
  }

  // AddOperation(operation:Operation): Observable<Object> {
  //   return this.http.post<Operation>(`${this.baseURL}/`,operation)
  // }

  // UpdOperation(id:number,operation:Operation): Observable<Operation> {
  //   return this.http.put<Operation>(`${this.baseURL}/update/${id}`,operation);
  // }

  // getOperationById(id: number): Observable<Operation>{
  //   return this.http.get<Operation>(`${this.baseURL}/${id}`);
  // }
}
