webpackJsonp([3],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hsuanlee on 2017/4/4.
 */



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inscription_inscription__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connexion_connexion__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, app, authService, http) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.http = http;
        this.user = JSON.parse(localStorage.getItem('userInfo'));
        //this.toUser = {
        //toUserId:'210000198410281948',
        //toUserName:'Hancock'
        //}
    }
    HomePage.prototype.signInUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inscription_inscription__["a" /* InscriptionPage */]);
    };
    HomePage.prototype.loginUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__connexion_connexion__["a" /* ConnexionPage */]);
    };
    HomePage.prototype.logoutUser = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.deleteUser = function () {
        this.authService.postData(this.user.user_id, 'deleteUser');
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/testChat/src/pages/home/home.html"*/'\n\n    <!--\n    <ion-item navPush="Chat"\n              [navParams]="toUser">\n      <ion-avatar item-left>\n        <img src="./assets/to-user.jpg">\n      </ion-avatar>\n      <h2>Hancock</h2>\n      <p>If at first you don’t succeed, call it version 1.0</p>\n    </ion-item>\n    -->\n    <!--\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Accueil</ion-title>\n      </ion-navbar>\n    </ion-header>-->\n\n    <ion-content class="body">\n        <!--<p style="text-align: center"><img class="logo" width="120px" height="120px" src="./assets/ass.png"></p>-->\n          <!--\n        <h1 class="logo_text">Tind\'Air</h1>\n          <div *ngIf="user">\n              <h2 style="text-align: center">Bonjour {{ user.username }}</h2>\n          </div>\n\n          <div *ngIf="!user">\n              <button class="inscription" ion-button full (click)="signInUser()">S\'inscrire</button>\n              <button class="connexion" ion-button full (click)="loginUser()">Se connecter</button>\n          </div>\n          <div *ngIf="user">\n              <button class="deconnexion" ion-button full (click)="logoutUser()">Se déconnecter</button>\n              <button class="suppression" ion-button full (click)="deleteUser()">Se désinscrire</button>\n          </div>\n      </ion-content>\n\n      <ion-content class="body">-->\n        <img class="logo" width="300px" height="200px" src="https://cdn.dribbble.com/users/781167/screenshots/3663086/untitled-1.gif">\n        <h1 class="logo_text">BIG TWERK</h1>\n\n        <div *ngIf="user">\n            <h2 style="text-align: center">Bonjour {{ user.username }}</h2>\n        </div>\n\n        <div *ngIf="!user">\n            <button class="inscription" ion-button full (click)="signInUser()">S\'inscrire</button>\n            <button class="connexion" ion-button full (click)="loginUser()">Se connecter</button>\n        </div>\n        <div *ngIf="user">\n            <button class="inscription" ion-button full (click)="logoutUser()">Se déconnecter</button>\n            <button class="connexion" ion-button full (click)="deleteUser()">Se désinscrire</button>\n        </div>\n    </ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/testChat/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map