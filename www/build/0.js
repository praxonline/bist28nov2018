webpackJsonp([0],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(platform, viewCtrl, appCtrl, alertCtrl, loadingCtrl, builder, menuCtrl, navCtrl, navParams) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpForm = builder.group({
            'UsernameAndSurname': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'Username': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'UserPassword': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'privacyPolicy': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'TermsAndConditions': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'offersToMyEmail': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.loading = this.loadingCtrl.create({
            content: ''
        });
    }
    SignUpPage.prototype.onCikSaveUser = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'User registered successfully',
            buttons: ['Ok']
        });
        alert.present();
        this.signUpForm.reset();
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/pointofsale/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row style="margin-top: 50px;">\n      <ion-col col-3 class="headerLab">Sign Up</ion-col>\n      <ion-col col-9 class="headerLab"  style="text-align: right;" (click)="onAccount()">Log in</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>        \n          <ion-card-content>\n             <div>\n              <button class="actionBut" ion-button>Connect with Facebook</button>\n             </div>\n             <div>\n              <button class="actionBut" ion-button>Connect with Google</button>\n             </div>\n            <form [formGroup]="signUpForm" >\n              <div>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating>Name and surname</ion-label>\n                    <ion-input  formControlName="UsernameAndSurname" type="text" value=""></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label floating>Username</ion-label>\n                    <ion-input  formControlName="Username" type="text" value=""></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label floating>Password (min 6 characters)</ion-label>\n                    <ion-input  formControlName="UserPassword" type="password"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label text-wrap>\n                      I agree to the <span>Privacy policy</span>\n                      and give consent to store and process my personal data\n                    </ion-label>\n                    <ion-checkbox  formControlName="privacyPolicy"  ></ion-checkbox>                    \n                  </ion-item>\n                  <ion-item>\n                    <ion-label text-wrap>\n                      I agree to the <span>Terms And Conditions</span>\n                    </ion-label>\n                    <ion-checkbox  formControlName="TermsAndConditions"  ></ion-checkbox>                    \n                  </ion-item>\n                  <ion-item>\n                    <ion-label text-wrap>\n                      Send offers to my email address. \n                    </ion-label>\n                    <ion-checkbox  formControlName="offersToMyEmail" ></ion-checkbox>                    \n                  </ion-item>\n               </ion-list>\n              </div>\n              <div class="formActionBut">\n                <button ion-button [disabled]="!signUpForm.valid" (click)="onCikSaveUser()">\n                  <ion-icon   name="arrow-forward"></ion-icon>\n                </button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/pointofsale/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=0.js.map