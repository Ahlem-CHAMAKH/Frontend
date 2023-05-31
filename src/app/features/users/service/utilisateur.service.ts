import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../utilisateur";
import * as util from "util";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../../core/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  SERVER_URL: string = "http://localhost:8090/Utilisateur";
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  getAllUtilisateurs(){
   return  this.httpClient.get<Utilisateur[]>(this.SERVER_URL+'/all');
  }
  getUtilisateurByCin(cin:any){
    return  this.httpClient.get(this.SERVER_URL+'/cin/'+cin);
  }
  getUtilisateurByEmail(email:any):Observable<Utilisateur>{
  let formData=new FormData();
  formData.append("email",email);
  return  this.httpClient.post(this.SERVER_URL+'/email',formData);
  }
  createUtilisateur(utilisateur:any):Observable<Utilisateur>{
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
