webpackJsonp([3],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(dbProvider, _service, platform, viewCtrl, toastCtrl, appCtrl, alertCtrl, loadingCtrl, builder, menuCtrl, navCtrl, navParams) {
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
        this.categoriesList = [];
        this.catItems = [];
        this.catItemsCal = [];
    }
    MenuPage.prototype.openShoppingList = function () {
        this.appCtrl.getRootNav().push("ItemsDetailPage");
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        this.loadMenuList();
    };
    MenuPage.prototype.loadMenuList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this._service.getMenu().subscribe(function (res) {
            loader.dismiss().then(function () {
                var i = 0;
                console.log(res.length);
                while (res.length > i) {
                    var pushArr = [];
                    if (res[i]) {
                        pushArr.push({
                            "id": res[i].id,
                            "parent_id": res[i].parent_id,
                            "name": res[i].name,
                            "color": res[i].color,
                            "image_id": res[i].image_id,
                            "hide_from_grid": res[i].hide_from_grid
                        });
                    }
                    i++;
                    if (res[i]) {
                        console.log("++++++");
                        console.log(res[i]);
                        pushArr.push({
                            "id": res[i].id,
                            "parent_id": res[i].parent_id,
                            "name": res[i].name,
                            "color": res[i].color,
                            "image_id": res[i].image_id,
                            "hide_from_grid": res[i].hide_from_grid
                        });
                    }
                    i++;
                    _this.categoriesList.push(pushArr);
                }
                console.log(_this.categoriesList);
            });
        }, function (err) {
            loader.dismiss().then(function () {
                _this.showToast('', 200);
            });
        });
    };
    MenuPage.prototype.showToast = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    MenuPage.prototype.onClickNotes = function (obj) {
        var _this = this;
        this.catItems = [];
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this._service.getSubMenu(obj.id).subscribe(function (res) {
            loader.dismiss().then(function () {
                var i = 0;
                if (res.length > 0) {
                    while (res.length > i) {
                        if (res[i]) {
                            _this.catItemsCal.push({
                                "id": res[i].id,
                                "parent_id": res[i].parent_id,
                                "name": res[i].name,
                                "color": res[i].color,
                                "image_id": res[i].image_id,
                                "hide_from_grid": res[i].hide_from_grid,
                                "isMenu": 1
                            });
                        }
                        i++;
                        if (_this.catItemsCal.length == 3) {
                            _this.catItems.push(_this.catItemsCal);
                            _this.catItemsCal = [];
                        }
                    }
                }
                _this.loadItems(obj);
            });
        }, function (err) {
            loader.dismiss().then(function () {
                _this.showToast('', 200);
            });
        });
    };
    MenuPage.prototype.loadItems = function (obj) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this._service.getItemKit(obj.id).subscribe(function (res) {
            loader.dismiss().then(function () {
                var i = 0;
                if (res.length > 0) {
                    while (res.length > i) {
                        if (res[i]) {
                            _this.catItemsCal.push({
                                "id": res[i].item_id,
                                "parent_id": res[i].parent_id,
                                "name": res[i].name,
                                "isMenu": 0,
                                "item_number": res[i].item_number,
                                "product_id": res[i].product_id,
                                "size": res[i].size,
                                "expire_days": res[i].expire_days,
                                "ecommerce_product_id": res[i].ecommerce_product_id,
                                "category": res[i].category,
                                "category_id": res[i].category_id,
                                "manufacturer": res[i].manufacturer,
                                "manufacturer_id": res[i].manufacturer_id,
                                "cost_price": res[i].cost_price,
                                "unit_price": res[i].unit_price,
                                "max_discount_percent": res[i].max_discount_percent,
                                "max_edit_price": res[i].max_edit_price,
                                "min_edit_price": res[i].min_edit_price,
                                "promo_price": res[i].promo_price,
                                "start_date": res[i].start_date,
                                "end_date": res[i].end_date,
                                "reorder_level": res[i].reorder_level,
                                "replenish_level": res[i].replenish_level,
                                "description": res[i].description,
                                "long_description": res[i].long_description,
                                "disable_loyalty": res[i].disable_loyalty,
                                "is_service": res[i].is_service,
                                "allow_alt_description": res[i].allow_alt_description,
                                "is_serialized": res[i].is_serialized,
                                "is_ebt_item": res[i].is_ebt_item,
                                "is_ecommerce": res[i].is_ecommerce,
                                "tax_included": res[i].tax_included,
                                "change_cost_price": res[i].change_cost_price,
                                "override_default_tax": res[i].override_default_tax,
                                "tax_class_id": res[i].tax_class_id,
                                "tags": res[i].tags,
                                "additional_item_numbers": res[i].additional_item_numbers,
                                "serial_numbers": res[i].serial_numbers,
                                "commission_percent": res[i].commission_percent,
                                "commission_fixed": res[i].commission_fixed,
                                "commission_percent_type": res[i].commission_percent_type,
                                "allow_price_override_regardless_of_permissions": res[i].allow_price_override_regardless_of_permissions,
                                "only_integer": res[i].only_integer,
                                "is_barcoded": res[i].is_barcoded,
                                "main_image_id": res[i].main_image_id,
                                "is_series_package": res[i].is_series_package,
                                "series_quantity": res[i].series_quantity,
                                "series_days_to_use_within": res[i].series_days_to_use_within,
                                "custom_fields": res[i].custom_fields,
                                "images": res[i].images,
                                "images_url": res[i].images.length > 0 ? res[i].images[0].image_url : "",
                                "variations": res[i].variations,
                                "tier_pricing": res[i].tier_pricing,
                                "locations": res[i].locations,
                                "Qentity": 0
                            });
                        }
                        i++;
                        if (_this.catItemsCal.length == 3) {
                            _this.catItems.push(_this.catItemsCal);
                            _this.catItemsCal = [];
                        }
                    }
                }
                _this.appCtrl.getRootNav().push("CategoryPage", { MenuData: _this.catItems, "name": obj.name });
            });
        }, function (err) {
            loader.dismiss().then(function () {
                _this.showToast('', 200);
            });
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerBoxCls">\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n    <ion-buttons end>\n      <div (click) = "openShoppingList()">\n        <ion-icon name="ios-cart-outline">\n              <span *ngIf = \'dbProvider.getCart().length > 0\' class="badge-ios">{{dbProvider.getCart().length }}</span>\n        </ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n  <div>\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  </div>\n</ion-header>\n<ion-content >\n    <ion-grid class="main-grid">\n        <ion-row class="item-row" *ngFor="let cat of categoriesList;" >\n          <ion-col class="col" *ngFor="let C of cat;" (click)="onClickNotes(C)" >\n            <h4>{{C.name}}</h4>\n            <img src="assets/images/foodfolder.jpeg" class="logo-case-list">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_services__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=3.js.map