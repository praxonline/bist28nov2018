webpackJsonp([9],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProvider = /** @class */ (function () {
    function UserProvider(plt, api, storage, config) {
        this.plt = plt;
        this.api = api;
        this.storage = storage;
        this.config = config;
    }
    UserProvider.prototype.registerUser = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var name = data.UsernameAndSurname.split(" ");
        var Data = {
            "Name": data.UsernameAndSurname,
            "first_name": name[0],
            "last_name": name[0],
            "email": data.Username,
            "custom_fields": { "Password": data.UserPassword }
        };
        var seq = this.api.post("Customers", Data, {}, options).share();
        seq.subscribe(function (res) {
            if (res.token) {
                var token = res.token;
                _this.storage.set("token", JSON.stringify(token));
                _this.config.set("token", token.token);
            }
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.logIn = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var seq = this.api.get("Customers?search_field=email&search=" + data.Username, {}, options).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.getMenu = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var seq = this.api.get("categories?limit=100", {}, options).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.getSubMenu = function (Id) {
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var seq = this.api.get("categories?categoriesId=" + Id, {}, options).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.getItemKit = function (Id) {
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var seq = this.api.get("items?category_id=" + Id, {}, options).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.sales = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var name = data.UsernameAndSurname.split(" ");
        var Data = {
            "Name": data.UsernameAndSurname,
            "first_name": name[0],
            "last_name": name[0],
            "email": data.Username,
            "custom_fields": { "Password": data.UserPassword }
        };
        var seq = this.api.post("sales", Data, {}, options).share();
        seq.subscribe(function (res) {
            if (res.token) {
                var token = res.token;
                _this.storage.set("token", JSON.stringify(token));
                _this.config.set("token", token.token);
            }
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.giftcards = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_5__index__["a" /* RequestOptions */]();
        var seq = this.api.get("giftcards", {}, options).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user-services.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		682,
		8
	],
	"../pages/filter/filter.module": [
		683,
		7
	],
	"../pages/home/home.module": [
		684,
		6
	],
	"../pages/items-detail/items-detail.module": [
		685,
		0
	],
	"../pages/items/items.module": [
		686,
		5
	],
	"../pages/login/login.module": [
		690,
		4
	],
	"../pages/menu/menu.module": [
		688,
		3
	],
	"../pages/setting/setting.module": [
		687,
		2
	],
	"../pages/sign-up/sign-up.module": [
		689,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, device, config, events, appVersion) {
        var _this = this;
        this.http = http;
        this.device = device;
        this.config = config;
        this.events = events;
        this.appVersion = appVersion;
        this.url = "http://bistrocare.com/pg/index.php/api/v1/";
        this.appVersion.getVersionNumber().then(function (version) {
            _this.Version = version;
        });
    }
    ApiProvider.prototype.post = function (endpoint, body, params, options) {
        var _this = this;
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_6____["a" /* RequestOptions */]();
        }
        if (params) {
            // params["x-api-key"] = "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg";
            //params["udid"] = this.device.uuid;
            //params["dev_model"] = this.device.model;
            //params["dev_os"] = this.device.platform;
            // params["device_type"] = this.device.platform;
            options.params = params;
            options.headers = { 'Content-Type': 'application/x-www-form-urlencoded', "x-api-key": "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg" };
        }
        var seq = this.http.post(this.url + endpoint, body, options).share();
        seq.timeout(10000);
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            _this.checkForUserToken(610);
        });
        seq.catch(function (err) {
            var details = err.json();
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(details);
        });
        return seq;
    };
    ApiProvider.prototype.get = function (endpoint, params, options) {
        var _this = this;
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_6____["a" /* RequestOptions */]();
        }
        if (params) {
            // params["x-api-key"] = "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg";
            options.params = params;
            options.headers = { 'Content-Type': 'application/x-www-form-urlencoded', "x-api-key": "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg" };
        }
        var seq = this.http.get(this.url + endpoint, options).share();
        seq.timeout(10000);
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            _this.checkForUserToken(610);
        });
        seq.catch(function (err) {
            var details = err.json();
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(details);
        });
        return seq;
    };
    ApiProvider.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + "/" + endpoint, body, options);
    };
    ApiProvider.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + "/" + endpoint, options);
    };
    ApiProvider.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + "/" + endpoint, body, options);
    };
    ApiProvider.prototype.checkForUserToken = function (rcode) {
        var inValidCode = [610, 611, 613, 614];
        if (inValidCode.indexOf(rcode) > -1) {
            this.events.publish("user:goToLogin");
        }
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestOptions; });
var RequestOptions = /** @class */ (function () {
    function RequestOptions() {
    }
    return RequestOptions;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider() {
        this.UserCard = [];
        this.cart = new Array();
    }
    DbProvider.prototype.setUserInfo = function (user) {
        this.UserInfo = user;
    };
    DbProvider.prototype.getUserInfo = function () {
        return this.UserInfo;
    };
    DbProvider.prototype.setCardInfo = function (user) {
        this.UserCard.push(user);
    };
    DbProvider.prototype.getCardInfo = function () {
        return this.UserCard;
    };
    DbProvider.prototype.setCartlist = function (list) {
        this.cart.push(list);
    };
    DbProvider.prototype.addToCart = function (item) {
    };
    DbProvider.prototype.getCart = function () {
        return this.cart;
    };
    DbProvider.prototype.removeAllCartItems = function () {
        this.cart = [];
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_index__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_services__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_db__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items-detail/items-detail.module#ItemsDetailPageModule', name: 'ItemsDetailPage', segment: 'items-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__["a" /* UtilHelper */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_12__providers_user_services__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_api_index__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_13__helpers_db__["a" /* DbProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_services__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(loadingCtrl, _service, alertCtrl, events, config, storage, platform, statusBar, splashScreen) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this._service = _service;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.config = config;
        this.storage = storage;
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        platform.registerBackButtonAction(function () {
            var alert = _this.alertCtrl.create({
                title: 'App termination',
                message: 'Do you want to close the app?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Application exit prevented!');
                        }
                    }, {
                        text: 'Close App',
                        handler: function () {
                            platform.exitApp(); // Close this application
                        }
                    }]
            });
            alert.present();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/bist/bist28nov2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_services__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilHelper = /** @class */ (function () {
    function UtilHelper() {
    }
    UtilHelper.prototype.validateEmail = function (email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
    UtilHelper.prototype.validateAlpha = function (text) {
        var expr = /[a-z]/i;
        return expr.test(text);
    };
    UtilHelper.prototype.validateText = function (text) {
        var expr = /^[a-zA-Z() ]+$/;
        return expr.test(text);
    };
    UtilHelper.prototype.validateNumber = function (text) {
        var expr = /^\d+$/;
        return expr.test(text);
    };
    UtilHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilHelper);
    return UtilHelper;
}());

//# sourceMappingURL=util-helper.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map