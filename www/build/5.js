webpackJsonp([5],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
            ],
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_db__ = __webpack_require__(349);
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
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemsPage = /** @class */ (function () {
    function ItemsPage(dbProvider, navCtrl, navParams) {
        this.dbProvider = dbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoriesName = "";
        this.OrderQuantity = 1;
        this.ItemsDetail = this.navParams.get("MenuData");
        this.categoriesName = this.navParams.get("name");
    }
    ItemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemsPage');
    };
    ItemsPage.prototype.addCard = function () {
        this.ItemsDetail.Qentity = this.OrderQuantity;
        this.dbProvider.setCartlist(this.ItemsDetail);
    };
    ItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items/items.html"*/'<!--\n  Generated template for the ItemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerBoxCls">\n  <ion-navbar>\n    <ion-title>{{categoriesName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-card>      \n      <ion-card-content>\n          <ion-slides style="max-height: 200px">\n              <ion-slide  *ngFor="let img of ItemsDetail.images;">\n                  <img src="{{img.image_url}}" />\n              </ion-slide>\n          </ion-slides>\n          <div>\n            {{ItemsDetail.name}}\n          </div>\n          <ion-item>\n              <ion-label>Quantity</ion-label>\n              <ion-input [(ngModel)]="OrderQuantity" ></ion-input>\n            </ion-item>\n          <div>\n              <button ion-button (click)="addCard()">\n                  Add In Card\n                </button>\n          </div>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items/items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__helpers_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ItemsPage);
    return ItemsPage;
}());

//# sourceMappingURL=items.js.map

/***/ })

});
//# sourceMappingURL=5.js.map