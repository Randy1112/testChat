import { Component } from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';
import { InscriptionPage } from "../inscription/inscription";
import { ConnexionPage } from "../connexion/connexion";
import {MembresPage} from "../membres/membres";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toUser:Object;

  constructor(public navCtrl: NavController) {
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

  listeMembres(){
      this.navCtrl.push(MembresPage);
  }


}
