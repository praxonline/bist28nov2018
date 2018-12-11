webpackJsonp([4],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_services__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_db__ = __webpack_require__(349);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(dbProvider, _service, platform, viewCtrl, toastCtrl, appCtrl, alertCtrl, loadingCtrl, builder, menuCtrl, navCtrl, navParams) {
        this.dbProvider = dbProvider;
        this._service = _service;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginForm = builder.group({
            'Username': ["prashant.jain.1689@gmail.com", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'userPass': ["test", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.loading = this.loadingCtrl.create({
            content: ''
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showToast = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    LoginPage.prototype.onCikNewAccount = function () {
        this.navCtrl.setRoot("SignUpPage");
    };
    LoginPage.prototype.onCikSaveUser = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this._service.logIn(this.loginForm.value).subscribe(function (res) {
            loader.dismiss().then(function () {
                if (res[0].person_id > 0) {
                    if (res[0].custom_fields.Password == _this.loginForm.value.userPass) {
                        _this.dbProvider.setUserInfo(res[0]);
                        _this._service.giftcards().subscribe(function (card) {
                            for (var i = 0; i < card.length; i++) {
                                if (card[i].customer_id == res[0].person_id) {
                                    _this.dbProvider.setCardInfo(card[i]);
                                }
                            }
                            _this.loginForm.reset();
                            _this.navCtrl.push("HomePage");
                        }, function (err) {
                            loader.dismiss().then(function () {
                                console.log(err);
                                _this.showToast('', 200);
                            });
                        });
                    }
                    else {
                        _this.showToast('', 200);
                    }
                }
                else {
                    _this.showToast('', 200);
                }
            });
        }, function (err) {
            loader.dismiss().then(function () {
                console.log(err);
                _this.showToast('', 200);
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/prakash/Desktop/Project/bist28nov2018/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row style="margin-top: 50px;">\n      <ion-col col-3 class="headerLab">Login</ion-col>\n      <ion-col col-9 class="headerLab" style="text-align: right;" (click)="onCikNewAccount()">New? Create account</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <form [formGroup]="loginForm" style="position: relative;" >\n          <ion-card>        \n            <ion-card-content>\n              <div>\n                <button class="actionBut" ion-button>Connect with Facebook</button>\n              </div>\n              <div>\n                <button class="actionBut" ion-button>Connect with Google</button>\n              </div>\n              <div>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating>Username</ion-label>\n                    <ion-input type="text" formControlName="Username" value=""></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label floating>Password</ion-label>\n                    <ion-input formControlName="userPass" type="password"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </ion-card-content>\n          </ion-card>\n          <div class="formActionBut">\n            <button ion-button [disabled]="!loginForm.valid" (click)="onCikSaveUser()">\n              <ion-icon  name="arrow-forward" Login > </ion-icon>\n            </button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/prakash/Desktop/Project/bist28nov2018/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_services__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map