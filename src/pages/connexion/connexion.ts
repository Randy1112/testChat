import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {Http, Headers} from '@angular/http';

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
    userData = {"username": "","password": ""};

  constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

    signup() {
        this.authService.postData(this.userData, 'signup').then((result) => {

            this.responseData = result;
            console.log(this.responseData);
            localStorage.setItem('userData', JSON.stringify(this.responseData));
            //this.navCtrl.push(ProfilPage);
        }, (err) => {
            // Error log
        });
    }

}
