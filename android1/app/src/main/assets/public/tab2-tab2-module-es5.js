function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Sign-Up/Login\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-content\">\r\n  <!-- Using cards because it is an easier way of displaying information withour messing with full page.\r\n  Show hide certain cards and will make sure others working on project don't mess with your cards.-->\r\n\r\n  <!--This card is for signing up-->\r\n  <ion-card [hidden]=isHidden>\r\n    <h3>Sign-up</h3>\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username Input\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"password\" [(ngModel)]=\"inputPassword\" placeholder=\"Password Input\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button color=\"primary\" (click)=\"addUser()\">Sign Up</ion-button>\r\n  \r\n  <!--This card is for logging in if user already has an account-->\r\n  </ion-card>\r\n  <!-- Notice how I can hide both cards when I don't want the user to see them-->\r\n  <ion-card [hidden]=isHidden>\r\n    <h5>Already have an account? Login below</h5>\r\n    <ion-button (click)=\"logIn()\" color=\"danger\">Login</ion-button>\r\n  </ion-card>\r\n\r\n  <!-- This card will display user information and allow the user to logout-->\r\n  <!-- Log out isn't fully complete yet-->\r\n  <ion-card [hidden]=showInfo>\r\n    <ion-button (click)=\"logOut()\">Log Out</ion-button>\r\n    User information\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/environment */
    "./src/app/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js"); // This is for online storage
    // https://www.youtube.com/watch?v=5e7k8T8D4Lo
    // This is for user login
    // https://www.youtube.com/watch?v=Q8zcieAWn3g
    // This is for user information handling
    // This is for user folder


    var Tab2Page =
    /*#__PURE__*/
    function () {
      function Tab2Page(navCtrl, alertCtrl, afAuth, user, router, afstore) {
        var _this = this;

        _classCallCheck(this, Tab2Page);

        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.user = user;
        this.router = router;
        this.afstore = afstore;
        this.items = [];
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("items/"); // Username

        this.username = ""; // Password

        this.inputPassword = ""; // LogIn/Sign Up card

        this.isHidden = false; // User Information

        this.showInfo = true;
        this.ref.on("value", function (resp) {
          _this.items = Object(_app_environment__WEBPACK_IMPORTED_MODULE_3__["snapshotToArray"])(resp);
        });
      } // This method below is for adding users to the database


      _createClass(Tab2Page, [{
        key: "addUser",
        value: function addUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var username, inputPassword, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    username = this.username, inputPassword = this.inputPassword;
                    _context.prev = 1;
                    _context.next = 4;
                    return this.afAuth.auth.createUserWithEmailAndPassword(username + '@fitness.com', inputPassword);

                  case 4:
                    res = _context.sent;
                    // Creating a document and assigning value username
                    this.afstore.doc('user/${res.user.uid}').set({
                      username: username
                    }); // Adding this user to the user.service https://youtu.be/W5GD6gwYC18?t=412

                    if (res.user) {
                      this.user.setUser({
                        username: username,
                        uid: res.user.uid
                      });
                    }

                    console.log(res);
                    this.showAlert("Welcome", "Thank you for signing up!"); // This should take the user to a diffrent page to config profile

                    this.router.navigate(['/tabs']);
                    _context.next = 16;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](1);
                    // Throws error
                    this.showAlert("Error", _context.t0.message);
                    console.dir(_context.t0);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 12]]);
          }));
        } // Basic method that shows popup alertbox

      }, {
        key: "showAlert",
        value: function showAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: header,
                      message: message,
                      buttons: ["Confirm"]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Method to allow the user to logIn 

      }, {
        key: "logIn",
        value: function logIn() {
          var _this2 = this;

          var username = this.username,
              inputPassword = this.inputPassword; // Long way of creating alertbox
          // Please use other method

          var alert = document.createElement("ion-alert");
          alert.header = "Login";
          alert.inputs = [{
            name: "username",
            id: "username",
            type: "email",
            placeholder: "Email/Username"
          }, {
            name: "password",
            id: "password",
            type: "password",
            placeholder: "Password"
          }];
          alert.buttons = [{
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: function handler() {
              console.log("Confirm Cancel");
            }
          }, {
            text: "Ok",
            // This is for handling data 
            handler: function handler(data) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3() {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return this.afAuth.auth.signInWithEmailAndPassword(data.username + '@fitness.com', data.password);

                      case 3:
                        res = _context3.sent;
                        this.showAlert("Welcome", "Are you ready to start your workout?"); // This hides the register card

                        this.isHidden = true; // This shows user information (you can do this on different page if you want)

                        this.showInfo = false; // Setting service

                        if (res.user) {
                          this.user.setUser({
                            username: username,
                            uid: res.user.uid
                          }); // Use this to bring user to homepage

                          this.router.navigate(['/tabs']);
                        }

                        _context3.next = 14;
                        break;

                      case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3["catch"](0);
                        // Shows error if user make a mistake
                        this.showAlert("Error", _context3.t0.message);
                        console.dir(_context3.t0);

                      case 14:
                        console.log("Confirm Ok");

                      case 15:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[0, 10]]);
              }));
            }
          }];
          document.body.appendChild(alert);
          return alert.present();
        } // Method for the user logging out have not fully done this yet. So far basic 

      }, {
        key: "logOut",
        value: function logOut() {
          // Hiding the user info
          this.showInfo = true; // Showing the logIn and sign up

          this.isHidden = false;
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab2",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map