(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color =\"dark\">\n    <ion-title text-center>\n      Pro-Box\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Segment with default selection -->\n<ion-segment (ionChange)=\"segmentChanged($event)\" value=\"javascript\">\n  <ion-segment-button [routerLink]=\"['/tabs','tab2']\">\n    <ion-label>Profile</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button [routerLink]=\"['/tabs','tab3']\">\n    <ion-label>Workout</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"javascript\">\n    <ion-label>Exercises</ion-label>\n  </ion-segment-button>\n\n</ion-segment>\n\n\n  <ion-content padding>\n    <ion-slides pager = \"true\">\n      <ion-slide *ngFor=\"let slide of slider\">\n        <img [src]=\"slide.image\"/>\n        <h2 [innerHTML] = \"slide.title\"></h2>\n        <p [innerHTML] = \"slide.description\"></p>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-button>\n      Button\n    </ion-button>\n\n  \n  <!--section text-center margin-bottom>\n    <ion-icon style=\"font-size: 5em; color: white;\" name=\"person\"></ion-icon>\n    <h1 style=\"font-size: 1.4em; color: white;\" no-margin>Welcome, <br>\n    Usman</h1>\n  </section-->\n  \n    <!--ion-row-->\n      <!--ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"person\"></ion-icon>\n          <h2>Profile</h2>\n        </ion-card>\n      </!--ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"trophy\"></ion-icon>\n          <h2>Workouts</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row-->\n    <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"videocam\"></ion-icon>\n          <h2>Record A Workout</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"apps\"></ion-icon>\n          <h2>Connected Apps</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"logo-facebook\"></ion-icon>\n          <h2>Social Media</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding color=\"primary\">\n          <ion-icon style=\"font-size: 5em;\" name=\"settings\"></ion-icon>\n          <h2>App Settings</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"iframe-container\">\n    <iframe padding width=\"956\" height=\"538\" [src]=\"sanitize(vid)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </div>\n\n  \n  \n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");








let Tab1PageModule = class Tab1PageModule {
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'segment-example',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe-container {\n  position: relative;\n  width: 100%;\n  padding-bottom: 56.25%;\n  height: 0%;\n}\n\n.iframe-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyZWsvNHRoWWVhci9GaW5hbFllYXJQcm9qZWN0L3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZS1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gICAgaGVpZ2h0OiAwJTtcbn1cblxuLmlmcmFtZS1jb250YWluZXIgaWZyYW1le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiLmlmcmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDAlO1xufVxuXG4uaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

let Tab1Page = class Tab1Page {
    constructor(dom, router) {
        this.dom = dom;
        this.router = router;
        this.slider = [
            {
                title: '',
                description: '',
                image: "assets/slide4.jpg"
            },
            {
                title: '',
                description: '',
                image: "assets/slide2.jpg"
            },
            {
                title: '',
                description: '',
                image: "assets/slide3.jpg"
            }
        ];
    }
    sanitize(vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map