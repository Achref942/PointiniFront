import { Entreprise } from "src/app/models/entreprise";
import { Role } from "./role";
import { Time } from "@angular/common";

export class User {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  adresse: String;
  salaire: any;
  heure_deb: Time;
  heure_fin: Time;
  date_creation: Date;
  date_fin_contrat: Date;
  username: String;
  password: String;
  soldeconge: number;
  role: Role;
  entreprise: Entreprise;
  photo:String;
  fichedepie:any;
  inOut:boolean;

date: any;
etat:any;
fichePaie: any;
nbHeureReatardvUser:any;
nbHeureTravUser: any;
numTel: any;
presence: any;

}
