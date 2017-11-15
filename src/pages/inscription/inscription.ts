import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {Http, Headers} from '@angular/http';
import {ProfilPage} from "../profil/profil";

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-inscription',
    templateUrl: 'inscription.html'
})
export class InscriptionPage {

    responseData : any;
    userData = {"username": "","password": ""};


    constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InscriptionPage');
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
