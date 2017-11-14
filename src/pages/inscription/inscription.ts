import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormBuilder, AbstractControl, FormGroup, Validators } from "@angular/forms";
import { User} from "../profil/user";

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-inscription',
    templateUrl: 'inscription.html',
})
export class InscriptionPage {

    newUser: User = new User();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InscriptionPage');
    }

    loginUser() {
        alert(this.newUser.userName);

    }

}
