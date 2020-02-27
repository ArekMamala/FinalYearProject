(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercises-exercises-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>exercises</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/exercises/exercises-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/exercises/exercises-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ExercisesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageRoutingModule", function() { return ExercisesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.page */ "./src/app/exercises/exercises.page.ts");




const routes = [
    {
        path: '',
        component: _exercises_page__WEBPACK_IMPORTED_MODULE_3__["ExercisesPage"]
    }
];
let ExercisesPageRoutingModule = class ExercisesPageRoutingModule {
};
ExercisesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExercisesPageRoutingModule);



/***/ }),

/***/ "./src/app/exercises/exercises.module.ts":
/*!***********************************************!*\
  !*** ./src/app/exercises/exercises.module.ts ***!
  \***********************************************/
/*! exports provided: ExercisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageModule", function() { return ExercisesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises-routing.module */ "./src/app/exercises/exercises-routing.module.ts");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises.page */ "./src/app/exercises/exercises.page.ts");







let ExercisesPageModule = class ExercisesPageModule {
};
ExercisesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisesPageRoutingModule"]
        ],
        declarations: [_exercises_page__WEBPACK_IMPORTED_MODULE_6__["ExercisesPage"]]
    })
], ExercisesPageModule);



/***/ }),

/***/ "./src/app/exercises/exercises.page.scss":
/*!***********************************************!*\
  !*** ./src/app/exercises/exercises.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaXNlcy9leGVyY2lzZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/exercises/exercises.page.ts":
/*!*********************************************!*\
  !*** ./src/app/exercises/exercises.page.ts ***!
  \*********************************************/
/*! exports provided: ExercisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPage", function() { return ExercisesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExercisesPage = class ExercisesPage {
    constructor() { }
    ngOnInit() {
    }
};
ExercisesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exercises',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises.page.scss */ "./src/app/exercises/exercises.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExercisesPage);



/***/ })

}]);
//# sourceMappingURL=exercises-exercises-module-es2015.js.map