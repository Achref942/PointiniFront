import { Operation } from "./../models/oparation";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/users";

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

  CreatOperationAvance(operation:Operation,id:number): Observable<Operation> {
    return this.http.put<Operation>(`${this.baseURL}/CreatOperationAvance/${id}`,operation);
  }
  CreateOperationPrime(operation:Operation,id:number): Observable<Operation> {
    return this.http.put<Operation>(`${this.baseURL}/CreateOperationPrime/${id}`,operation);
  }
  CreateOperationPenalite(operation:Operation,id:number): Observable<Operation> {
    return this.http.put<Operation>(`${this.baseURL}/CreateOperationPenalite/${id}`,operation);
  }
  getAllPrime(id:number): Observable<Operation> {
    return this.http.get<Operation>(`${this.baseURL}/getAllPrime/${id}`);
  }
  getAllAvance(id:number): Observable<Operation> {
    return this.http.get<Operation>(`${this.baseURL}/getAllAvance/${id}`);
  }
  getAllPenalite(id:number): Observable<Operation> {
    return this.http.get<Operation>(`${this.baseURL}/getAllPenalite/${id}`);
  }
  addPrimforAll(operation:Operation,id:number): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/addPrimforAll/${id}`,operation);
  }
  addPenaliteforAll(operation:Operation,id:number): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/addPenaliteforAll/${id}`,operation);
  }
  confirmeAvance(id:number): Observable<Operation> {
    return this.http.get<Operation>(`${this.baseURL}/confirmeAvance/${id}`);
  }



}
