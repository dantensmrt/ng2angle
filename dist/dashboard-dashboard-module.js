(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/routes/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboardv0_dashboardv0_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardv0/dashboardv0.component */ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.ts");
/* harmony import */ var _dashboardv1_dashboardv1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardv1/dashboardv1.component */ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.ts");
/* harmony import */ var _dashboardv2_dashboardv2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboardv2/dashboardv2.component */ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.ts");
/* harmony import */ var _dashboardv3_dashboardv3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardv3/dashboardv3.component */ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'v0', component: _dashboardv0_dashboardv0_component__WEBPACK_IMPORTED_MODULE_3__["Dashboardv0Component"] },
    { path: 'v1', component: _dashboardv1_dashboardv1_component__WEBPACK_IMPORTED_MODULE_4__["Dashboardv1Component"] },
    { path: 'v2', component: _dashboardv2_dashboardv2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboardv2Component"] },
    { path: 'v3', component: _dashboardv3_dashboardv3_component__WEBPACK_IMPORTED_MODULE_6__["Dashboardv3Component"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _dashboardv0_dashboardv0_component__WEBPACK_IMPORTED_MODULE_3__["Dashboardv0Component"],
                _dashboardv1_dashboardv1_component__WEBPACK_IMPORTED_MODULE_4__["Dashboardv1Component"],
                _dashboardv2_dashboardv2_component__WEBPACK_IMPORTED_MODULE_5__["Dashboardv2Component"],
                _dashboardv3_dashboardv3_component__WEBPACK_IMPORTED_MODULE_6__["Dashboardv3Component"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv0/dashboardv0.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    TenantSmart\r\n</div>\r\n<div class=\"row\">\r\n    <!-- START dashboard main content-->\r\n    <div class=\"col-lg-7\">\r\n        <div *ngFor=\"let loc of buildings\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h4>{{loc.name | uppercase}}</h4>\r\n                    <strong>{{loc.address}}</strong>\r\n                    <button class=\"btn btn-xs btn-default pull-right\">Manage</button>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"col-lg-4 col-md-6\" *ngFor=\"let val of loc.metrics\">\r\n                        <!-- START panel-->\r\n                        <div class=\"panel {{val.color}}\">\r\n                            <div class=\"panel-heading\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-3\">\r\n                                        <em class=\"fa {{val.icon}} fa-3x\"></em>\r\n                                    </div>\r\n                                    <div class=\"col-xs-9 text-right\">\r\n                                        <div class=\"text-md\">{{val.value}}</div>\r\n                                        <p class=\"m0\">{{val.title}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <a class=\"panel-footer bg-gray-dark bt0 clearfix btn-block\">\r\n                                <span class=\"pull-left\">Details</span>\r\n                                <span class=\"pull-right\">\r\n                                    <em class=\"fa fa-chevron-circle-right\"></em>\r\n                                </span>\r\n                            </a>\r\n                        </div>\r\n                        <!-- END panel-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- END dashboard main content-->\r\n    <!-- START dashboard sidebar-->\r\n    <aside class=\"col-lg-5\">\r\n        <div class=\"row\">\r\n            <div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"pull-right label bg-primary-light\">{{notifications.length}}</div>\r\n                        <div class=\"panel-title\">NOTIFICATIONS</div>\r\n                    </div>\r\n                    <!-- START list group-->\r\n                    <scrollable class=\"list-group\" height=\"360\">\r\n                        <!-- START list group item-->\r\n                        <span *ngFor=\"let item of notifications\">\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <img class=\"media-box-object img-square thumb64\" [src]=\"item.image\" alt=\"Image\" />\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p>\r\n                                            <strong class=\"media-box-heading text-primary\">{{item.name}}\r\n                                                <small class=\"text-muted\">{{item.address}}</small>\r\n                                            </strong>\r\n                                        </p>\r\n                                        <div class=\"list-group mb0\">\r\n                                            <a *ngFor=\"let row of item.alerts\" class=\"list-group-item bt0\">\r\n                                                <span class=\"label label-purple pull-right\">{{row.time}}</span>\r\n                                                <em class=\"fa fa-fw {{row.icon}} mr\"></em>{{row.text}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n\r\n                        </span>\r\n                        <!-- END list group item-->\r\n                    </scrollable>\r\n                    <!-- END list group-->\r\n                    <!-- START panel footer-->\r\n                    <div class=\"panel-footer clearfix\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search notifications...\" />\r\n                            <span class=\"input-group-btn\">\r\n                                <button class=\"btn btn-default btn-sm\" type=\"submit\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END panel-footer-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n    <!-- END dashboard sidebar-->\r\n</div>"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv0/dashboardv0.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv0/dashboardv0.component.ts ***!
  \***********************************************************************/
/*! exports provided: Dashboardv0Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboardv0Component", function() { return Dashboardv0Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./src/app/shared/colors/colors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboardv0Component = /** @class */ (function () {
    function Dashboardv0Component(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.getData = {};
        this.notifications = [];
        this.buildings = [];
        this.sparkValues = [1, 3, 4, 7, 5, 9, 4, 4, 7, 5, 9, 6, 4];
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.sparkOptions1 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: this.colors.byName('purple'),
            spotColor: '#888',
            minSpotColor: this.colors.byName('purple'),
            maxSpotColor: this.colors.byName('purple'),
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.splineHeight = 280;
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        http.get('assets/server/chart/spline.json').subscribe(function (data) { return _this.splineData = data; });
        http.get('assets/server/data/dashboard/data.json').subscribe(function (data) {
            // Assign response data to a data object
            _this.getData = data;
            // Assign the alert array from the response to a data object (for display)
            _this.notifications = _this.getData.notifications;
            // Assign the buildings array of metrics from the response
            _this.buildings = _this.getData.buildings;
        });
    }
    Dashboardv0Component.prototype.ngOnInit = function () {
    };
    Dashboardv0Component.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    Dashboardv0Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardv0',
            template: __webpack_require__(/*! ./dashboardv0.component.html */ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.html"),
            styles: [__webpack_require__(/*! ./dashboardv0.component.scss */ "./src/app/routes/dashboard/dashboardv0/dashboardv0.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Dashboardv0Component);
    return Dashboardv0Component;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv1/dashboardv1.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    Dashboard\r\n    <small>{{ 'dashboard.WELCOME' | translate }} !</small>\r\n</div>\r\n<!-- START widgets box-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-primary\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-primary-dark pv-lg\">\r\n                    <em class=\"icon-cloud-upload fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">1700</div>\r\n                    <div class=\"text-uppercase\">Uploads</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-purple\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-purple-dark pv-lg\">\r\n                    <em class=\"icon-globe fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">700\r\n                        <small>GB</small>\r\n                    </div>\r\n                    <div class=\"text-uppercase\">Quota</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-green\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\r\n                    <em class=\"icon-bubbles fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h2 mt0\">500</div>\r\n                    <div class=\"text-uppercase\">Reviews</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <!-- START date widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-green pv-lg\">\r\n                    <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->\r\n                    <span now class=\"text-sm\" format=\"MMMM\"></span>\r\n                    <br/>\r\n                    <span now class=\"h2 mt0\" format=\"D\"></span>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <span now class=\"text-uppercase\" format=\"dddd\"></span>\r\n                    <br/>\r\n                    <span now class=\"h2 mt0\" format=\"h:mm\"></span>\r\n                    <span now class=\"text-muted text-sm\" format=\"a\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END date widget    -->\r\n    </div>\r\n</div>\r\n<!-- END widgets box-->\r\n<div class=\"row\">\r\n    <!-- START dashboard main content-->\r\n    <div class=\"col-lg-9\">\r\n        <!-- START chart-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <!-- START widget-->\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\">Inbound visitor statistics</div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"260\"></div>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n        </div>\r\n        <!-- END chart-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"panel widget\">\r\n                    <div class=\"row row-table\">\r\n                        <div class=\"col-md-2 col-sm-3 col-xs-6 text-center bg-info pv-xl\">\r\n                            <em class=\"wi wi-day-sunny fa-4x\"></em>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-sm-3 col-xs-6 pv br\">\r\n                            <div class=\"h1 m0 text-bold\">32&deg;</div>\r\n                            <div class=\"text-uppercase\">Clear</div>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-sm-3 hidden-xs pv text-center br\">\r\n                            <div class=\"text-info text-sm\">10 AM</div>\r\n                            <div class=\"text-muted text-md\">\r\n                                <em class=\"wi wi-day-cloudy\"></em>\r\n                            </div>\r\n                            <div class=\"text-info\">\r\n                                <em class=\"wi wi-sprinkles\"></em>\r\n                                <span class=\"text-muted\">20%</span>\r\n                            </div>\r\n                            <div class=\"text-muted\">27&deg;</div>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-sm-3 hidden-xs pv text-center br\">\r\n                            <div class=\"text-info text-sm\">11 AM</div>\r\n                            <div class=\"text-muted text-md\">\r\n                                <em class=\"wi wi-day-cloudy\"></em>\r\n                            </div>\r\n                            <div class=\"text-info\">\r\n                                <em class=\"wi wi-sprinkles\"></em>\r\n                                <span class=\"text-muted\">30%</span>\r\n                            </div>\r\n                            <div class=\"text-muted\">28&deg;</div>\r\n                        </div>\r\n                        <div class=\"col-md-2 hidden-sm hidden-xs pv text-center br\">\r\n                            <div class=\"text-info text-sm\">12 PM</div>\r\n                            <div class=\"text-muted text-md\">\r\n                                <em class=\"wi wi-day-cloudy\"></em>\r\n                            </div>\r\n                            <div class=\"text-info\">\r\n                                <em class=\"wi wi-sprinkles\"></em>\r\n                                <span class=\"text-muted\">20%</span>\r\n                            </div>\r\n                            <div class=\"text-muted\">30&deg;</div>\r\n                        </div>\r\n                        <div class=\"col-md-2 hidden-sm hidden-xs pv text-center\">\r\n                            <div class=\"text-info text-sm\">1 PM</div>\r\n                            <div class=\"text-muted text-md\">\r\n                                <em class=\"wi wi-day-sunny-overcast\"></em>\r\n                            </div>\r\n                            <div class=\"text-info\">\r\n                                <em class=\"wi wi-sprinkles\"></em>\r\n                                <span class=\"text-muted\">0%</span>\r\n                            </div>\r\n                            <div class=\"text-muted\">30&deg;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <!-- START widget-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"clearfix\">\r\n                            <h3 class=\"pull-left text-muted mt0\">300</h3>\r\n                            <em class=\"pull-right text-muted fa fa-coffee fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"pv-lg\" [sparkline]=\"sparkOptions2\" [values]=\"sparkValues\"></div>\r\n                        <p>\r\n                            <small class=\"text-muted\">Actual progress</small>\r\n                        </p>\r\n                        <progressbar class=\"progress-striped progress-xs\" value=\"80\" type=\"info\">80%</progressbar>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"pull-right label label-danger\">5</div>\r\n                        <div class=\"pull-right label label-success\">12</div>\r\n                        <div class=\"panel-title\">Team messages</div>\r\n                    </div>\r\n                    <!-- START list group-->\r\n                    <scrollable class=\"list-group\" height=\"180\">\r\n                        <!-- START list group item-->\r\n                        <a class=\"list-group-item\" href=\"\">\r\n                            <div class=\"media-box\">\r\n                                <div class=\"pull-left\">\r\n                                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/02.jpg\" alt=\"Image\" />\r\n                                </div>\r\n                                <div class=\"media-box-body clearfix\">\r\n                                    <small class=\"pull-right\">2h</small>\r\n                                    <strong class=\"media-box-heading text-primary\">\r\n                              <span class=\"circle circle-success circle-lg text-left\"></span>Catherine Ellis</strong>\r\n                                    <p class=\"mb-sm\">\r\n                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <!-- END list group item-->\r\n                        <!-- START list group item-->\r\n                        <a class=\"list-group-item\" href=\"\">\r\n                            <div class=\"media-box\">\r\n                                <div class=\"pull-left\">\r\n                                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/03.jpg\" alt=\"Image\" />\r\n                                </div>\r\n                                <div class=\"media-box-body clearfix\">\r\n                                    <small class=\"pull-right\">3h</small>\r\n                                    <strong class=\"media-box-heading text-primary\">\r\n                              <span class=\"circle circle-success circle-lg text-left\"></span>Jessica Silva</strong>\r\n                                    <p class=\"mb-sm\">\r\n                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <!-- END list group item-->\r\n                        <!-- START list group item-->\r\n                        <a class=\"list-group-item\" href=\"\">\r\n                            <div class=\"media-box\">\r\n                                <div class=\"pull-left\">\r\n                                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\r\n                                </div>\r\n                                <div class=\"media-box-body clearfix\">\r\n                                    <small class=\"pull-right\">4h</small>\r\n                                    <strong class=\"media-box-heading text-primary\">\r\n                              <span class=\"circle circle-danger circle-lg text-left\"></span>Jessie Wells</strong>\r\n                                    <p class=\"mb-sm\">\r\n                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <!-- END list group item-->\r\n                        <!-- START list group item-->\r\n                        <a class=\"list-group-item\" href=\"\">\r\n                            <div class=\"media-box\">\r\n                                <div class=\"pull-left\">\r\n                                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/12.jpg\" alt=\"Image\" />\r\n                                </div>\r\n                                <div class=\"media-box-body clearfix\">\r\n                                    <small class=\"pull-right\">1d</small>\r\n                                    <strong class=\"media-box-heading text-primary\">\r\n                              <span class=\"circle circle-danger circle-lg text-left\"></span>Rosa Burke</strong>\r\n                                    <p class=\"mb-sm\">\r\n                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <!-- END list group item-->\r\n                        <!-- START list group item-->\r\n                        <a class=\"list-group-item\" href=\"\">\r\n                            <div class=\"media-box\">\r\n                                <div class=\"pull-left\">\r\n                                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/10.jpg\" alt=\"Image\" />\r\n                                </div>\r\n                                <div class=\"media-box-body clearfix\">\r\n                                    <small class=\"pull-right\">2d</small>\r\n                                    <strong class=\"media-box-heading text-primary\">\r\n                              <span class=\"circle circle-danger circle-lg text-left\"></span>Michelle Lane</strong>\r\n                                    <p class=\"mb-sm\">\r\n                                        <small>Mauris eleifend, libero nec cursus lacinia...</small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <!-- END list group item-->\r\n                    </scrollable>\r\n                    <!-- END list group-->\r\n                    <!-- START panel footer-->\r\n                    <div class=\"panel-footer clearfix\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search message ..\" />\r\n                            <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default btn-sm\" type=\"submit\"><i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                     </span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END panel-footer-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END dashboard main content-->\r\n    <!-- START dashboard sidebar-->\r\n    <aside class=\"col-lg-3\">\r\n        <!-- START loader widget-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <a class=\"text-muted pull-right\" href=\"\">\r\n                    <em class=\"fa fa-arrow-right\"></em>\r\n                </a>\r\n                <div class=\"text-info\">Average Monthly Uploads</div>\r\n                <div class=\"text-center pv-xl\">\r\n                    <div class=\"easypie-chart easypie-chart-lg\" easypiechart [options]=\"pieOptions\" [percent]=\"easyPiePercent\">\r\n                        <span>{{easyPiePercent}}%</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\" [sparkline]=\"sparkOptions1\"  values=\"5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <p class=\"text-muted\">\r\n                    <em class=\"fa fa-upload fa-fw\"></em>\r\n                    <span>This Month</span>\r\n                    <span class=\"text-dark\">1000 Gb</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!-- END loader widget-->\r\n        <!-- START messages and activity-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Latest activities</div>\r\n            </div>\r\n            <!-- START list group-->\r\n            <div class=\"list-group\">\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-purple\"></em>\r\n                        <em class=\"fa fa-cloud-upload fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">15m</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-purple m0\" href=\"\">NEW FILE</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small><a href=\"\">Bootstrap.xls</a>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-info\"></em>\r\n                        <em class=\"fa fa-file-text-o fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">2h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-info m0\" href=\"\">NEW DOCUMENT</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small><a href=\"\">Bootstrap.doc</a>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-danger\"></em>\r\n                        <em class=\"fa fa-exclamation fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">5h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-danger m0\" href=\"\">BROADCAST</a>\r\n                            </div>\r\n                            <p class=\"m0\"><a href=\"\">Read</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-success\"></em>\r\n                        <em class=\"fa fa-clock-o fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">15h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">NEW MEETING</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small>On\r\n                           <em>10/12/2015 09:00 am</em>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-warning\"></em>\r\n                        <em class=\"fa fa-tasks fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">1w</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-warning m0\" href=\"\">TASKS COMPLETION</a>\r\n                            </div>\r\n                            <progressbar class=\"progress-xs m0\" value=\"22\" type=\"warning\">22%</progressbar>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n            </div>\r\n            <!-- END list group-->\r\n            <!-- START panel footer-->\r\n            <div class=\"panel-footer clearfix\">\r\n                <a class=\"pull-left\" href=\"\">\r\n                    <small>Load more</small>\r\n                </a>\r\n            </div>\r\n            <!-- END panel-footer-->\r\n        </div>\r\n        <!-- END messages and activity-->\r\n    </aside>\r\n    <!-- END dashboard sidebar-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv1/dashboardv1.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv1/dashboardv1.component.ts ***!
  \***********************************************************************/
/*! exports provided: Dashboardv1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboardv1Component", function() { return Dashboardv1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./src/app/shared/colors/colors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboardv1Component = /** @class */ (function () {
    function Dashboardv1Component(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.sparkValues = [1, 3, 4, 7, 5, 9, 4, 4, 7, 5, 9, 6, 4];
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.sparkOptions1 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: this.colors.byName('purple'),
            spotColor: '#888',
            minSpotColor: this.colors.byName('purple'),
            maxSpotColor: this.colors.byName('purple'),
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.splineHeight = 280;
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        http.get('assets/server/chart/spline.json').subscribe(function (data) { return _this.splineData = data; });
    }
    Dashboardv1Component.prototype.ngOnInit = function () { };
    Dashboardv1Component.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    Dashboardv1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardv1',
            template: __webpack_require__(/*! ./dashboardv1.component.html */ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.html"),
            styles: [__webpack_require__(/*! ./dashboardv1.component.scss */ "./src/app/routes/dashboard/dashboardv1/dashboardv1.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Dashboardv1Component);
    return Dashboardv1Component;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv2/dashboardv2.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    Dashboard\r\n    <small>{{ 'dashboard.WELCOME' | translate }} !</small>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START List group-->\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n                <div class=\"row row-table pv-lg\">\r\n                    <div class=\"col-xs-6\">\r\n                        <p class=\"m0 lead\">1204</p>\r\n                        <p class=\"m0\">\r\n                            <small>Commits this month</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-xs-6 text-center\">\r\n                        <div [sparkline]=\"sparkOptions1\" values=\"3,6,7,8,4,5\"></div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n                <div class=\"row row-table pv-lg\">\r\n                    <div class=\"col-xs-6\">\r\n                        <p class=\"m0 lead\">$ 3,200.00</p>\r\n                        <p class=\"m0\">\r\n                            <small>Available budget</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-xs-6 text-center\">\r\n                        <div [sparkline]=\"sparkOptions2\" values=\"7,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n                <div class=\"row row-table pv-lg\">\r\n                    <div class=\"col-xs-6\">\r\n                        <p class=\"m0 lead\">67</p>\r\n                        <p class=\"m0\">\r\n                            <small>New followers</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <ul class=\"list-inline text-center\">\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Katie\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/02.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Cody\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/01.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Tamara\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/03.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Gene\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/04.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Marsha\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/04.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" tooltip=\"Robin\">\r\n                                    <img class=\"img-responsive img-circle thumb24\" src=\"assets/img/user/09.jpg\" alt=\"Follower\" />\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- END List group-->\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n        <!-- START bar chart-->\r\n        <div class=\"panel\" id=\"panelChart3\">\r\n            <div class=\"panel-heading\">\r\n                <!-- START button group-->\r\n                <div class=\"pull-right btn-group\" dropdown>\r\n                    <button class=\"btn btn-default btn-sm\" type=\"button\" dropdownToggle>Monthly</button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu fadeInLeft animated\" role=\"menu\">\r\n                        <li><a href=\"#\">Daily</a></li>\r\n                        <li><a href=\"#\">Monthly</a></li>\r\n                        <li><a href=\"#\">Yearly</a></li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <div class=\"panel-title\">Projects Hours</div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div flot [dataset]=\"barStackedData\" [options]=\"barStackedOptions\" height=\"250\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- END bar chart-->\r\n    </div>\r\n</div>\r\n<div class=\"unwrap mv-lg\">\r\n    <!-- START chart-->\r\n    <div class=\"panel\" id=\"panelChart9\">\r\n        <div class=\"panel-heading\">\r\n            <!-- START button group-->\r\n            <div class=\"pull-right btn-group\" dropdown>\r\n                <button class=\"btn btn-default btn-sm\" type=\"button\" dropdownToggle>All time</button>\r\n                <ul *dropdownMenu class=\"dropdown-menu fadeInLeft animated\" role=\"menu\">\r\n                    <li><a href=\"#\">Daily</a></li>\r\n                    <li><a href=\"#\">Monthly</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li><a href=\"#\">All time</a></li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n            <div class=\"panel-title\">Overall progress</div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"300\"></div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3 col-xs-6 text-center\">\r\n                    <p>Projects</p>\r\n                    <div class=\"h1\">25</div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-xs-6 text-center\">\r\n                    <p>Teammates</p>\r\n                    <div class=\"h1\">85</div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-xs-6 text-center\">\r\n                    <p>Hours</p>\r\n                    <div class=\"h1\">380</div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-xs-6 text-center\">\r\n                    <p>Budget</p>\r\n                    <div class=\"h1\">$ 10,000.00</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END chart-->\r\n</div>\r\n<!-- START radial charts-->\r\n<div class=\"row mb-lg\">\r\n    <div class=\"col-sm-3 col-xs-6 text-center\">\r\n        <p>Current Project</p>\r\n        <div class=\"text-center pv-lg\">\r\n            <div class=\"easypie-chart easypie-chart-md\" easypiechart [options]=\"pieOptions1\" [percent]=\"easyPiePercent1\">\r\n                <span>{{easyPiePercent1}}%</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3 col-xs-6 text-center\">\r\n        <p>Current Progress</p>\r\n        <div class=\"text-center pv-lg\">\r\n            <div class=\"easypie-chart easypie-chart-md\" easypiechart [options]=\"pieOptions2\" [percent]=\"easyPiePercent2\">\r\n                <span>{{easyPiePercent2}}%</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3 col-xs-6 text-center\">\r\n        <p>Space Usage</p>\r\n        <div class=\"text-center pv-lg\">\r\n            <div class=\"easypie-chart easypie-chart-md\" easypiechart [options]=\"pieOptions3\" [percent]=\"easyPiePercent3\">\r\n                <span>{{easyPiePercent3}}%</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-3 col-xs-6 text-center\">\r\n        <p>Interactions</p>\r\n        <div class=\"text-center pv-lg\">\r\n            <div class=\"easypie-chart easypie-chart-md\" easypiechart [options]=\"pieOptions4\" [percent]=\"easyPiePercent4\">\r\n                <span>{{easyPiePercent4}}%</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- START radial charts-->\r\n<!-- START Multiple List group-->\r\n<div class=\"list-group\">\r\n    <a class=\"list-group-item\" href=\"#\">\r\n        <table class=\"wd-wide\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"wd-xs\">\r\n                        <div class=\"ph\">\r\n                            <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"ph\">\r\n                            <h4 class=\"media-box-heading\">Project A</h4>\r\n                            <small class=\"text-muted\">Vestibulum ante ipsum primis in faucibus orci</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0\">Last change</p>\r\n                            <small class=\"text-muted\">4 weeks ago</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-user mr fa-lg\"></em>26</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-doc mr fa-lg\"></em>3500</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm\">\r\n                        <div class=\"ph\">\r\n                            <progressbar class=\"m0 progress-xs\" value=\"80\" type=\"success\">80%</progressbar>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </a>\r\n</div>\r\n<div class=\"list-group\">\r\n    <a class=\"list-group-item\" href=\"#\">\r\n        <table class=\"wd-wide\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"wd-xs\">\r\n                        <div class=\"ph\">\r\n                            <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"ph\">\r\n                            <h4 class=\"media-box-heading\">Project X</h4>\r\n                            <small class=\"text-muted\">Vestibulum ante ipsum primis in faucibus orci</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0\">Last change</p>\r\n                            <small class=\"text-muted\">Today at 06:23 am</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-user mr fa-lg\"></em>3</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-doc mr fa-lg\"></em>150</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm\">\r\n                        <div class=\"ph\">\r\n                            <progressbar class=\"m0 progress-xs\" value=\"50\" type=\"purple\">50%</progressbar>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </a>\r\n</div>\r\n<div class=\"list-group\">\r\n    <a class=\"list-group-item\" href=\"#\">\r\n        <table class=\"wd-wide\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"wd-xs\">\r\n                        <div class=\"ph\">\r\n                            <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"ph\">\r\n                            <h4 class=\"media-box-heading\">Project Z</h4>\r\n                            <small class=\"text-muted\">Vestibulum ante ipsum primis in faucibus orci</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0\">Last change</p>\r\n                            <small class=\"text-muted\">Yesterday at 10:20 pm</small>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-user mr fa-lg\"></em>15</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-xs hidden-xs hidden-sm\">\r\n                        <div class=\"ph\">\r\n                            <p class=\"m0 text-muted\">\r\n                                <em class=\"icon-doc mr fa-lg\"></em>480</p>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"wd-sm\">\r\n                        <div class=\"ph\">\r\n                            <progressbar class=\"m0 progress-xs\" value=\"20\" type=\"green\">20%</progressbar>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </a>\r\n    <!-- END dashboard main content-->\r\n</div>\r\n<!-- END Multiple List group-->\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv2/dashboardv2.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv2/dashboardv2.component.ts ***!
  \***********************************************************************/
/*! exports provided: Dashboardv2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboardv2Component", function() { return Dashboardv2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./src/app/shared/colors/colors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboardv2Component = /** @class */ (function () {
    function Dashboardv2Component(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.sparkOptions1 = {
            barColor: this.colors.byName('info'),
            height: 60,
            barWidth: 10,
            barSpacing: 6,
            chartRangeMin: 0
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 60,
            width: '80%',
            lineWidth: 2,
            lineColor: this.colors.byName('purple'),
            chartRangeMin: 0,
            spotColor: '#888',
            minSpotColor: this.colors.byName('purple'),
            maxSpotColor: this.colors.byName('purple'),
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 200,
                // position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        this.easyPiePercent1 = 60;
        this.easyPiePercent2 = 30;
        this.easyPiePercent3 = 50;
        this.easyPiePercent4 = 75;
        this.pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: '#edf2f6',
            scaleColor: false,
            lineWidth: 2,
            lineCap: 'round',
            size: 130
        };
        this.pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('pink'),
            trackColor: '#edf2f6',
            scaleColor: false,
            lineWidth: 2,
            lineCap: 'round',
            size: 130
        };
        this.pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('purple'),
            trackColor: '#edf2f6',
            scaleColor: false,
            lineWidth: 2,
            lineCap: 'round',
            size: 130
        };
        this.pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('warning'),
            trackColor: '#edf2f6',
            scaleColor: false,
            lineWidth: 2,
            lineCap: 'round',
            size: 130
        };
        http.get('assets/server/chart/barstackedv2.json').subscribe(function (data) { return _this.barStackedData = data; });
        http.get('assets/server/chart/splinev2.json').subscribe(function (data) { return _this.splineData = data; });
    }
    Dashboardv2Component.prototype.ngOnInit = function () {
    };
    Dashboardv2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardv2',
            template: __webpack_require__(/*! ./dashboardv2.component.html */ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.html"),
            styles: [__webpack_require__(/*! ./dashboardv2.component.scss */ "./src/app/routes/dashboard/dashboardv2/dashboardv2.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Dashboardv2Component);
    return Dashboardv2Component;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv3/dashboardv3.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    Dashboard\r\n    <small>{{ 'dashboard.WELCOME' | translate }} !</small>\r\n</div>\r\n<!-- START widgets box-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel bg-info-light pt b0 widget\">\r\n            <div class=\"ph\">\r\n                <em class=\"icon-cloud-upload fa-lg pull-right\"></em>\r\n                <div class=\"h2 mt0\">1700</div>\r\n                <div class=\"text-uppercase\">Uploads</div>\r\n            </div>\r\n            <div [sparkline]=\"sparkOptions1\" values=\"2,5,3,7,4,5\" style=\"margin-bottom: -2px\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-purple-light pt b0 widget\">\r\n            <div class=\"ph\">\r\n                <em class=\"icon-globe fa-lg pull-right\"></em>\r\n                <div class=\"h2 mt0\">700\r\n                    <span class=\"text-sm text-white\">GB</span>\r\n                </div>\r\n                <div class=\"text-uppercase\">Quota</div>\r\n            </div>\r\n            <div [sparkline]=\"sparkOptions2\" values=\"1,4,5,4,8,7,10\" style=\"margin-bottom: -2px\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-info-light pt b0 widget\">\r\n            <div class=\"ph\">\r\n                <em class=\"icon-bubbles fa-lg pull-right\"></em>\r\n                <div class=\"h2 mt0\">500</div>\r\n                <div class=\"text-uppercase\">Reviews</div>\r\n            </div>\r\n            <div [sparkline]=\"sparkOptions3\" values=\"4,5,3,10,7,15\" style=\"margin-bottom: -2px\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-purple-light pt b0 widget\">\r\n            <div class=\"ph\">\r\n                <em class=\"icon-pencil fa-lg pull-right\"></em>\r\n                <div class=\"h2 mt0\">35</div>\r\n                <div class=\"text-uppercase\">Annotations</div>\r\n            </div>\r\n            <div [sparkline]=\"sparkOptions4\" values=\"1,3,4,5,7,8\" style=\"margin-bottom: -2px\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END widgets box-->\r\n<!-- START chart-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel panel-default\" id=\"panelChart9\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Website Performance</div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"300\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END chart-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <!-- START panel tab-->\r\n        <div class=\"panel panel-transparent\">\r\n            <tabset class=\"bg-white p0\" justified=\"true\">\r\n                <tab>\r\n                    <ng-template tabHeading>\r\n                        <em class=\"fa fa-clock-o fa-fw\"></em>Tasks Panel\r\n                    </ng-template>\r\n                    <div>\r\n                        <!-- START list group-->\r\n                        <div class=\"list-group mb0\">\r\n                            <a class=\"list-group-item bt0\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">just now</span>\r\n                                <em class=\"fa fa-fw fa-calendar mr\"></em>Calendar updated</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">4 minutes ago</span>\r\n                                <em class=\"fa fa-fw fa-comment mr\"></em>Commented on a post</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">23 minutes ago</span>\r\n                                <em class=\"fa fa-fw fa-truck mr\"></em>Order 392 shipped</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">46 minutes ago</span>\r\n                                <em class=\"fa fa-fw fa-money mr\"></em>Invoice 653 has been paid</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">1 hour ago</span>\r\n                                <em class=\"fa fa-fw fa-user mr\"></em>A new user has been added</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">2 hours ago</span>\r\n                                <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"pick up dry cleaning\"</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">yesterday</span>\r\n                                <em class=\"fa fa-fw fa-globe mr\"></em>Saved the world</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">two days ago</span>\r\n                                <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"fix error on sales page\"</a>\r\n                            <a class=\"list-group-item\" href=\"#\">\r\n                                <span class=\"label label-purple pull-right\">two days ago</span>\r\n                                <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"fix error on sales page\"</a>\r\n                        </div>\r\n                        <!-- END list group-->\r\n                        <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Activity </a>\r\n                        </div>\r\n                    </div>\r\n                </tab>\r\n                <tab>\r\n                    <ng-template tabHeading>\r\n                        <em class=\"fa fa-money fa-fw\"></em>Transactions Panel\r\n                    </ng-template>\r\n                    <div>\r\n                        <!-- START table responsive-->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-bordered table-hover table-striped\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Order #</th>\r\n                                        <th>Order Date</th>\r\n                                        <th>Order Time</th>\r\n                                        <th>Amount (USD)</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>3326</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:29 PM</td>\r\n                                        <td>$321.33</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3325</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:20 PM</td>\r\n                                        <td>$234.34</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3324</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:03 PM</td>\r\n                                        <td>$724.17</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3323</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:00 PM</td>\r\n                                        <td>$23.71</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3322</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:49 PM</td>\r\n                                        <td>$8345.23</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3321</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:23 PM</td>\r\n                                        <td>$245.12</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3320</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:15 PM</td>\r\n                                        <td>$5663.54</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3319</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:13 PM</td>\r\n                                        <td>$943.45</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- END table responsive-->\r\n                        <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Transactions</a>\r\n                        </div>\r\n                    </div>\r\n                </tab>\r\n            </tabset>\r\n        </div>\r\n        <!-- END panel tab-->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"panel panel-transparent\">\r\n            <div vectormap [mapHeight]=\"450\" [mapName]=\"mapName\" [seriesData]=\"seriesData\" [markersData]=\"markersData\" [mapOptions]=\"mapOptions\" ></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- START Widgets-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <!-- START loader widget-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <a class=\"text-muted pull-right\" href=\"#\">\r\n                    <em class=\"fa fa-arrow-right\"></em>\r\n                </a>\r\n                <div class=\"text-info\">Average Monthly Uploads</div>\r\n                <div class=\"text-center pv-xl\">\r\n                    <div class=\"easypie-chart easypie-chart-lg\" easypiechart [options]=\"pieOptions\" [percent]=\"easyPiePercent\">\r\n                        <span>{{easyPiePercent}}%</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\" [sparkline]=\"sparkOptions5\"  values=\"5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <p class=\"text-muted\">\r\n                    <em class=\"fa fa-upload fa-fw\"></em>\r\n                    <span>This Month</span>\r\n                    <span class=\"text-dark\">1000 Gb</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!-- END loader widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START messages and activity-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Latest activities</div>\r\n            </div>\r\n            <!-- START list group-->\r\n            <div class=\"list-group\">\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-purple\"></em>\r\n                        <em class=\"fa fa-cloud-upload fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">15m</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-purple m0\" href=\"#\">NEW FILE</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small><a href=\"#\">Bootstrap.xls</a>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-info\"></em>\r\n                        <em class=\"fa fa-file-text-o fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">2h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-info m0\" href=\"#\">NEW DOCUMENT</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small><a href=\"#\">Bootstrap.doc</a>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-danger\"></em>\r\n                        <em class=\"fa fa-exclamation fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">5h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-danger m0\" href=\"#\">BROADCAST</a>\r\n                            </div>\r\n                            <p class=\"m0\"><a href=\"#\">Read</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <div class=\"list-group-item\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <span class=\"fa-stack\">\r\n                        <em class=\"fa fa-circle fa-stack-2x text-success\"></em>\r\n                        <em class=\"fa fa-clock-o fa-stack-1x fa-inverse text-white\"></em>\r\n                     </span>\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"text-muted pull-right ml\">15h</small>\r\n                            <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"#\">NEW MEETING</a>\r\n                            </div>\r\n                            <p class=\"m0\">\r\n                                <small>On\r\n                           <em>10/12/2015 09:00 am</em>\r\n                        </small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END list group item-->\r\n            </div>\r\n            <!-- END list group-->\r\n            <!-- START panel footer-->\r\n            <div class=\"panel-footer clearfix\">\r\n                <a class=\"pull-left\" href=\"#\">\r\n                    <small>Load more</small>\r\n                </a>\r\n            </div>\r\n            <!-- END panel-footer-->\r\n        </div>\r\n        <!-- END messages and activity-->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"pull-right label label-danger\">5</div>\r\n                <div class=\"pull-right label label-success\">12</div>\r\n                <div class=\"panel-title\">Team messages</div>\r\n            </div>\r\n            <!-- START list group-->\r\n            <scrollable class=\"list-group\" height=\"230\">\r\n                <!-- START list group item-->\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/02.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"pull-right\">2h</small>\r\n                            <strong class=\"media-box-heading text-primary\">\r\n                        <span class=\"circle circle-success circle-lg text-left\"></span>Catherine Ellis</strong>\r\n                            <p class=\"mb-sm\">\r\n                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/03.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"pull-right\">3h</small>\r\n                            <strong class=\"media-box-heading text-primary\">\r\n                        <span class=\"circle circle-success circle-lg text-left\"></span>Jessica Silva</strong>\r\n                            <p class=\"mb-sm\">\r\n                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"pull-right\">4h</small>\r\n                            <strong class=\"media-box-heading text-primary\">\r\n                        <span class=\"circle circle-danger circle-lg text-left\"></span>Jessie Wells</strong>\r\n                            <p class=\"mb-sm\">\r\n                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/12.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"pull-right\">1d</small>\r\n                            <strong class=\"media-box-heading text-primary\">\r\n                        <span class=\"circle circle-danger circle-lg text-left\"></span>Rosa Burke</strong>\r\n                            <p class=\"mb-sm\">\r\n                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <!-- END list group item-->\r\n                <!-- START list group item-->\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <div class=\"media-box\">\r\n                        <div class=\"pull-left\">\r\n                            <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/user/10.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                        <div class=\"media-box-body clearfix\">\r\n                            <small class=\"pull-right\">2d</small>\r\n                            <strong class=\"media-box-heading text-primary\">\r\n                        <span class=\"circle circle-danger circle-lg text-left\"></span>Michelle Lane</strong>\r\n                            <p class=\"mb-sm\">\r\n                                <small>Mauris eleifend, libero nec cursus lacinia...</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <!-- END list group item-->\r\n            </scrollable>\r\n            <!-- END list group-->\r\n            <!-- START panel footer-->\r\n            <div class=\"panel-footer clearfix\">\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search message ..\" />\r\n                    <span class=\"input-group-btn\">\r\n                  <button class=\"btn btn-default btn-sm\" type=\"submit\"><i class=\"fa fa-search\"></i>\r\n                  </button>\r\n               </span>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-footer-->\r\n        </div>\r\n    </div>\r\n    <!-- END dashboard sidebar-->\r\n</div>\r\n<!-- END Widgets-->\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv3/dashboardv3.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboardv3/dashboardv3.component.ts ***!
  \***********************************************************************/
/*! exports provided: Dashboardv3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboardv3Component", function() { return Dashboardv3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./src/app/shared/colors/colors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboardv3Component = /** @class */ (function () {
    function Dashboardv3Component(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.sparkOptions5 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        this.defaultColors = {
            markerColor: '#23b7e5',
            bgColor: 'transparent',
            scaleColors: ['#878c9a'],
            regionFill: '#bbbec6' // the base region color
        };
        // Sparkline
        this.sparkOptions1 = this.buildSparkOptionsBlock('info');
        this.sparkOptions2 = this.buildSparkOptionsBlock('purple');
        this.sparkOptions3 = this.buildSparkOptionsBlock('info');
        this.sparkOptions4 = this.buildSparkOptionsBlock('purple');
        // Flot CHart
        http.get('assets/server/chart/splinev3.json').subscribe(function (data) { return _this.splineData = data; });
        // Vector Map
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
    // The four top block options only changes its color
    // use a common function to generate optiosn per color
    Dashboardv3Component.prototype.buildSparkOptionsBlock = function (color) {
        return {
            type: 'line',
            width: '100%',
            height: 75,
            lineColor: this.colors.byName(color),
            chartRangeMin: 0,
            fillColor: this.colors.byName(color),
            spotColor: this.colors.byName(color),
            minSpotColor: this.colors.byName(color),
            maxSpotColor: this.colors.byName(color),
            highlightSpotColor: this.colors.byName(color),
            highlightLineColor: this.colors.byName(color),
            resize: true
        };
    };
    Dashboardv3Component.prototype.ngOnInit = function () {
    };
    Dashboardv3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardv3',
            template: __webpack_require__(/*! ./dashboardv3.component.html */ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.html"),
            styles: [__webpack_require__(/*! ./dashboardv3.component.scss */ "./src/app/routes/dashboard/dashboardv3/dashboardv3.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Dashboardv3Component);
    return Dashboardv3Component;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map