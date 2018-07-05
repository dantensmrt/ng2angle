(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./src/app/routes/maps/google/google.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/maps/google/google.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Google Maps\r\n    <small>This directive allows you to add Google Maps Javascript API elements.</small>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Classic Map</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Custom zoom</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"19\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Different Map Type (not supported yet)</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Multiple Markers</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        <agm-marker [latitude]=\"33.787453\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Styled Maps</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [styles]=\"mapStyles\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/maps/google/google.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/maps/google/google.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/maps/google/google.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/maps/google/google.component.ts ***!
  \********************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleComponent = /** @class */ (function () {
    function GoogleComponent() {
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        // custom map style
        this.mapStyles = [{ 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#bdd1f9' }] }, { 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    GoogleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google',
            template: __webpack_require__(/*! ./google.component.html */ "./src/app/routes/maps/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.scss */ "./src/app/routes/maps/google/google.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());



/***/ }),

/***/ "./src/app/routes/maps/maps.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/maps/maps.module.ts ***!
  \********************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google/google.component */ "./src/app/routes/maps/google/google.component.ts");
/* harmony import */ var _vector_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vector/vector.component */ "./src/app/routes/maps/vector/vector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'google', component: _google_google_component__WEBPACK_IMPORTED_MODULE_4__["GoogleComponent"] },
    { path: 'vector', component: _vector_vector_component__WEBPACK_IMPORTED_MODULE_5__["VectorComponent"] }
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                })
            ],
            declarations: [
                _google_google_component__WEBPACK_IMPORTED_MODULE_4__["GoogleComponent"],
                _vector_vector_component__WEBPACK_IMPORTED_MODULE_5__["VectorComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/routes/maps/vector/vector.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/maps/vector/vector.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Vector Maps\r\n   <br/>\r\n   <small>Resolution independent maps</small>\r\n</div>\r\n<div vectormap [mapHeight]=\"700\" [mapName]=\"mapName\" [seriesData]=\"seriesData\" [markersData]=\"markersData\" [mapOptions]=\"mapOptions\" ></div>\r\n"

/***/ }),

/***/ "./src/app/routes/maps/vector/vector.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/maps/vector/vector.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/maps/vector/vector.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/maps/vector/vector.component.ts ***!
  \********************************************************/
/*! exports provided: VectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorComponent", function() { return VectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VectorComponent = /** @class */ (function () {
    function VectorComponent() {
        this.defaultColors = {
            markerColor: '#23b7e5',
            bgColor: 'transparent',
            scaleColors: ['#878c9a'],
            regionFill: '#bbbec6' // the base region color
        };
        this.mapName = 'world_mill_en';
        this.mapOptions = {
            markerColor: this.defaultColors.markerColor,
            bgColor: this.defaultColors.bgColor,
            scale: 1,
            scaleColors: this.defaultColors.scaleColors,
            regionFill: this.defaultColors.regionFill
        };
        this.seriesData = {
            'CA': 11100,
            'DE': 2510,
            'FR': 3710,
            'AU': 5710,
            'GB': 8310,
            'RU': 9310,
            'BR': 6610,
            'IN': 7810,
            'CN': 4310,
            'US': 839,
            'SA': 410 // Saudi Arabia
        };
        this.markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];
    }
    VectorComponent.prototype.ngOnInit = function () {
    };
    VectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vector',
            template: __webpack_require__(/*! ./vector.component.html */ "./src/app/routes/maps/vector/vector.component.html"),
            styles: [__webpack_require__(/*! ./vector.component.scss */ "./src/app/routes/maps/vector/vector.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VectorComponent);
    return VectorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map