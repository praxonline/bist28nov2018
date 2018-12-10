webpackJsonp([0],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsDetailPageModule", function() { return ItemsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_detail__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(700);
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

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_db__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_services__ = __webpack_require__(152);
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
    function ItemsDetailPage(appCtrl, toastCtrl, loadingCtrl, userProvider, dbProvider, navCtrl, navParams) {
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.dbProvider = dbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardInfo = [];
        this.amount = 0;
        this.isPreOrder = true;
        this.OrderDate = new Date().toISOString();
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
        if (this.selectCard) {
            this.remainingVal = this.selectCard.value - this.amount;
        }
    };
    ItemsDetailPage.prototype.onSelectChange = function (res) {
        for (var i = 0; i < this.cardInfo.length; i++) {
            if (this.cardInfo.id == res) {
                this.selectCard = res;
                this.remainingVal = this.selectCard.value - this.amount;
            }
        }
    };
    ItemsDetailPage.prototype.addCard = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.userProvider.sales(this.selectCard, this.cardItems, this.amount, this.OrderTime, this.OrderDate).subscribe(function (res) {
            loader.dismiss().then(function () {
                if (res.sale_id > 0) {
                    _this.showToast("Sales Successfully", 200);
                    _this.appCtrl.getRootNav().pop();
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
    ItemsDetailPage.prototype.showToast = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    ItemsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items-detail',template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items-detail/items-detail.html"*/'<!--\n  Generated template for the ItemsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerBoxCls">\n  <ion-navbar>\n    <ion-title>My Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  \n\n  <ion-card *ngFor="let itm of cardItems;">      \n    <ion-card-content>\n      \n      <img src="{{itm.images_url}}" class="logo-case-list">\n      <h4>{{itm.name}}</h4><span>{{itm.cost_price}} Points</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card >\n    <ion-item>\n        <ion-label>Pre Order</ion-label>\n    <ion-toggle [(ngModel)]="isPreOrder"></ion-toggle> \n    </ion-item>\n    <ion-item *ngIf="isPreOrder">\n      <ion-label>Pre-order Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="OrderDate"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf="isPreOrder">\n      <ion-label>Pre-order Time</ion-label>\n      <ion-select [(ngModel)]="OrderTime">\n        <ion-option value="Shift 1 > Breakfast">Shift 1 &gt; Breakfast</ion-option>\n        <ion-option value="Shift 1 > Lunch">Shift 1 &gt; Lunch</ion-option>\n        <ion-option value="Shift 2 > Snacks">Shift 2 &gt; Snacks</ion-option>\n        <ion-option value="Shift 2 > Dinner">Shift 2 &gt; Dinner</ion-option>\n        <ion-option value="Shift 3 > 10PM">Shift 3 &gt; 10PM</ion-option>\n        <ion-option value="Shift 3 > 2AM">Shift 3 &gt; 2AM</ion-option>\n        <ion-option value="Shift 3 > 5AM">Shift 3 &gt; 5AM</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="cardInfo.length &gt; 1">\n      <ion-label>Card</ion-label>\n      <ion-select  (ionChange)="onSelectChange($event)">\n        <ion-option *ngFor="let ca of cardInfo;" value="{{ca.id}}">{{ca.giftcard_number}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <div>\n          My Card Balance :\n         <div>\n          <span *ngIf="selectCard">{{selectCard.value}}</span>\n         </div> \n        </div>\n        <div>\n            Remaining Balance after this order : \n            <div>{{remainingVal}}</div>\n        </div>\n    </ion-item>\n    <ion-item>\n      <button style="width: 100%;padding: 10px 10px;" ion-button (click)="addCard()">\n       Pay\n      </button>\n    </ion-item> \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/pages/items-detail/items-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_services__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__helpers_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ItemsDetailPage);
    return ItemsDetailPage;
}());

//# sourceMappingURL=items-detail.js.map

/***/ }),

/***/ 700:
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

/***/ })

});
//# sourceMappingURL=0.js.map