import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { NotificationService } from 'src/app/core/services/notification.service';
import {UtilisateurService} from "../service/utilisateur.service";
import {Utilisateur} from "../utilisateur";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
utilisateurs : Utilisateur[] | undefined;
pageSize:number=10;
page:number=1;
  collectionSize:number =0;
  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,private service:UtilisateurService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Users');
    this.refreshUtilisateurs();
  }
  refreshUtilisateurs(){
    this.service.getAllUtilisateurs().subscribe((data)=>{this.utilisateurs=data; this.collectionSize=this.utilisateurs?.length;});

  }
}
