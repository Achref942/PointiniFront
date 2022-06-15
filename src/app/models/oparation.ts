import { User } from './users';

export class Operation {
  public id: number;
  public libelle: string;
  public montant: any;
  public typeOperation: any;
  public sensOperation: any;
  public operation_user: any;
  public dateoperation:any;
  public datecreation:Date;
  public  etat:any;
  public user:User;
}
