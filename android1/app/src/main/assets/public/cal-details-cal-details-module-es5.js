function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cal-details-cal-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cal-details/cal-details.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cal-details/cal-details.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalDetailsCalDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>calDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/cal-details/cal-details-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/cal-details/cal-details-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CalDetailsPageRoutingModule */

  /***/
  function srcAppCalDetailsCalDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalDetailsPageRoutingModule", function () {
      return CalDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cal_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cal-details.page */
    "./src/app/cal-details/cal-details.page.ts");

    var routes = [{
      path: '',
      component: _cal_details_page__WEBPACK_IMPORTED_MODULE_3__["CalDetailsPage"]
    }];

    var CalDetailsPageRoutingModule = function CalDetailsPageRoutingModule() {
      _classCallCheck(this, CalDetailsPageRoutingModule);
    };

    CalDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cal-details/cal-details.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/cal-details/cal-details.module.ts ***!
    \***************************************************/

  /*! exports provided: CalDetailsPageModule */

  /***/
  function srcAppCalDetailsCalDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalDetailsPageModule", function () {
      return CalDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _cal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cal-details-routing.module */
    "./src/app/cal-details/cal-details-routing.module.ts");
    /* harmony import */


    var _cal_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cal-details.page */
    "./src/app/cal-details/cal-details.page.ts");

    var CalDetailsPageModule = function CalDetailsPageModule() {
      _classCallCheck(this, CalDetailsPageModule);
    };

    CalDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalDetailsPageRoutingModule"]],
      declarations: [_cal_details_page__WEBPACK_IMPORTED_MODULE_6__["CalDetailsPage"]]
    })], CalDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/cal-details/cal-details.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/cal-details/cal-details.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalDetailsCalDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbC1kZXRhaWxzL2NhbC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cal-details/cal-details.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/cal-details/cal-details.page.ts ***!
    \*************************************************/

  /*! exports provided: CalDetailsPage */

  /***/
  function srcAppCalDetailsCalDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalDetailsPage", function () {
      return CalDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CalDetailsPage =
    /*#__PURE__*/
    function () {
      function CalDetailsPage() {
        _classCallCheck(this, CalDetailsPage);
      }

      _createClass(CalDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalDetailsPage;
    }();

    CalDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cal-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cal-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cal-details/cal-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cal-details.page.scss */
      "./src/app/cal-details/cal-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CalDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=cal-details-cal-details-module-es5.js.map