(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(140);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(141);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(142);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    increment: function () { return ({ type: 'INCREMENT_COUNT' }); },
    decrement: function () { return ({ type: 'DECREMENT_COUNT' }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { count: 0 };
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    requestWeatherForecasts: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
            var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])("api/SampleData/WeatherForecasts?startDateIndex=" + startDateIndex)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { forecasts: [], isLoading: false };
var reducer = function (state, incomingAction) {
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(20);




function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_Layout__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FetchData__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Counter__ = __webpack_require__(13);






var routes = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout_Layout__["a" /* Layout */], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/counter', component: __WEBPACK_IMPORTED_MODULE_5__components_Counter__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/fetchdata/:startDateIndex?', component: __WEBPACK_IMPORTED_MODULE_4__components_FetchData__["a" /* default */] }));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(132);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(137);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(139);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(7);









/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(urlAfterBasename));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Counter__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Counter"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "This is a simple example of a React component."),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                "Current count: ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, this.props.count)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: function () { _this.props.increment(); } }, "Increment"));
    };
    return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
// Wire up the React component to the Redux store
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.counter; }, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_2__store_Counter__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(Counter));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FetchData = (function (_super) {
    __extends(FetchData, _super);
    function FetchData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchData.prototype.componentWillMount = function () {
        // This method runs when the component is first added to the page
        var startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    };
    FetchData.prototype.componentWillReceiveProps = function (nextProps) {
        // This method runs when incoming props (e.g., route params) change
        var startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    };
    FetchData.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Weather forecast"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "This component demonstrates fetching data from the server and working with URL parameters."),
            this.renderForecastsTable(),
            this.renderPagination());
    };
    FetchData.prototype.renderForecastsTable = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Date"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Temp. (C)"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Temp. (F)"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Summary"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.forecasts.map(function (forecast) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: forecast.dateFormatted },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, forecast.dateFormatted),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, forecast.temperatureC),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, forecast.temperatureF),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, forecast.summary));
            })));
    };
    FetchData.prototype.renderPagination = function () {
        var prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
        var nextStartDateIndex = (this.props.startDateIndex || 0) + 5;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: 'clearfix text-center' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: 'btn btn-default pull-left', to: "/fetchdata/" + prevStartDateIndex }, "Previous"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: 'btn btn-default pull-right', to: "/fetchdata/" + nextStartDateIndex }, "Next"),
            this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Loading...") : []);
    };
    return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) { return state.weatherForecasts; }, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(FetchData));


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, world!"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Welcome to your new single-page application, built with:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://get.asp.net/' }, "ASP.NET Core"),
                    " and ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, "C#"),
                    " for cross-platform server-side code"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://facebook.github.io/react/' }, "React"),
                    ", ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://redux.js.org' }, "Redux"),
                    ", and ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://www.typescriptlang.org/' }, "TypeScript"),
                    " for client-side code"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://webpack.github.io/' }, "Webpack"),
                    " for building and bundling client-side resources"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://getbootstrap.com/' }, "Bootstrap"),
                    " for layout and styling")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "To help you get started, we've also set up:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Client-side navigation"),
                    ". For example, click ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Counter"),
                    " then ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Back"),
                    " to return here."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Webpack dev middleware"),
                    ". In development mode, there's no need to run the ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, "webpack"),
                    " build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Hot module replacement"),
                    ". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Efficient production builds"),
                    ". In production mode, development-time features are disabled, and the ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, "webpack"),
                    " build tool produces minified static CSS and JavaScript files."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Server-side prerendering"),
                    ". To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.")));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPanel__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchForm__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NavMenu = (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("aside", { className: "main-sidebar" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "sidebar" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__UserPanel__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__SearchForm__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "sidebar-menu", "data-widget": "tree" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "header" }, "MAIN NAVIGATION"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-dashboard" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Dashboard"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "index.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Dashboard v1")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "index2.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Dashboard v2")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-files-o" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Layout Options"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-primary pull-right" }, "4"))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/layout/top-nav.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Top Navigation")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/layout/boxed.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Boxed")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/layout/fixed.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Fixed")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/layout/collapsed-sidebar.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Collapsed Sidebar")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/widgets.html" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-th" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Widgets"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-green" }, "new")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-pie-chart" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Charts"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/charts/chartjs.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " ChartJS")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/charts/morris.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Morris")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/charts/flot.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Flot")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/charts/inline.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Inline charts")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-laptop" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "UI Elements"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/general.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " General")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/icons.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Icons")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/buttons.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Buttons")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/sliders.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Sliders")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/timeline.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Timeline")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/UI/modals.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Modals")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-edit" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Forms"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/forms/general.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " General Elements")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/forms/advanced.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Advanced Elements")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/forms/editors.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Editors")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-table" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Tables"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/tables/simple.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Simple tables")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/tables/data.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Data tables")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/calendar.html" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-calendar" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Calendar"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-red" }, "3"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-blue" }, "17")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/mailbox/mailbox.html" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-envelope" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Mailbox"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-yellow" }, "12"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-green" }, "16"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "label pull-right bg-red" }, "5")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-folder" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Examples"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/invoice.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Invoice")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/profile.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Profile")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/login.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Login")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/register.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Register")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/lockscreen.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Lockscreen")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/404.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " 404 Error")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/500.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " 500 Error")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/blank.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Blank Page")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "pages/examples/pace.html" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Pace Page")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-share" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Multilevel"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Level One")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Level One",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                            " Level Two")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "treeview" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                            " Level Two",
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "pull-right-container" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-angle-left pull-right" }))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "treeview-menu" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                                    " Level Three")),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                                    " Level Three")))))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o" }),
                                    " Level One")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://adminlte.io/docs" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-book" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Documentation"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "header" }, "LABELS"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o text-red" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Important"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o text-yellow" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Warning"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle-o text-aqua" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Information")))))));
    };
    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SearchForm = (function (_super) {
    __extends(SearchForm, _super);
    function SearchForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchForm.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#", method: "get", className: "sidebar-form" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-group" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", name: "q", className: "form-control", placeholder: "Search..." }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "input-group-btn" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "submit", name: "search", id: "search-btn", className: "btn btn-flat" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-search" }))))));
    };
    return SearchForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (SearchForm);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserPanel = (function (_super) {
    __extends(UserPanel, _super);
    function UserPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserPanel.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "user-panel" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left image" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left info" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Alexander Pierce"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-circle text-success" }),
                    " Online"))));
    };
    return UserPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (UserPanel);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayoutNavMenu_NavMenu__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__LayoutNavMenu_NavMenu__["a" /* NavMenu */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "content-wrapper" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "content-header" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null,
                        "Blank page",
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null, "it all starts here")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ol", { className: "breadcrumb" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-dashboard" }),
                                " Home")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Examples")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active" }, "Blank page"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "content" }, this.props.children)));
    };
    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Counter__ = __webpack_require__(5);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    counter: __WEBPACK_IMPORTED_MODULE_1__Counter__["b" /* reducer */],
    weatherForecasts: __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__["b" /* reducer */]
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(135);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(143);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(70);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDEyODgwNzQ1ZDliMmU5YmJiMzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dE5hdk1lbnUvU2VhcmNoRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0TmF2TWVudS9Vc2VyUGFuZWwudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Q1Q7SUFDVCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0F6QjJCLGdEQUFlLEdBeUIxQzs7Ozs7Ozs7Ozs7O0FDNUJzRDtBQUNsQjtBQVFyQyxzR0FBc0c7QUFDdEcsd0dBQXdHO0FBQ3hHLDREQUE0RDtBQUNyRCxJQUFNLFFBQVEsR0FBRztJQUNwQixPQUFPLEVBQUUseURBQWU7SUFDeEIsZ0JBQWdCLEVBQUUsa0VBQXdCO0NBQzdDLENBQUM7Ozs7Ozs7QUNmRiwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MTI4ODA3NDVkOWIyZTliYmIzNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEluY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfVxyXG5pbnRlcmZhY2UgRGVjcmVtZW50Q291bnRBY3Rpb24geyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gSW5jcmVtZW50Q291bnRBY3Rpb24gfCBEZWNyZW1lbnRDb3VudEFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBpbmNyZW1lbnQ6ICgpID0+IDxJbmNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH0sXHJcbiAgICBkZWNyZW1lbnQ6ICgpID0+IDxEZWNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENvdW50ZXJTdGF0ZT4gPSAoc3RhdGU6IENvdW50ZXJTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lOQ1JFTUVOVF9DT1VOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfTtcclxuICAgICAgICBjYXNlICdERUNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSAxIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCB7IGNvdW50OiAwIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9Db3VudGVyLnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3RzU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgc3RhcnREYXRlSW5kZXg/OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XHJcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc7XHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZVdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnO1xyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB8IFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzOiAoc3RhcnREYXRlSW5kZXg6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGBhcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzP3N0YXJ0RGF0ZUluZGV4PSR7IHN0YXJ0RGF0ZUluZGV4IH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8V2VhdGhlckZvcmVjYXN0W10+KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCwgZm9yZWNhc3RzOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgPSB7IGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uID0gaW5jb21pbmdBY3Rpb24gYXMgS25vd25BY3Rpb247XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxMYXlvdXQ+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXsgSG9tZSB9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2NvdW50ZXInIGNvbXBvbmVudD17IENvdW50ZXIgfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9mZXRjaGRhdGEvOnN0YXJ0RGF0ZUluZGV4PycgY29tcG9uZW50PXsgRmV0Y2hEYXRhIH0gLz5cclxuPC9MYXlvdXQ+O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZSh1cmxBZnRlckJhc2VuYW1lKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXsgYmFzZW5hbWUgfSBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50ZXInO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxudHlwZSBDb3VudGVyUHJvcHMgPVxyXG4gICAgQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb3VudGVyUHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q291bnRlcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57IHRoaXMucHJvcHMuY291bnQgfTwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9IH0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKSBhcyB0eXBlb2YgQ291bnRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Db3VudGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0YXRlIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG50eXBlIFdlYXRoZXJGb3JlY2FzdFByb3BzID1cclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGUgICAgICAgIC8vIC4uLiBzdGF0ZSB3ZSd2ZSByZXF1ZXN0ZWQgZnJvbSB0aGUgUmVkdXggc3RvcmVcclxuICAgICYgdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7IHN0YXJ0RGF0ZUluZGV4OiBzdHJpbmcgfT47IC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVyc1xyXG5cclxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdlYXRoZXJGb3JlY2FzdFByb3BzLCB7fT4ge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdlYXRoZXJGb3JlY2FzdFByb3BzKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIGluY29taW5nIHByb3BzIChlLmcuLCByb3V0ZSBwYXJhbXMpIGNoYW5nZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KG5leHRQcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHdvcmtpbmcgd2l0aCBVUkwgcGFyYW1ldGVycy48L3A+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb3JlY2FzdHNUYWJsZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlclBhZ2luYXRpb24oKSB9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRm9yZWNhc3RzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcmVjYXN0cy5tYXAoZm9yZWNhc3QgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnN1bW1hcnkgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBsZXQgcHJldlN0YXJ0RGF0ZUluZGV4ID0gKHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggfHwgMCkgLSA1O1xyXG4gICAgICAgIGxldCBuZXh0U3RhcnREYXRlSW5kZXggPSAodGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCB8fCAwKSArIDU7XHJcblxyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NsZWFyZml4IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IHByZXZTdGFydERhdGVJbmRleCB9YCB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFtdIH1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKSBhcyB0eXBlb2YgRmV0Y2hEYXRhO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJz5SZWFjdDwvYT4sIDxhIGhyZWY9J2h0dHA6Ly9yZWR1eC5qcy5vcmcnPlJlZHV4PC9hPiwgYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCByZWJ1aWx0IFJlYWN0IGNvbXBvbmVudHMgd2lsbCBiZSBpbmplY3RlZCBkaXJlY3RseSBpbnRvIHlvdXIgcnVubmluZyBhcHBsaWNhdGlvbiwgcHJlc2VydmluZyBpdHMgbGl2ZSBzdGF0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBUbyBvcHRpbWl6ZSBzdGFydHVwIHRpbWUsIHlvdXIgUmVhY3QgYXBwbGljYXRpb24gaXMgZmlyc3QgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGluaXRpYWwgSFRNTCBhbmQgc3RhdGUgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3Nlciwgd2hlcmUgY2xpZW50LXNpZGUgY29kZSBwaWNrcyB1cCB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVXNlclBhbmVsIGZyb20gJy4vVXNlclBhbmVsJ1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL1NlYXJjaEZvcm0nXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtYWluLXNpZGViYXJcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICA8VXNlclBhbmVsLz5cclxuICAgICAgICAgICA8U2VhcmNoRm9ybS8+XHJcblxyXG4gIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLW1lbnVcIiBkYXRhLXdpZGdldD1cInRyZWVcIj5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJcIj5NQUlOIE5BVklHQVRJT048L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZSB0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiPjwvaT4gPHNwYW4+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCJpbmRleC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IERhc2hib2FyZCB2MTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXgyLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRGFzaGJvYXJkIHYyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT5cclxuICAgICAgICA8c3Bhbj5MYXlvdXQgT3B0aW9uczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtcHJpbWFyeSBwdWxsLXJpZ2h0XCI+NDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2xheW91dC90b3AtbmF2Lmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gVG9wIE5hdmlnYXRpb248L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2xheW91dC9ib3hlZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEJveGVkPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9sYXlvdXQvZml4ZWQuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBGaXhlZDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvbGF5b3V0L2NvbGxhcHNlZC1zaWRlYmFyLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQ29sbGFwc2VkIFNpZGViYXI8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxhIGhyZWY9XCJwYWdlcy93aWRnZXRzLmh0bWxcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aFwiPjwvaT4gPHNwYW4+V2lkZ2V0czwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctZ3JlZW5cIj5uZXc8L3NtYWxsPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpZS1jaGFydFwiPjwvaT5cclxuICAgICAgICA8c3Bhbj5DaGFydHM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2NoYXJ0cy9jaGFydGpzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQ2hhcnRKUzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvY2hhcnRzL21vcnJpcy5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IE1vcnJpczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvY2hhcnRzL2Zsb3QuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBGbG90PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9jaGFydHMvaW5saW5lLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gSW5saW5lIGNoYXJ0czwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhcHRvcFwiPjwvaT5cclxuICAgICAgICA8c3Bhbj5VSSBFbGVtZW50czwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvZ2VuZXJhbC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEdlbmVyYWw8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL1VJL2ljb25zLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gSWNvbnM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL1VJL2J1dHRvbnMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBCdXR0b25zPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9VSS9zbGlkZXJzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gU2xpZGVyczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvdGltZWxpbmUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBUaW1lbGluZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvbW9kYWxzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTW9kYWxzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiPjwvaT4gPHNwYW4+Rm9ybXM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2Zvcm1zL2dlbmVyYWwuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBHZW5lcmFsIEVsZW1lbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9mb3Jtcy9hZHZhbmNlZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEFkdmFuY2VkIEVsZW1lbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9mb3Jtcy9lZGl0b3JzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRWRpdG9yczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhYmxlXCI+PC9pPiA8c3Bhbj5UYWJsZXM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL3RhYmxlcy9zaW1wbGUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBTaW1wbGUgdGFibGVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy90YWJsZXMvZGF0YS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IERhdGEgdGFibGVzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YSBocmVmPVwicGFnZXMvY2FsZW5kYXIuaHRtbFwiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiA8c3Bhbj5DYWxlbmRhcjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctcmVkXCI+Mzwvc21hbGw+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibGFiZWwgcHVsbC1yaWdodCBiZy1ibHVlXCI+MTc8L3NtYWxsPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPGEgaHJlZj1cInBhZ2VzL21haWxib3gvbWFpbGJveC5odG1sXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIj48L2k+IDxzcGFuPk1haWxib3g8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJsYWJlbCBwdWxsLXJpZ2h0IGJnLXllbGxvd1wiPjEyPC9zbWFsbD5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJsYWJlbCBwdWxsLXJpZ2h0IGJnLWdyZWVuXCI+MTY8L3NtYWxsPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctcmVkXCI+NTwvc21hbGw+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZm9sZGVyXCI+PC9pPiA8c3Bhbj5FeGFtcGxlczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvaW52b2ljZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEludm9pY2U8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL3Byb2ZpbGUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBQcm9maWxlPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9sb2dpbi5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExvZ2luPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9yZWdpc3Rlci5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFJlZ2lzdGVyPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9sb2Nrc2NyZWVuLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTG9ja3NjcmVlbjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvNDA0Lmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gNDA0IEVycm9yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy81MDAuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiA1MDAgRXJyb3I8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL2JsYW5rLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQmxhbmsgUGFnZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvcGFjZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFBhY2UgUGFnZTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPiA8c3Bhbj5NdWx0aWxldmVsPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIE9uZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgT25lXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVHdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIFR3b1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIFRocmVlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVGhyZWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMZXZlbCBPbmU8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYWRtaW5sdGUuaW8vZG9jc1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJvb2tcIj48L2k+IDxzcGFuPkRvY3VtZW50YXRpb248L3NwYW4+PC9hPjwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyXCI+TEFCRUxTPC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIHRleHQtcmVkXCI+PC9pPiA8c3Bhbj5JbXBvcnRhbnQ8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyB0ZXh0LXllbGxvd1wiPjwvaT4gPHNwYW4+V2FybmluZzwvc3Bhbj48L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIHRleHQtYXF1YVwiPjwvaT4gPHNwYW4+SW5mb3JtYXRpb248L3NwYW4+PC9hPjwvbGk+XHJcbiAgPC91bD5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3NOYW1lPVwic2lkZWJhci1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2gtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1mbGF0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dE5hdk1lbnUvU2VhcmNoRm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgVXNlclBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdCBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzdC9pbWcvdXNlcjItMTYweDE2MC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiVXNlciBJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkFsZXhhbmRlciBQaWVyY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1zdWNjZXNzXCI+PC9pPiBPbmxpbmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFuZWxcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0TmF2TWVudS9Vc2VyUGFuZWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi4vTGF5b3V0TmF2TWVudS9OYXZNZW51JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsYW5rIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5pdCBhbGwgc3RhcnRzIGhlcmU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCI+PC9pPiBIb21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5FeGFtcGxlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkJsYW5rIHBhZ2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgY291bnRlcjogQ291bnRlci5Db3VudGVyU3RhdGU7XHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLldlYXRoZXJGb3JlY2FzdHNTdGF0ZTtcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBjb3VudGVyOiBDb3VudGVyLnJlZHVjZXIsXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==