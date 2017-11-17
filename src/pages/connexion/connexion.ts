import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {Http, Headers} from '@angular/http';
import { TabsPage} from "../tabs/tabs";
import { ProfilPage} from "../profil/profil";
import { HomePage} from "../home/home";

/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

    responseData : any;
    info : any;
    userData = {"username": "","password": ""};
    text="";

  constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

    login() {
      this.authService.postData(this.userData, 'login').then((result) => {
          this.responseData = result;
          if(JSON.stringify(this.responseData) != "false"){
              localStorage.setItem('userInfo', JSON.stringify(this.responseData));
              this.info = JSON.parse(localStorage.getItem('userInfo'));
              this.navCtrl.push(TabsPage);
          } else {
              //alert('Identiant ou mot de passe incorrect !')//this.navCtrl.push(TabsPage);
              this.text = "<h1>Idenfiant ou mot de passe incorrect !</h1>";
          }

      }, (err) => {
          'Erreur de connexion'
      });
    }
}
