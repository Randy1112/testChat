webpackJsonp([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembresPageModule", function() { return MembresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membres__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembresPageModule = (function () {
    function MembresPageModule() {
    }
    return MembresPageModule;
}());
MembresPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__membres__["a" /* MembresPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membres__["a" /* MembresPage */]),
        ],
    })
], MembresPageModule);

//# sourceMappingURL=membres.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MembresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembresPage = (function () {
    function MembresPage(navCtrl, authService, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.http = http;
        this.authService.postData(this.userData, 'membres').then(function (result) {
            _this.responseData = result;
            _this.membres = JSON.parse(JSON.stringify(_this.responseData));
        }, function (err) {
            // Error log
        });
    }
    MembresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MembresPage');
    };
    MembresPage.prototype.versChat = function () {
        this.navCtrl.push('Chat');
    };
    return MembresPage;
}());
MembresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-membres',template:/*ion-inline-start:"/Applications/MAMP/htdocs/testChat/src/pages/membres/membres.html"*/'<!--\n  Generated template for the MembresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>membres</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Liste des membres</h1>\n  <div class="membre" *ngFor="let membre of membres">\n    <ion-item (click)="versChat()">\n      <ion-avatar item-left>\n        <div *ngIf="membre.user_img_url">\n          <img src="{{ membre.user_img_url }}">\n        </div>\n        <div *ngIf="!membre.user_img_url">\n          <img src="../assets/inconnu.png">\n        </div>\n      </ion-avatar>\n      <p>{{ membre.username }} <br><span style="font-size:8px">{{ membre.description }}</span></p>\n\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/testChat/src/pages/membres/membres.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], MembresPage);

//# sourceMappingURL=membres.js.map

/***/ })

});
//# sourceMappingURL=2.js.map