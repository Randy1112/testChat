import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {Http, Headers} from '@angular/http';
import { TabsPage } from "../tabs/tabs";

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

    userData = {"username": "","password": "", "description": "", "user_img_url": ""};

    constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InscriptionPage');
    }

    signup() {
        this.authService.postData(this.userData, 'signup');
        this.navCtrl.push(TabsPage);
    }

}
