webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row\">\n    <h1 style=\"margin:0px auto;background-color: aliceblue;padding: 10px;\nborder-radius: 7px;\">Welcome To Meal Tracker</h1>\n  </div>\n  <hr style=\"border-top: 2px solid rgb(31, 207, 108);\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h2 class=\"text-center\" style=\"font-family: 'Fredoka One', cursive;\">\n        Add Meal\n      </h2>\n      <small style=\"color: red; font-weight: bolder;margin-left: 14%;\">\n        {{ warning }}\n      </small>\n      <input type=\"text\" placeholder=\"Meal Name\" class=\"form-control\" #newMealname>\n      <br>\n      <input type=\"text\" placeholder=\"Details\" class=\"form-control\" #newDetails>\n      <br>\n      <input type=\"number\" placeholder=\"Number of Calories\" class=\"form-control\" #newCalories>\n      <br>\n      <button class=\"btn btn-success\" (click)=\"AddnewMeal( newMealname.value, newDetails.value, newCalories.value);\n\t\t\t\tnewMealname.value='';\n\t\t\t\tnewDetails.value='';\n\t\t\t\tnewCalories.value='';\n\t\t\t \">\n        Add Meal</button>\n\n    </div>\n    <div class=\"col-md-8\" style=\"background-color: #ede;\">\n\n      <div #firsttemp class=\"well\" style=\"margin: 10px; background-color: aliceblue;padding: 20px;\" *ngFor=\" let meal of meals; let i=index; \">\n        <table style=\" margin: 0px auto; width: 100%; \">\n          <tr>\n            <td colspan=\"2\" style=\"width: 20%; text-align: left;\">\n              <strong>Meal </strong>\n            </td>\n            <td style=\"padding-left: 20px;\">: {{ meal.name }} </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"width: 20%; text-align: left;\">\n              <strong>Description </strong>\n            </td>\n            <td style=\"padding-left: 20px;\"> :{{ meal.description }}\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"width: 20%; text-align: left;\">\n              <strong>Calories </strong>\n            </td>\n            <td style=\"padding-left: 20px;\"> :{{ meal.calorie }}</td>\n          </tr>\n          <tr>\n\n            <td></td>\n            <td>\n              <button class=\"btn btn-primary btn-sm\" (click)=\"\n\t\t\t\t\t\t\t\teditmeal(i);\n\t\t\t\t\t\t\t\t\">Edit</button>\n              <button class=\"btn btn-danger btn-sm\" (click)=\"delete(i);\">Delete</button>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div *ngIf=\"!menulist\" class=\"alert alert-danger text-center\" style=\"margin-top:14%; font-weight: bolder;\n\t\t\t\tfont-family: 'Cabin Sketch', cursive; font-size: 40px;\">\n        <p>There are no meals added!</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meals__ = __webpack_require__("../../../../../src/app/meals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.menulist = false;
        this.warning = "";
        this.meals = [];
        this.editm = "";
        this.editD = "";
    }
    AppComponent.prototype.AddnewMeal = function (MealName, desc, calories) {
        if (MealName != "" && desc != "" && calories > 0) {
            this.menulist = true;
            this.meals.push(new __WEBPACK_IMPORTED_MODULE_1__meals__["a" /* MealComponent */](MealName, desc, calories));
        }
        else {
            this.warning = "JEEZZ!! FILL IN ALL THE FORM INPUTS";
        }
    };
    AppComponent.prototype.delete = function (position) {
        console.log(position);
        this.meals.splice(position, 1);
    };
    AppComponent.prototype.editmeal = function (index) {
        this.editm = this.meals[index].name;
        this.editD = this.meals[index].description;
        this.editC = this.meals[index].calorie;
        console.log(this.meals[index]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

// AddnewMeal(){
// 	if(typeof this.newMealname =="undefined" 
// 		|| typeof this.newDetails =="undefined" || typeof this.newCalories =="undefined."){
// 		this.warning="JEEZZ!! FILL IN ALL THE FORM INPUTS";
// 	}else{
// 		this.menulist = true;
// 		   this.newMealCollection={
// 	   	  	name:this.newMealname,
// 	  		description:this.newDetails,
// 	  		calories:this.newCalories
// 	   };
// 		this.meals.push(this.newMealCollection);
// 	this.inputMealValue=null;
// 	this.inputDetailsValue=null;
// 	this.inputCaloriesValue=null;
// 	this.newMealCollection={};
// 	}


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/meals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealComponent; });
var MealComponent = (function () {
    function MealComponent(name, description, calorie) {
        this.name = name;
        this.description = description;
        this.calorie = calorie;
    }
    return MealComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map