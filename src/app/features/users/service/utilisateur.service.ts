import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../utilisateur";
import * as util from "util";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  SERVER_URL: string = "http://localhost:8090/Utilisateur";
  constructor(private httpClient: HttpClient) { }
  getAllUtilisateurs(){
   return  this.httpClient.get<Utilisateur[]>(this.SERVER_URL+'/all');
  }
  getUtilisateurByCin(cin:any){
    return  this.httpClient.get(this.SERVER_URL+'/cin/'+cin);
  }
  createUtilisateur(utilisateur:any){
    let faa = new FormData();
    faa.append("utilisateur",utilisateur);
    return this.httpClient.post(this.SERVER_URL+"/add", utilisateur);
  }
  deleteUtilisateur(utilisateur:Utilisateur){
    return this.httpClient.post(this.SERVER_URL+"/delete", utilisateur);
  }
  updateUtilisateur(utilisateur:Utilisateur){
    return this.httpClient.post(this.SERVER_URL+"/update", utilisateur);
  }
}
