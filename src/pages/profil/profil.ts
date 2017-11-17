import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModifierProfilPage } from "../modifier-profil/modifier-profil";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profil',
    templateUrl: 'profil.html',
})
export class ProfilPage {

    userInfo: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilPage');
    }

    modifierProfil(){
        this.navCtrl.push(ModifierProfilPage);
    }


}
