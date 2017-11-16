import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {Http, Headers} from '@angular/http';
import { ProfilPage} from "../profil/profil";

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

  constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

    login() {
        this.authService.postData(this.userData, 'login').then((result) => {
            this.responseData = result;
            localStorage.setItem('userInfo', JSON.stringify(this.responseData));
            this.info = JSON.parse(localStorage.getItem('userInfo'));
            //console.log(this.info.userData.username);
            this.navCtrl.push('ProfilPage');
        }, (err) => {
            // Error log
        });
    }

}
