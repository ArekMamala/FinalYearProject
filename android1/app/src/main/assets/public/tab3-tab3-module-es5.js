function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tab Three\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<div full>\n    <h1>X: {{x}}</h1>\n  </div>\n  <div full>\n    <h1>Y: {{y}}</h1>\n  </div>\n  <div full>\n    <h1>Z: {{z}}</h1>\n  </div>\n  <div full>\n    <h1>Timestamp: {{timestamp}}</h1>\n  </div>\n\n  <button ion-button full (click)=\"start()\">Start Listening</button>\n  <button ion-button full (click)=\"stop()\">Stop Listening</button>\n  <button ion-button full (click)=\"startingPosition()\">Starting Position</button>\n\n  <div full>\n    <h1>Starting X: {{xStart}}</h1>\n  </div>\n  <div full>\n    <h1>Starting Y: {{yStart}}</h1>\n  </div>\n  <div full>\n    <h1>Starting Z: {{zStart}}</h1>\n  </div>\n  <div full>\n    <h1>Puches: {{punch}}</h1>\n  </div>\n\n  <div full>\n    <h1>Starting Z: {{ters}}</h1>\n  </div>\n!-->\n  <ion-label>MAGNETION HEADING = {{magneticHeading}}</ion-label><br/><br/>\n  <ion-label>TRUE HEADING = {{trueHeading}}</ion-label><br/><br/>\n  <ion-label>TIMESTAMP = {{timestamp}}</ion-label><br/>\n    \n  <ion-button (click) = \"startWatching()\" expand=\"full\">start watching</ion-button><br/><br/>\n  <ion-button (click) = \"stopWatching()\" expand=\"full\">stop watching</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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


    var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/device-motion/ngx */
    "./node_modules/@ionic-native/device-motion/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/device-orientation/ngx */
    "./node_modules/@ionic-native/device-orientation/ngx/index.js");

    var Tab3Page =
    /*#__PURE__*/
    function () {
      function Tab3Page(deviceMotion, deviceOrientation) {
        _classCallCheck(this, Tab3Page);

        this.deviceMotion = deviceMotion;
        this.deviceOrientation = deviceOrientation;
        this.magneticHeading = "";
        this.trueheading = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.timestamp = "-";
        this.xStart = 0;
        this.yStart = 0;
        this.zStart = 0;
        this.punch = 0;
      }

      _createClass(Tab3Page, [{
        key: "startWatching",
        value: function startWatching() {
          var _this = this;

          this.watch = this.deviceOrientation.watchHeading().subscribe(function (heading) {
            _this.trueheading = heading.trueHeading;
            _this.magneticHeading = heading.magneticHeading;
            _this.timestamp = new Date(heading.timestamp).toString();
          }, function (err) {
            alert(JSON.stringify(err));
          });
        }
      }, {
        key: "stopwatching",
        value: function stopwatching() {
          if (this.watch != null) {
            this.watch.unsubscribe();
          }
        }
      }, {
        key: "start",
        value: function start() {
          var _this2 = this;

          try {
            var option = {
              frequency: 500
            };
            this.id = this.deviceMotion.watchAcceleration(option).subscribe(function (acc) {
              _this2.x = acc.x;
              _this2.y = acc.y;
              _this2.z = acc.z;
              _this2.timestamp = "" + acc.timestamp;

              if (_this2.zStart - _this2.z >= 4) {
                _this2.punch += 1;
              }

              console.log(_this2.punch);
            });
            var ters;
            var test2;
            ters = this.zStart - this.z;
            test2 = this.zStart - this.z;
            console.log("" + ters, "test " + test2);
            console.log(this.punch);
          } catch (error) {
            alert("Error " + error);
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          this.id.unsubscribe();
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.punch = 0;
          this.timestamp = "";
          this.xStart = 0;
          this.yStart = 0;
          this.zStart = 0;
          this.jab = 0;
          this.uppercut = 0;
          this.hook = 0;
          this.punchName = "";
        }
      }, {
        key: "startingPosition",
        value: function startingPosition() {
          var _this3 = this;

          try {
            var startReload = {
              frequency: 500000000
            };
            this.idStartingPosition = this.deviceMotion.watchAcceleration(startReload).subscribe(function (acc) {
              _this3.xStart = acc.x;
              _this3.yStart = acc.y;
              _this3.zStart = acc.z;
            });
          } catch (error) {
            alert("Error " + error);
          }
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceMotion"]
      }, {
        type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["DeviceOrientation"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceMotion"], _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["DeviceOrientation"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map