import { Role } from './role';
import { Time } from "@angular/common";

export class User {
  public id: number;
  public firstName: String;
  public lastName: String;
  public email: String;
  public adresse: String;
  public salaire: any;
  public heure_deb: Time;
  public heure_fin: Time;
  public date_creation: Date;
  public date_fin_contrat: Date;
  public username: String;
  public password: String;
  public soldeconge: number;
  private role: Role;
}
