webpackJsonp([7],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage.prototype.startApp = function () {
        localStorage.setItem("IsStart", "true");
        this.navCtrl.setRoot("LoginPage");
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/Users/prakash/Desktop/Project/bist28nov2018/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-slides>\n      <ion-slide>\n          <img src="assets/images/1.jpeg" style="height: 750px;" />\n      </ion-slide>\n      <ion-slide>\n          <img src="assets/images/2.jpeg" style="height: 750px;"/>\n      </ion-slide>\n      <ion-slide>\n          <img src="assets/images/3.jpeg" style="height: 750px;"/>\n      </ion-slide>\n      <ion-slide>\n          <img src="assets/images/5.jpeg" style="height: 750px;"/>\n      </ion-slide>\n      <ion-slide>\n          <img src="assets/images/6.jpeg" style="height: 750px;"/>\n      </ion-slide>\n  </ion-slides>\n  <ion-item>\n    <button style="position: absolute; bottom:-20px; width: 100%;padding: 10px 10px;" ion-button (click)="startApp()">\n      Start\n    </button>\n  </ion-item> \n</ion-content>\n'/*ion-inline-end:"/Users/prakash/Desktop/Project/bist28nov2018/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=7.js.map