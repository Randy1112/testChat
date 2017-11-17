import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Http} from "@angular/http";
import {ProfilPage} from "../profil/profil";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ModifierProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modifier-profil',
    templateUrl: 'modifier-profil.html',
})
export class ModifierProfilPage {

    //userInfo: any;
    responseData: any;
    userInfo = {"description": "", "img": ""};

    constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public http: Http) {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModifierProfilPage');
    }

    modifier(){
        this.authService.postData(this.userInfo, 'modifierProfil').then((result) => {
            this.responseData = result;
            localStorage.setItem('userInfo', JSON.stringify(this.responseData));
            this.navCtrl.push(TabsPage);
        }, (err) => {
            // Error log
        });
    }
}
