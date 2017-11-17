import { Component } from '@angular/core';

import { NavController, IonicPage, App } from 'ionic-angular';
import { InscriptionPage } from "../inscription/inscription";
import { ConnexionPage } from "../connexion/connexion";
import {TabsPage} from "../tabs/tabs";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {Http} from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    user: any;

  toUser:Object;

  constructor(public navCtrl: NavController, public app: App, public authService: AuthServiceProvider, public http: Http) {
      this.user = JSON.parse(localStorage.getItem('userInfo'));
    //this.toUser = {
      //toUserId:'210000198410281948',
      //toUserName:'Hancock'
    //}

  }

  signInUser(){
      this.navCtrl.push(InscriptionPage);
  }

  loginUser(){
      this.navCtrl.push(ConnexionPage);
  }

  logoutUser(){
      localStorage.clear();
      this.navCtrl.push(TabsPage);
  }

  deleteUser(){
      this.authService.postData(this.user.user_id, 'deleteUser');
      localStorage.clear();
      this.navCtrl.push(TabsPage);
  }

}