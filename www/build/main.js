webpackJsonp([9],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7____ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(351);
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
        this.url = __WEBPACK_IMPORTED_MODULE_4__helpers_config__["a" /* urls */].api_url;
        this.appVersion.getVersionNumber().then(function (version) {
            _this.Version = version;
        });
    }
    ApiProvider.prototype.post = function (endpoint, body, params, options) {
        var _this = this;
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_7____["a" /* RequestOptions */]();
        }
        if (params) {
            params["app_ver"] = this.Version;
            params["udid"] = this.device.uuid;
            params["dev_model"] = this.device.model;
            params["dev_os"] = this.device.platform;
            params["device_type"] = this.device.platform;
            options.params = params;
            //options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
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
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(details);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urls; });
/* unused harmony export messages */
/* unused harmony export constants */
var urls = {
    //api_url: "http://doctorinout.com/api/v1/",
    api_url: "http://dev.doctorinout.com/api/v1/",
    register: "User/create",
    registerPatient: "User/createPatient",
    auth: "User/Auth",
    user: "User",
    deleteMR: "Builder/deleteMr",
    getAllDocMR: "Builder/getMrByDocId",
    getTodayDocMR: "Builder/getTodayMrByDocId",
    getTimeByDocId: "User/getTimeById",
    getPatientByDoc: "Home/getPatientByDoc",
    getPatientByDocId: "Home/getPatientByDocId",
    receptionByDocId: "User/getreceptionByDocId",
    BillFileUpload: "Builder/fileUpload",
    checkPhone: "Home/checkPhone",
    Addreception: "User/Addreception",
    editReception: "User/editReception",
    editDocprofile: "User/editDocprofile",
    getUserProfile: "User/getProfile",
    savePushData: "User/savePushData",
    setHold: "User/setHold",
    addPatientInfo: "Builder/create",
    addMrInfo: "Builder/MRcreate",
    uploadTodayBook: "Builder/uploadTodayBook",
    UpdatePatientInfo: "Builder/update",
    getPandingPatient: "Builder/getPandingPatient",
    deletePatient: "Builder/delete",
    getAppomentList: "Builder/getAppomentList",
    markFavorite: "Builder/markFavorite",
    getTodayAllPatient: "Builder/getTodayAllPatient",
    updatePass: "User/UpdatePassword",
    getDonePatient: "Home/getDonePatient",
    deleteReception: "User/delete",
    Builder: "Builder",
    house: "Home",
    addHome: "Home/create",
    addUser: "User/create",
    addBuilder: "Builder/create",
    BuilderById: "Builder/view",
    getHomeByBuilder: "Home/viewByBuildId",
    userByBuilderId: "User/viewByBuildId",
    setValidity: "Builder/setValidity",
    forgot_password: "User/forgot_password",
    logout: "user/logout",
    homeListUpload: "Home/fileUpload"
};
var constants = {
    APP_VERSION: "1.0.3",
    TOAST_TIME: 4000,
    SUC_DBLUP_AGE: 10,
    SUC_DATA_SYNC_AGE: 60,
    TERMS_URL: "https://lawyerdiaryapp.com/m/terms-of-use",
    PRIVACY_URL: "https://lawyerdiaryapp.com/m/privacy-policy",
    IS_ONLINE: true,
    /*
      IS_DEV_APP
      true while developing app using DEV_APP.
      This will no include plugins, make it false after development
    */
    IS_DEV_APP: false
};
var messages = {
    invalid_username: "invalid username or password",
    db_lookup_api_error: "db_lookup_api_error",
    data_sync: "Data is syncing-up",
    network_error: "No internet. App requires internet",
    logout_error: "No internet. Logout requires internet",
    lookupdata_sync: "Look-up data synced-up",
    lodata_sync: "Your data synced-up",
    went_wrong: "Something went wrong. Try it latter",
    non_Active: "Your account is temporarily blocked please contact customer care:07554274736",
    Expire_Account: "Your account is expired please contact customer care:07554274736",
    calender_view: {
        no_case: "No Cases",
        no_todo: "No To-dos"
    },
    register: {
        no_internet: "No internet. App requires internet",
        required: "field is required",
        atleast_3_chars: "should be atleast of 3 chars",
        only_alphabets: "should contain only alphabets",
        success_register: "Please check your email to activate your account",
        email_valid: "Email Address is not valid",
        phone_valid: "Phone number should be of 10 chars",
        phone_invalid: "Phone number is not valid",
        password_valid: "Password should be of atleast 4 chars",
        password_special_characters_valid: "Enter number and characters only",
        confirm_password_valid: "Password and confirm password should be same",
        terms: "You have to accept the terms and conditions"
    },
    law_office: {
        no_internet: "No internet. App requires internet",
        required: "field is required",
        phone_valid: "Phone number should be of 10 chars",
        terms: "You have to accept the terms and conditions",
        pin_valid: "Pin number should be of 6 chars",
        skipMess: "Your account is yet to be linked to a Law firm. Do you want to set it up now?",
        message: "Your Law office  account is created. Add your cases."
    },
    contact: {
        no_internet: "No internet. App requires internet",
        required: "field is required",
        comment: "Comments should be of atleast 10 chars",
        message: "Thanks. Your message will be responded in 1 business day"
    },
    forgot_password: {
        no_internet: "No internet. App requires internet",
        success_forgot_password: "Please check your email to get your New Password"
    },
    new_case: {
        case_number_valid: "Case Number should contain only numbers",
        case_number_length: "Case Number should not greater than 6 chars"
    },
    settings: {
        db_lookup_api_error: "db_lookup_api_error",
        network_error: "No internet. App requires internet",
        admin_message: "YOU ARE AN ADMIN",
        required: "Required",
        only_alphabets: "Only Alphabets",
        email_valid: "Invalid Email",
        phone_valid: "Invalid Phone Number",
        password_valid: "Invalid Password",
        confirm_password_valid: "Password is not same",
        atleast_3_chars: " requires min three characters",
        atleast_1_chars: " requires min one character",
        atleast_2_chars: " requires min two characters",
        rolenow: "Please select a role",
        LawofficesetUp: "Your account is yet to be linked to a Law Firm. Go to Settings and then enter Law office details."
    },
    new_appt: {
        validation: {
            meeting_with: "Please select meeting with",
            subject: "Please select subject",
            when_date: "Please select date",
            when_from_time: "Please select from time",
            when_to_time: "Please select to time"
        },
        success: {
            message: "Appointment added",
            duration: "2500"
        }
    },
    edit_appt: {
        validation: {
            meeting_with: "Please select meeting with",
            subject: "Please select subject",
            when_date: "Please select date",
            when_from_time: "Please select from time",
            when_to_time: "Please select to time"
        },
        success: {
            message: "Appointment update",
            duration: "2500"
        }
    },
    add_note: {
        validations: {
            case: "Please select a case",
            description: "Please enter some note text"
        },
        message: {
            success: "Notes added",
            success_edit: "Notes updated",
            error: "Error adding note."
        }
    },
    add_todo: {
        validations: {
            case: "Please select a case",
            due_date: "Please select due date",
            description: "Please enter some description"
        },
        message: {
            success: "Todo added",
            success_edit: "Todo updated",
            error: "Error adding todo."
        }
    }
};

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_services__ = __webpack_require__(350);
/* unused harmony namespace reexport */

