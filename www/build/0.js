webpackJsonp([0],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsDetailPageModule", function() { return ItemsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_detail__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemsDetailPageModule = /** @class */ (function () {
    function ItemsDetailPageModule() {
    }
    ItemsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items_detail__["a" /* ItemsDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items_detail__["a" /* ItemsDetailPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], ItemsDetailPageModule);
    return ItemsDetailPageModule;
}());

//# sourceMappingURL=items-detail.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Date Picker
 * @description
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * @usage
 * ```typescript
 * import { DatePicker } from '@ionic-native/date-picker';
 *
 * constructor(private datePicker: DatePicker) { }
 *
 *
 * ...
 *
 *
 * this.datePicker.show({
 *   date: new Date(),
 *   mode: 'date',
 *   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
 * }).then(
 *   date => console.log('Got date: ', date),
 *   err => console.log('Error occurred while getting date: ', err)
 * );
 * ```
 * @interfaces
 * DatePickerOptions
 */
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * @hidden
           */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5
        };
        return _this;
    }
    /**
     * Shows the date and/or time picker dialog(s)
     * @param {DatePickerOptions} options Options for the date picker.
     * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
     */
    /**
       * Shows the date and/or time picker dialog(s)
       * @param {DatePickerOptions} options Options for the date picker.
       * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
       */
    DatePicker.prototype.show = /**
       * Shows the date and/or time picker dialog(s)
       * @param {DatePickerOptions} options Options for the date picker.
       * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
       */
    function (options) {
        return;
    };
    DatePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DatePicker.prototype, "show", null);
    /**
     * @name Date Picker
     * @description
     * The DatePicker plugin allows the user to fetch date or time using native dialogs.
     *
     * @usage
     * ```typescript
     * import { DatePicker } from '@ionic-native/date-picker';
     *
     * constructor(private datePicker: DatePicker) { }
     *
     *
     * ...
     *
     *
     * this.datePicker.show({
     *   date: new Date(),
     *   mode: 'date',
     *   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
     * }).then(
     *   date => console.log('Got date: ', date),
     *   err => console.log('Error occurred while getting date: ', err)
     * );
     * ```
     * @interfaces
     * DatePickerOptions
     */
    DatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'DatePicker',
            plugin: 'cordova-plugin-datepicker',
            pluginRef: 'datePicker',
            repo: 'https://github.com/VitaliiBlagodir/cordova-plugin-datepicker',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], DatePicker);
    return DatePicker;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_db__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(691);
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
 * Generated class for the ItemsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemsDetailPage = /** @class */ (function () {
    function ItemsDetailPage(datePicker, dbProvider, navCtrl, navParams) {
        this.datePicker = datePicker;
        this.dbProvider = dbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.amount = 0;
    }
    ItemsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemsDetailPage');
        this.cardItems = this.dbProvider.getCart();
        this.cardInfo = this.dbProvider.getCardInfo();
        if (this.cardInfo.length == 1) {
            this.selectCard = this.cardInfo[0];
        }
        for (var i = 0; i < this.cardItems.length; i++) {
            this.amount = this.amount + (this.cardItems[i].unit_price * this.cardItems[i].Qentity);
        }
        console.log(this.cardItems);
        console.log(this.dbProvider.getUserInfo());
    };
    ItemsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items-detail',template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items-detail/items-detail.html"*/'<!--\n  Generated template for the ItemsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerBoxCls">\n  <ion-navbar>\n    <ion-title>Card</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  \n\n  <ion-card *ngFor="let itm of cardItems;">      \n    <ion-card-content>\n      \n      <img src="{{itm.images_url}}" class="logo-case-list">\n      <h4>{{itm.name}}</h4><span>{{itm.cost_price}}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card >\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="OrderDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Time</ion-label>\n      <ion-select [(ngModel)]="OrderTime">\n        <ion-option value="f">Seft</ion-option>\n        <ion-option value="m">Seft1</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="cardInfo.length &gt; 0">\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="UserCard">\n        <ion-option value="f">card 1</ion-option>\n        <ion-option value="m">Card 2</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        \n        <div>\n          My Card Valance :\n          {{selectCard.value}}\n        </div>\n        <div>\n            remaining Valance after this order : {{remainingVal}}\n        </div>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="addCard()">\n       Pay\n      </button>\n    </ion-item> \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items-detail/items-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_2__helpers_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ItemsDetailPage);
    return ItemsDetailPage;
}());

//# sourceMappingURL=items-detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map