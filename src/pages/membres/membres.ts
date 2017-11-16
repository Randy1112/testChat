import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Http } from "@angular/http";
import { Chat } from "../chat/chat";

/**
 * Generated class for the MembresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membres',
  templateUrl: 'membres.html',
})
export class MembresPage {

  membres : any;
  responseData : any;
  userData : any;
  listemembres: any;


  constructor( public navCtrl: NavController, public authService:AuthServiceProvider, public http: Http) {
      this.authService.postData(this.userData, 'membres').then((result) => {
          this.responseData = result;
          //console.log(this.responseData);
          localStorage.setItem('membresInfo', JSON.stringify(this.responseData));
          this.membres = JSON.parse(localStorage.getItem('membresInfo'));

          console.log(this.membres);
          //console.log(this.info.userData.username);
          //this.navCtrl.push('ProfilPage');
      }, (err) => {
          // Error log
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembresPage');
  }

  /*
  listerMembres(){
      this.authService.postData(this.userData, 'membres').then((result) => {
          this.responseData = result;
          //console.log(this.responseData);
          localStorage.setItem('membresInfo', JSON.stringify(this.responseData));
          this.membres = JSON.parse(localStorage.getItem('membresInfo'));

          console.log(this.membres);
          //console.log(this.info.userData.username);
          //this.navCtrl.push('ProfilPage');
      }, (err) => {
          // Error log
      });
  }
  */
    versChat() {
        this.navCtrl.push('Chat');
    }
}