var RequestOptions = /** @class */ (function () {
    function RequestOptions() {
    }
    return RequestOptions;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		684,
		8
	],
	"../pages/filter/filter.module": [
		685,
		7
	],
	"../pages/home/home.module": [
		686,
		6
	],
	"../pages/items-detail/items-detail.module": [
		687,
		5
	],
	"../pages/items/items.module": [
		688,
		4
	],
	"../pages/login/login.module": [
		689,
		3
	],
	"../pages/menu/menu.module": [
		690,
		2
	],
	"../pages/setting/setting.module": [
		691,
		1
	],
	"../pages/sign-up/sign-up.module": [
		692,
		0
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(154);
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
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('doctorName', data.doctorName);
        formData.append('address', data.address);
        formData.append('contactNo', data.contactNo);
        formData.append('clinicName', data.clinicName);
        formData.append('clinicAddress', data.clinicAddress);
        formData.append('clinicContactNo', data.clinicContactNo);
        formData.append('passTxt', data.passTxt);
        formData.append('MRCode', data.MRCode);
        formData.append('timeSet', JSON.stringify(data.timeSet));
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].register, formData, {}, options).share();
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
    UserProvider.prototype.registerPatient = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('userName', data.userName);
        formData.append('address', data.address);
        formData.append('contactNo', data.contactNo);
        formData.append('passTxt', data.passTxt);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].registerPatient, formData, {}, options).share();
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
    UserProvider.prototype.getUserProfile = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getUserProfile, formData, options).share();
        return seq;
    };
    UserProvider.prototype.savePushData = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('userId', data.userId);
        formData.append('DeviceOS', data.DeviceOS);
        formData.append('deviceUDID', data.deviceUDID);
        formData.append('token', data.token);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].savePushData, formData, options).share();
        return seq;
    };
    UserProvider.prototype.forgotPassword = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var params = data;
        console.log(params);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].forgot_password, params, options).share();
        return seq;
    };
    UserProvider.prototype.editDocprofile = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('doctorName', data.doctorName);
        formData.append('address', data.address);
        formData.append('contactNo', data.contactNo);
        formData.append('clinicName', data.clinicName);
        formData.append('clinicAddress', data.clinicAddress);
        formData.append('clinicContactNo', data.clinicContactNo);
        formData.append('passTxt', data.passTxt);
        formData.append('docId', data.docId);
        formData.append('timeSet', JSON.stringify(data.timeSet));
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].editDocprofile, formData, {}, options).share();
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
    UserProvider.prototype.logoutUser = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var params = data;
        console.log(params);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].logout, {}, params, options).share();
        return seq;
    };
    UserProvider.prototype.loginUser = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('email_address', data.email_address);
        formData.append('password', data.password);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].auth, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.storage.set("fLogin", true);
                _this.storage.set("userData", JSON.stringify(res));
            }
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.add = function (data) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('UserNameTxt', data.UserNameTxt);
        formData.append('emailTxt', data.emailTxt);
        formData.append('phoneNo', data.phoneNo);
        formData.append('passTxt', data.passTxt);
        formData.append('builderId', data.builderId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].addUser, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.storage.set("fLogin", true);
                _this.storage.set("userData", JSON.stringify(res));
            }
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.getUserBYBuilder = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('buil_Id', data.buil_Id);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].userByBuilderId, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.view = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].user, null, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.getReceptionByDoc = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].receptionByDocId, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.addReception = function (data, DocId, ReceptionId) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', DocId);
        formData.append('ReceptionName', data.ReceptionName);
        formData.append('ReceptionContactNo', data.ReceptionContactNo);
        if (data.currentTime) {
            formData.append('currentTime', data.currentTime);
        }
        formData.append('passTxt', data.passTxt);
        formData.append('ReceptionId', ReceptionId);
        var seq;
        if (ReceptionId != "0") {
            seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].editReception, formData, {}, options).share();
        }
        else {
            seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].Addreception, formData, {}, options).share();
        }
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.updatePass = function (resData) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', resData.DocId);
        formData.append('oldPassword', resData.oldPassword);
        formData.append('newPassword', resData.newPassword);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].updatePass, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
        });
        return seq;
    };
    UserProvider.prototype.deleteReception = function (resData) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('userId', resData.userId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].updatePass, formData, {}, options).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Login Error", JSON.stringify(err));
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralProvider = /** @class */ (function () {
    function GeneralProvider(config) {
        this.config = config;
        this.State_City = [];
        this.state_list = [];
    }
    GeneralProvider.prototype.setPatient = function (pati) {
        this.selectPatient = pati;
    };
    GeneralProvider.prototype.getPatient = function () {
        return this.selectPatient;
    };
    GeneralProvider.prototype.setState_City = function (State) {
        this.State_City = State;
    };
    GeneralProvider.prototype.getState_City = function () {
        return this.State_City;
    };
    GeneralProvider.prototype.setstate_list = function (State) {
        this.state_list = State;
    };
    GeneralProvider.prototype.getstate_list = function () {
        return this.state_list;
    };
    GeneralProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], GeneralProvider);
    return GeneralProvider;
}());

