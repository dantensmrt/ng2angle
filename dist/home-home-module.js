(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/routes/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/routes/home/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/routes/home/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/home/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4\">\r\n                <div class=\"text-center\">\r\n                    <img alt=\"Angular\" class=\"img-responsive center-block home-logo\" src=\"assets/img/angular.svg\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 home-text\">\r\n                <h1>Angle</h1>\r\n                <p>Bootstrap Admin Template + <strong>Angular6</strong>\r\n                    <br> <small>One framework. Mobile & desktop.</small>\r\n                    <br> <strong>{{myVar}}</strong>\r\n                </p>\r\n                <p [hidden]=\"hideMe\">Do you see me?</p>\r\n                <p><button (click)=\"clickMe()\" class=\"btn btn-primary btn-lg\">{{buttonLabel}}</button></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Angular-cli</h3></div>\r\n                <div class=\"panel-body\">\r\n                    A Webpack powered command line interface with tons of utilities. Serve and build your project with a single command.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Router</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Powerful and modern routes definitions. Easily declare routes and nested routes with components association.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Generators</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Angular-CLI tool provides generators to create components, services, directives and pipe from the command line.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Modularized</h3></div>\r\n                <div class=\"panel-body\">\r\n                    This project has been carefully designed to provide modules for Core, Layout, Shared and Routed components.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Environments</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Ready to work with multiple environments, from first stage development through test and production.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Style Guide</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Better practices for Code organization and Project structure based on the official Angular style guide.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/home/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/routes/home/home/home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n.home-container .home-logo {\n    width: 240px; }\n@media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/routes/home/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/home/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.myVar = '';
        this.myInc = 0;
        this.butShowMe = 'Show Me';
        this.butHideMe = 'Hide Me';
        this.birthday = new Date(1988, 3, 15);
        this.hideMe = false;
        this.buttonLabel = this.butHideMe;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.clickMe = function () {
        switch (this.hideMe) {
            case true:
                this.buttonLabel = this.butShowMe;
                break;
            default:
                this.buttonLabel = this.butHideMe;
                break;
        }
        this.hideMe = !this.hideMe;
        return;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/routes/home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map