//# sourceMappingURL=general-services.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_index__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_general_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_patient_services__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_services__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(22);
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
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items-detail/items-detail.module#ItemsDetailPageModule', name: 'ItemsDetailPage', segment: 'items-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__["a" /* UtilHelper */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_9__providers_general_services__["a" /* GeneralProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_user_services__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_api_index__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_13__providers_patient_services__["a" /* PatientProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_services__ = __webpack_require__(254);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/pointofsale/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/prashantjain/Desktop/Project/plugins and old helper applications/pointofsale/src/app/app.html"*/
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

/***/ 682:
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

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_config__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PatientProvider = /** @class */ (function () {
    function PatientProvider(plt, api, storage, config) {
        this.plt = plt;
        this.api = api;
        this.storage = storage;
        this.config = config;
    }
    PatientProvider.prototype.getHold = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('status', data.status);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].setHold, formData, {}, options).share();
        seq.subscribe(function (res) {
            if (res.token) {
            }
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    PatientProvider.prototype.getAllMrByDoc = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getAllDocMR, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getTodayMrByDoc = function (data) {
        var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        var appomentDate = new Date();
        var date = appomentDate.getDate();
        var date1 = "";
        if (date < 10) {
            date1 = "0" + date;
        }
        else {
            date1 = date + "";
        }
        formData.append('DocId', data.DocId);
        formData.append('TimeSlot', data.TimeSlot);
        formData.append('appomentDate', date1 + "-" + months[appomentDate.getMonth()] + "-" + appomentDate.getFullYear());
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getTodayDocMR, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.deleteMr = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('mrId', data.mrId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].deleteMR, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.gettimeLog = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getTimeByDocId, formData, {}, options).share();
        seq.subscribe(function (res) {
            if (res.token) {
            }
        }, function (err) {
            console.error("Register Error", JSON.stringify(err));
        });
        return seq;
    };
    PatientProvider.prototype.getPatientByDoc = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getPatientByDocId, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getAppomentList = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('patientId', data.patientId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getAppomentList, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getCurrentPatient = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('currentTime', data.currentTime);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getPatientByDoc, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.UpdatePatientData = function (patentId, dataInfo, DocId) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', DocId);
        formData.append('contactNo', dataInfo.contactNo);
        formData.append('patientName', dataInfo.patientName);
        formData.append('patientAddress', dataInfo.patientAddress);
        formData.append('patientId', patentId);
        formData.append('contactGender', dataInfo.contactGender);
        formData.append('contactAge', dataInfo.contactAge);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].UpdatePatientInfo, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getPatientData = function (patentId, dataInfo, DocId) {
        var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        console.log(dataInfo.appomentDate);
        var date;
        var today_Date = new Date();
        var isToday = 0;
        if (typeof dataInfo.appomentDate.getMonth === 'function') {
            date = dataInfo.appomentDate.getDate();
        }
        else {
            dataInfo.appomentDate = new Date(dataInfo.appomentDate);
            date = dataInfo.appomentDate.getDate();
        }
        var msPerDay = 24 * 60 * 60 * 1000;
        var daysLeft = (today_Date.getTime() - dataInfo.appomentDate.getTime()) / msPerDay;
        console.log(daysLeft);
        if (daysLeft < 1) {
            isToday = 1;
        }
        if (date < 10) {
            date = "0" + date;
        }
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', DocId);
        formData.append('TimeSlot', dataInfo.TimeLineId);
        formData.append('PatientNo', dataInfo.PatientNo);
        formData.append('contactNo', dataInfo.contactNo);
        formData.append('contactGender', dataInfo.contactGender);
        formData.append('contactAge', dataInfo.contactAge);
        formData.append('patientName', dataInfo.patientName);
        formData.append('patientAddress', dataInfo.patientAddress);
        formData.append('patientId', patentId);
        formData.append('isToday', isToday + "");
        formData.append('appomentDate', date + "-" + months[dataInfo.appomentDate.getMonth()] + "-" + dataInfo.appomentDate.getFullYear());
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].addPatientInfo, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.saveMRInfo = function (patentId, dataInfo, DocId) {
        var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        console.log(dataInfo.appomentDate);
        var date = dataInfo.appomentDate.getDate();
        if (date < 10) {
            date = "0" + date;
        }
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', DocId);
        formData.append('TimeSlot', dataInfo.TimeLineId);
        formData.append('PatientNo', dataInfo.PatientNo);
        formData.append('contactNo', dataInfo.contactNo);
        formData.append('contactGender', dataInfo.contactGender);
        formData.append('contactAge', dataInfo.contactAge);
        formData.append('patientName', dataInfo.patientName);
        formData.append('patientAddress', dataInfo.patientAddress);
        formData.append('patientId', patentId);
        formData.append('appomentDate', date + "-" + months[dataInfo.appomentDate.getMonth()] + "-" + dataInfo.appomentDate.getFullYear());
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].addMrInfo, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getPatientByPhone = function (PhoneNo) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('contactNo', PhoneNo);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].checkPhone, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getTodayPandingPatient = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('TimeSlot', data.timeLineId);
        formData.append('TodayDate', data.currentDate);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getTodayAllPatient, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getIsPandingPatient = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        var D = new Date();
        var M = D.getMonth() + 1;
        var DA = D.getDate();
        var MA = "";
        var DAT = "";
        if (M < 10) {
            MA = "0" + M;
        }
        else {
            MA = M + "";
        }
        if (DA < 10) {
            DAT = "0" + DA;
        }
        else {
            DAT = DA + "";
        }
        formData.append('DocId', data.DocId);
        formData.append('TimeSlot', data.timeLineId);
        formData.append('TodayDate', DAT + "-" + MA + "-" + D.getFullYear());
        if (data.currentNo) {
            formData.append('currentNo', data.currentNo);
        }
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getPandingPatient, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.getDonePatient = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('appointmentId', data.appointmentId);
        if (data.nextContactNo) {
            formData.append('nextContactNo', data.nextContactNo);
        }
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].getDonePatient, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.deletePatient = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('appointmentId', data.appointmentId);
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].deletePatient, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.markFavorite = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__index__["a" /* RequestOptions */]();
        var formData = new FormData();
        formData.append('DocId', data.DocId);
        formData.append('patientId', data.patientId);
        if (data.favoriteId) {
            formData.append('favoriteId', data.favoriteId);
        }
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_5__helpers_config__["a" /* urls */].markFavorite, formData, options).share();
        return seq;
    };
    PatientProvider.prototype.fileUpload = function (data) {
    };
    PatientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], PatientProvider);
    return PatientProvider;
}());

//# sourceMappingURL=patient-services.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map