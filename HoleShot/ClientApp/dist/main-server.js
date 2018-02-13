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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu_NavMenu__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_Header__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SideBar_SideBar__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(25);
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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Header_Header__["a" /* Header */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu_NavMenu__["a" /* NavMenu */], null),
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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "content" }, this.props.children)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__SideBar_SideBar__["a" /* SideBar */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* Footer */], null));
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

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
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

var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("footer", { className: "main-footer" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-right hidden-xs" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "Version"),
                " 2.4.0"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null,
                "Copyright \u00A9 2014-2016 ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://adminlte.io" }, "Almsaeed Studio"),
                "."),
            " All rights reserved."));
    };
    return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
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

var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "main-header" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "index2.html", className: "logo" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "logo-mini" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "H"),
                    "St"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "logo-lg" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "Hole"),
                    "Shot")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "navbar navbar-static-top" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "sidebar-toggle", "data-toggle": "push-menu", role: "button" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "Toggle navigation")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "navbar-custom-menu" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "nav navbar-nav" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "dropdown messages-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-envelope-o" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-success" }, "4")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "dropdown-menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "header" }, "You have 4 messages"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" })),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null,
                                                    "Support Team",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-clock-o" }),
                                                        " 5 mins")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Why not buy a new awesome theme?"))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image" })),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null,
                                                    "AdminLTE Design Team",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-clock-o" }),
                                                        " 2 hours")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Why not buy a new awesome theme?"))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image" })),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null,
                                                    "Developers",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-clock-o" }),
                                                        " Today")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Why not buy a new awesome theme?"))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image" })),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null,
                                                    "Sales Department",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-clock-o" }),
                                                        " Yesterday")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Why not buy a new awesome theme?"))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image" })),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null,
                                                    "Reviewers",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-clock-o" }),
                                                        " 2 days")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Why not buy a new awesome theme?"))))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "footer" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "See All Messages")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "dropdown notifications-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-bell-o" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-warning" }, "10")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "dropdown-menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "header" }, "You have 10 notifications"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-users text-aqua" }),
                                                " 5 new members joined today")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-warning text-yellow" }),
                                                " Very long description here that may not fit into the page and may cause design problems")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-users text-red" }),
                                                " 5 new members joined")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-shopping-cart text-green" }),
                                                " 25 sales made")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-user text-red" }),
                                                " You changed your username")))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "footer" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "View all")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "dropdown tasks-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-flag-o" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-danger" }, "9")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "dropdown-menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "header" }, "You have 9 tasks"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                                    "Design some buttons",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "pull-right" }, "20%")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress xs" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-aqua", style: { width: '20%' }, role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "20% Complete"))))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                                    "Create a nice theme",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "pull-right" }, "40%")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress xs" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-green", style: { width: '40%' }, role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "40% Complete"))))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                                    "Some task I need to do",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "pull-right" }, "60%")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress xs" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-red", style: { width: '60%' }, role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "60% Complete"))))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                                    "Make beautiful transitions",
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: "pull-right" }, "80%")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress xs" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-yellow", style: { width: '80%' }, role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "80% Complete"))))))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "footer" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "View all tasks")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "dropdown user user-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user2-160x160.jpg", className: "user-image", alt: "User Image" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "hidden-xs" }, "Alexander Pierce")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "dropdown-menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "user-header" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                                        "Alexander Pierce - Web Developer",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null, "Member since Nov. 2012"))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "user-body" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-xs-4 text-center" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Followers")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-xs-4 text-center" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Sales")),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-xs-4 text-center" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Friends")))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "user-footer" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-left" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "btn btn-default btn-flat" }, "Profile")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "pull-right" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "btn btn-default btn-flat" }, "Sign out"))))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", "data-toggle": "control-sidebar" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-gears" }))))))));
    };
    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPanel__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchForm__ = __webpack_require__(32);
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBar; });
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

var SideBar = (function (_super) {
    __extends(SideBar, _super);
    function SideBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideBar.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("aside", { className: "control-sidebar control-sidebar-dark" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "nav nav-tabs nav-justified control-sidebar-tabs" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#control-sidebar-home-tab", "data-toggle": "tab" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-home" }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#control-sidebar-settings-tab", "data-toggle": "tab" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-gears" })))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tab-content" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tab-pane", id: "control-sidebar-home-tab" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "control-sidebar-heading" }, "Recent Activity"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "control-sidebar-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "menu-icon fa fa-birthday-cake bg-red" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-info" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" }, "Langdon's Birthday"),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Will be 23 on April 24th")))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "menu-icon fa fa-user bg-yellow" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-info" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" }, "Frodo Updated His Profile"),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "New phone +1(800)555-1234")))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "menu-icon fa fa-envelope-o bg-light-blue" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-info" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" }, "Nora Joined Mailing List"),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "nora@example.com")))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "menu-icon fa fa-file-code-o bg-green" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-info" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" }, "Cron Job 254 Executed"),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Execution time 5 seconds"))))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "control-sidebar-heading" }, "Tasks Progress"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "control-sidebar-menu" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" },
                                        "Custom Template Design",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-danger pull-right" }, "70%")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress progress-xxs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-danger", style: { width: '70%' } })))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" },
                                        "Update Resume",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-success pull-right" }, "95%")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress progress-xxs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-success", style: { width: '95%' } })))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" },
                                        "Laravel Integration",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-warning pull-right" }, "50%")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress progress-xxs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-warning", style: { width: '50%' } })))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "control-sidebar-subheading" },
                                        "Back End Framework",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "label label-primary pull-right" }, "68%")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress progress-xxs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "progress-bar progress-bar-primary", style: { width: '68%' } })))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tab-pane", id: "control-sidebar-stats-tab" }, "Stats Tab Content"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tab-pane", id: "control-sidebar-settings-tab" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { method: "post" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "control-sidebar-heading" }, "General Settings"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Report panel usage",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", className: "pull-right", checked: true })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Some information about this general settings option")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Allow mail redirect",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", className: "pull-right", checked: true })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Other sets of options are available")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Expose author name in posts",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", className: "pull-right", checked: true })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Allow the user to show his name in blog posts")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "control-sidebar-heading" }, "Chat Settings"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Show me as online",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", className: "pull-right", checked: true }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Turn off notifications",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", className: "pull-right" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-sidebar-subheading" },
                                    "Delete chat history",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:void(0)", className: "text-red pull-right" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-trash-o" })))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "control-sidebar-bg" })));
    };
    return SideBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjU4MDdmZDdhYWI3NzVjMGIyZTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0L05hdk1lbnUvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0L05hdk1lbnUvU2VhcmNoRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0L05hdk1lbnUvVXNlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvU2lk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Q0FDTjs0QkFHTiw4REFBSyxTQUFTLEVBQUMsWUFBWTtnQ0FDdkIsZ0VBQU8sU0FBUyxFQUFDLDRCQUE0Qjs7b0NBRTdDLDREQUFHLElBQUksRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMscUJBQXFCO3dDQUFDLDREQUFHLFNBQVMsRUFBQyxlQUFlLEdBQUssQ0FBSSxDQUMxRixDQUNOLENBRUMsQ0FDTCxDQUVBLENBRUY7WUFDUiw4REFBSyxTQUFTLEVBQUMsb0JBQW9CLEdBQU8sQ0FDcEMsQ0FDVDtJQUNELENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQXhNNEIsZ0RBQWUsR0F3TTNDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNTgwN2ZkN2FhYjc3NWMwYjJlOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEluY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfVxyXG5pbnRlcmZhY2UgRGVjcmVtZW50Q291bnRBY3Rpb24geyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gSW5jcmVtZW50Q291bnRBY3Rpb24gfCBEZWNyZW1lbnRDb3VudEFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBpbmNyZW1lbnQ6ICgpID0+IDxJbmNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH0sXHJcbiAgICBkZWNyZW1lbnQ6ICgpID0+IDxEZWNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENvdW50ZXJTdGF0ZT4gPSAoc3RhdGU6IENvdW50ZXJTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lOQ1JFTUVOVF9DT1VOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfTtcclxuICAgICAgICBjYXNlICdERUNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSAxIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCB7IGNvdW50OiAwIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9Db3VudGVyLnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3RzU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgc3RhcnREYXRlSW5kZXg/OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XHJcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc7XHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZVdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnO1xyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB8IFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzOiAoc3RhcnREYXRlSW5kZXg6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGBhcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzP3N0YXJ0RGF0ZUluZGV4PSR7IHN0YXJ0RGF0ZUluZGV4IH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8V2VhdGhlckZvcmVjYXN0W10+KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCwgZm9yZWNhc3RzOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgPSB7IGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uID0gaW5jb21pbmdBY3Rpb24gYXMgS25vd25BY3Rpb247XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxMYXlvdXQ+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXsgSG9tZSB9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2NvdW50ZXInIGNvbXBvbmVudD17IENvdW50ZXIgfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9mZXRjaGRhdGEvOnN0YXJ0RGF0ZUluZGV4PycgY29tcG9uZW50PXsgRmV0Y2hEYXRhIH0gLz5cclxuPC9MYXlvdXQ+O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZSh1cmxBZnRlckJhc2VuYW1lKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXsgYmFzZW5hbWUgfSBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50ZXInO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxudHlwZSBDb3VudGVyUHJvcHMgPVxyXG4gICAgQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb3VudGVyUHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q291bnRlcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57IHRoaXMucHJvcHMuY291bnQgfTwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9IH0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKSBhcyB0eXBlb2YgQ291bnRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Db3VudGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0YXRlIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG50eXBlIFdlYXRoZXJGb3JlY2FzdFByb3BzID1cclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGUgICAgICAgIC8vIC4uLiBzdGF0ZSB3ZSd2ZSByZXF1ZXN0ZWQgZnJvbSB0aGUgUmVkdXggc3RvcmVcclxuICAgICYgdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7IHN0YXJ0RGF0ZUluZGV4OiBzdHJpbmcgfT47IC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVyc1xyXG5cclxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdlYXRoZXJGb3JlY2FzdFByb3BzLCB7fT4ge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdlYXRoZXJGb3JlY2FzdFByb3BzKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIGluY29taW5nIHByb3BzIChlLmcuLCByb3V0ZSBwYXJhbXMpIGNoYW5nZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KG5leHRQcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHdvcmtpbmcgd2l0aCBVUkwgcGFyYW1ldGVycy48L3A+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb3JlY2FzdHNUYWJsZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlclBhZ2luYXRpb24oKSB9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRm9yZWNhc3RzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcmVjYXN0cy5tYXAoZm9yZWNhc3QgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnN1bW1hcnkgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBsZXQgcHJldlN0YXJ0RGF0ZUluZGV4ID0gKHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggfHwgMCkgLSA1O1xyXG4gICAgICAgIGxldCBuZXh0U3RhcnREYXRlSW5kZXggPSAodGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCB8fCAwKSArIDU7XHJcblxyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NsZWFyZml4IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IHByZXZTdGFydERhdGVJbmRleCB9YCB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFtdIH1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKSBhcyB0eXBlb2YgRmV0Y2hEYXRhO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJz5SZWFjdDwvYT4sIDxhIGhyZWY9J2h0dHA6Ly9yZWR1eC5qcy5vcmcnPlJlZHV4PC9hPiwgYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCByZWJ1aWx0IFJlYWN0IGNvbXBvbmVudHMgd2lsbCBiZSBpbmplY3RlZCBkaXJlY3RseSBpbnRvIHlvdXIgcnVubmluZyBhcHBsaWNhdGlvbiwgcHJlc2VydmluZyBpdHMgbGl2ZSBzdGF0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBUbyBvcHRpbWl6ZSBzdGFydHVwIHRpbWUsIHlvdXIgUmVhY3QgYXBwbGljYXRpb24gaXMgZmlyc3QgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGluaXRpYWwgSFRNTCBhbmQgc3RhdGUgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3Nlciwgd2hlcmUgY2xpZW50LXNpZGUgY29kZSBwaWNrcyB1cCB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi9OYXZNZW51L05hdk1lbnUnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgeyBTaWRlQmFyIH0gZnJvbSAnLi9TaWRlQmFyL1NpZGVCYXInO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbGFuayBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+aXQgYWxsIHN0YXJ0cyBoZXJlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiPjwvaT4gSG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RXhhbXBsZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5CbGFuayBwYWdlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4vV2VhdGhlckZvcmVjYXN0cyc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXIgZnJvbSAnLi9Db3VudGVyJztcclxuXHJcbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBjb3VudGVyOiBDb3VudGVyLkNvdW50ZXJTdGF0ZTtcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMuV2VhdGhlckZvcmVjYXN0c1N0YXRlO1xyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGNvdW50ZXI6IENvdW50ZXIucmVkdWNlcixcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWFpbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IGhpZGRlbi14c1wiPlxyXG4gICAgICAgICAgICAgIDxiPlZlcnNpb248L2I+IDIuNC4wXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nPkNvcHlyaWdodCAmY29weTsgMjAxNC0yMDE2IDxhIGhyZWY9XCJodHRwczovL2FkbWlubHRlLmlvXCI+QWxtc2FlZWQgU3R1ZGlvPC9hPi48L3N0cm9uZz4gQWxsIHJpZ2h0c1xyXG4gICAgICAgICAgICByZXNlcnZlZC5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICAgIHsvKiBMb2dvICAqL31cclxuICAgICAgICA8YSBocmVmPVwiaW5kZXgyLmh0bWxcIiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIHsvKiAgIG1pbmkgbG9nbyBmb3Igc2lkZWJhciBtaW5pIDUweDUwIHBpeGVscyAqL31cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1taW5pXCI+PGI+SDwvYj5TdDwvc3Bhbj5cclxuICAgICAgICAgICB7LyogIGxvZ28gZm9yIHJlZ3VsYXIgc3RhdGUgYW5kIG1vYmlsZSBkZXZpY2VzICovfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWxnXCI+PGI+SG9sZTwvYj5TaG90PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7LyogIEhlYWRlciBOYXZiYXI6IHN0eWxlIGNhbiBiZSBmb3VuZCBpbiBoZWFkZXIubGVzcyAqL31cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItc3RhdGljLXRvcFwiPlxyXG4gICAgICAgIHsvKiAgU2lkZWJhciB0b2dnbGUgYnV0dG9uICovfVxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZWJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cInB1c2gtbWVudVwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY3VzdG9tLW1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIHsvKiAgTWVzc2FnZXM6IHN0eWxlIGNhbiBiZSBmb3VuZCBpbiBkcm9wZG93bi5sZXNzICovfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gbWVzc2FnZXMtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlclwiPllvdSBoYXZlIDQgbWVzc2FnZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgaW5uZXIgbWVudTogY29udGFpbnMgdGhlIGFjdHVhbCBkYXRhICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnsvKiAgc3RhcnQgbWVzc2FnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzdC9pbWcvdXNlcjItMTYweDE2MC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiVXNlciBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXBwb3J0IFRlYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9jay1vXCI+PC9pPiA1IG1pbnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgbm90IGJ1eSBhIG5ldyBhd2Vzb21lIHRoZW1lPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICBlbmQgbWVzc2FnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvaW1nL3VzZXIzLTEyOHgxMjguanBnXCIgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiIGFsdD1cIlVzZXIgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRtaW5MVEUgRGVzaWduIFRlYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9jay1vXCI+PC9pPiAyIGhvdXJzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IG5vdCBidXkgYSBuZXcgYXdlc29tZSB0aGVtZT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzdC9pbWcvdXNlcjQtMTI4eDEyOC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiVXNlciBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvY2stb1wiPjwvaT4gVG9kYXk8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgbm90IGJ1eSBhIG5ldyBhd2Vzb21lIHRoZW1lPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2ltZy91c2VyMy0xMjh4MTI4LmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJVc2VyIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhbGVzIERlcGFydG1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9jay1vXCI+PC9pPiBZZXN0ZXJkYXk8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgbm90IGJ1eSBhIG5ldyBhd2Vzb21lIHRoZW1lPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2ltZy91c2VyNC0xMjh4MTI4LmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJVc2VyIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldmlld2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb2NrLW9cIj48L2k+IDIgZGF5czwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBub3QgYnV5IGEgbmV3IGF3ZXNvbWUgdGhlbWU/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJcIj48YSBocmVmPVwiI1wiPlNlZSBBbGwgTWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIHsvKiAgTm90aWZpY2F0aW9uczogc3R5bGUgY2FuIGJlIGZvdW5kIGluIGRyb3Bkb3duLmxlc3MgKi99XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biBub3RpZmljYXRpb25zLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmVsbC1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtd2FybmluZ1wiPjEwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJcIj5Zb3UgaGF2ZSAxMCBub3RpZmljYXRpb25zPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogIGlubmVyIG1lbnU6IGNvbnRhaW5zIHRoZSBhY3R1YWwgZGF0YSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlcnMgdGV4dC1hcXVhXCI+PC9pPiA1IG5ldyBtZW1iZXJzIGpvaW5lZCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdhcm5pbmcgdGV4dC15ZWxsb3dcIj48L2k+IFZlcnkgbG9uZyBkZXNjcmlwdGlvbiBoZXJlIHRoYXQgbWF5IG5vdCBmaXQgaW50byB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSBhbmQgbWF5IGNhdXNlIGRlc2lnbiBwcm9ibGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJzIHRleHQtcmVkXCI+PC9pPiA1IG5ldyBtZW1iZXJzIGpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnQgdGV4dC1ncmVlblwiPjwvaT4gMjUgc2FsZXMgbWFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXIgdGV4dC1yZWRcIj48L2k+IFlvdSBjaGFuZ2VkIHlvdXIgdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PGEgaHJlZj1cIiNcIj5WaWV3IGFsbDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgey8qICBUYXNrczogc3R5bGUgY2FuIGJlIGZvdW5kIGluIGRyb3Bkb3duLmxlc3MgKi99XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biB0YXNrcy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZsYWctb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLWRhbmdlclwiPjk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlclwiPllvdSBoYXZlIDkgdGFza3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgaW5uZXIgbWVudTogY29udGFpbnMgdGhlIGFjdHVhbCBkYXRhICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnsvKiAgVGFzayBpdGVtICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ24gc29tZSBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjIwJTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgeHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1hcXVhXCIgc3R5bGU9e3t3aWR0aDogJzIwJSd9fSByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9XCIyMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjIwJSBDb21wbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICBlbmQgdGFzayBpdGVtICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57LyogIFRhc2sgaXRlbSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmljZSB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj40MCU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItZ3JlZW5cIiBzdHlsZT17e3dpZHRoOiAnNDAlJ319IHJvbGU9XCJwcm9ncmVzc2JhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+NDAlIENvbXBsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogIGVuZCB0YXNrIGl0ZW0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnsvKiAgVGFzayBpdGVtICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHRhc2sgSSBuZWVkIHRvIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjYwJTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgeHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1yZWRcIiBzdHlsZT17e3dpZHRoOiAnNjAlJ319IHJvbGU9XCJwcm9ncmVzc2JhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+NjAlIENvbXBsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogIGVuZCB0YXNrIGl0ZW0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnsvKiAgVGFzayBpdGVtICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIGJlYXV0aWZ1bCB0cmFuc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj44MCU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXIteWVsbG93XCIgc3R5bGU9e3t3aWR0aDogJzgwJSd9fSByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9XCIyMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjgwJSBDb21wbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICBlbmQgdGFzayBpdGVtICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmlldyBhbGwgdGFza3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgey8qICBVc2VyIEFjY291bnQ6IHN0eWxlIGNhbiBiZSBmb3VuZCBpbiBkcm9wZG93bi5sZXNzICovfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gdXNlciB1c2VyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2ltZy91c2VyMi0xNjB4MTYwLmpwZ1wiIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIiBhbHQ9XCJVc2VyIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi14c1wiPkFsZXhhbmRlciBQaWVyY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgey8qICBVc2VyIGltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVzZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2ltZy91c2VyMi0xNjB4MTYwLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJVc2VyIEltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWxleGFuZGVyIFBpZXJjZSAtIFdlYiBEZXZlbG9wZXJcclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+TWVtYmVyIHNpbmNlIE5vdi4gMjAxMjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiAgTWVudSBCb2R5ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVzZXItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZvbGxvd2VyczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2FsZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZyaWVuZHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICAvLnJvdyAqL31cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogIE1lbnUgKi99XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidXNlci1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1mbGF0XCI+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tZmxhdFwiPlNpZ24gb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIHsvKiAgQ29udHJvbCBTaWRlYmFyIFRvZ2dsZSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb250cm9sLXNpZGViYXJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nZWFyc1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyUGFuZWwgZnJvbSAnLi9Vc2VyUGFuZWwnXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vU2VhcmNoRm9ybSdcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1haW4tc2lkZWJhclwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgIDxVc2VyUGFuZWwvPlxyXG4gICAgICAgICAgIDxTZWFyY2hGb3JtLz5cclxuXHJcbiAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbWVudVwiIGRhdGEtd2lkZ2V0PVwidHJlZVwiPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlclwiPk1BSU4gTkFWSUdBVElPTjwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlIHRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCI+PC9pPiA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRGFzaGJvYXJkIHYxPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJpbmRleDIuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBEYXNoYm9hcmQgdjI8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwidHJlZXZpZXdcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlcy1vXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuPkxheW91dCBPcHRpb25zPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1wcmltYXJ5IHB1bGwtcmlnaHRcIj40PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvbGF5b3V0L3RvcC1uYXYuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBUb3AgTmF2aWdhdGlvbjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvbGF5b3V0L2JveGVkLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQm94ZWQ8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2xheW91dC9maXhlZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEZpeGVkPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9sYXlvdXQvY29sbGFwc2VkLXNpZGViYXIuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBDb2xsYXBzZWQgU2lkZWJhcjwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPGEgaHJlZj1cInBhZ2VzL3dpZGdldHMuaHRtbFwiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoXCI+PC9pPiA8c3Bhbj5XaWRnZXRzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibGFiZWwgcHVsbC1yaWdodCBiZy1ncmVlblwiPm5ldzwvc21hbGw+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGllLWNoYXJ0XCI+PC9pPlxyXG4gICAgICAgIDxzcGFuPkNoYXJ0czwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvY2hhcnRzL2NoYXJ0anMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBDaGFydEpTPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9jaGFydHMvbW9ycmlzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTW9ycmlzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9jaGFydHMvZmxvdC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEZsb3Q8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2NoYXJ0cy9pbmxpbmUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBJbmxpbmUgY2hhcnRzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGFwdG9wXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuPlVJIEVsZW1lbnRzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9VSS9nZW5lcmFsLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gR2VuZXJhbDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvaWNvbnMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBJY29uczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvYnV0dG9ucy5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEJ1dHRvbnM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL1VJL3NsaWRlcnMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBTbGlkZXJzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9VSS90aW1lbGluZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFRpbWVsaW5lPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9VSS9tb2RhbHMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBNb2RhbHM8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwidHJlZXZpZXdcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCI+PC9pPiA8c3Bhbj5Gb3Jtczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZm9ybXMvZ2VuZXJhbC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEdlbmVyYWwgRWxlbWVudHM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2Zvcm1zL2FkdmFuY2VkLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQWR2YW5jZWQgRWxlbWVudHM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2Zvcm1zL2VkaXRvcnMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBFZGl0b3JzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFibGVcIj48L2k+IDxzcGFuPlRhYmxlczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvdGFibGVzL3NpbXBsZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFNpbXBsZSB0YWJsZXM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL3RhYmxlcy9kYXRhLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRGF0YSB0YWJsZXM8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxhIGhyZWY9XCJwYWdlcy9jYWxlbmRhci5odG1sXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IDxzcGFuPkNhbGVuZGFyPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibGFiZWwgcHVsbC1yaWdodCBiZy1yZWRcIj4zPC9zbWFsbD5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJsYWJlbCBwdWxsLXJpZ2h0IGJnLWJsdWVcIj4xNzwvc21hbGw+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YSBocmVmPVwicGFnZXMvbWFpbGJveC9tYWlsYm94Lmh0bWxcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiPjwvaT4gPHNwYW4+TWFpbGJveDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmcteWVsbG93XCI+MTI8L3NtYWxsPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctZ3JlZW5cIj4xNjwvc21hbGw+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibGFiZWwgcHVsbC1yaWdodCBiZy1yZWRcIj41PC9zbWFsbD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwidHJlZXZpZXdcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mb2xkZXJcIj48L2k+IDxzcGFuPkV4YW1wbGVzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9pbnZvaWNlLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gSW52b2ljZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvcHJvZmlsZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFByb2ZpbGU8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL2xvZ2luLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTG9naW48L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL3JlZ2lzdGVyLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gUmVnaXN0ZXI8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL2xvY2tzY3JlZW4uaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMb2Nrc2NyZWVuPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy80MDQuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiA0MDQgRXJyb3I8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzLzUwMC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IDUwMCBFcnJvcjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvYmxhbmsuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBCbGFuayBQYWdlPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9wYWNlLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gUGFjZSBQYWdlPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hhcmVcIj48L2k+IDxzcGFuPk11bHRpbGV2ZWw8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgT25lPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMZXZlbCBPbmVcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMZXZlbCBUd288L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVHdvXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVGhyZWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMZXZlbCBUaHJlZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIE9uZTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9hZG1pbmx0ZS5pby9kb2NzXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiPjwvaT4gPHNwYW4+RG9jdW1lbnRhdGlvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJcIj5MQUJFTFM8L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW8gdGV4dC1yZWRcIj48L2k+IDxzcGFuPkltcG9ydGFudDwvc3Bhbj48L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIHRleHQteWVsbG93XCI+PC9pPiA8c3Bhbj5XYXJuaW5nPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW8gdGV4dC1hcXVhXCI+PC9pPiA8c3Bhbj5JbmZvcm1hdGlvbjwvc3Bhbj48L2E+PC9saT5cclxuICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9OYXZNZW51L05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3NOYW1lPVwic2lkZWJhci1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2gtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1mbGF0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9OYXZNZW51L1NlYXJjaEZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFVzZXJQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvaW1nL3VzZXIyLTE2MHgxNjAuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiIGFsdD1cIlVzZXIgSW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IGluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BbGV4YW5kZXIgUGllcmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT4gT25saW5lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclBhbmVsXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9OYXZNZW51L1VzZXJQYW5lbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyIGNvbnRyb2wtc2lkZWJhci1kYXJrXCI+XHJcbiAgICAgICAgICAgIHsvKiBDcmVhdGUgdGhlIHRhYnMgKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWp1c3RpZmllZCBjb250cm9sLXNpZGViYXItdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udHJvbC1zaWRlYmFyLWhvbWUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250cm9sLXNpZGViYXItc2V0dGluZ3MtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nZWFyc1wiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgey8qIFRhYiBwYW5lcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICB7LyogSG9tZSB0YWIgY29udGVudCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZVwiIGlkPVwiY29udHJvbC1zaWRlYmFyLWhvbWUtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLWhlYWRpbmdcIj5SZWNlbnQgQWN0aXZpdHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRyb2wtc2lkZWJhci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1lbnUtaWNvbiBmYSBmYS1iaXJ0aGRheS1jYWtlIGJnLXJlZFwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nXCI+TGFuZ2RvbidzIEJpcnRoZGF5PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldpbGwgYmUgMjMgb24gQXByaWwgMjR0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZW51LWljb24gZmEgZmEtdXNlciBiZy15ZWxsb3dcIj48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXItc3ViaGVhZGluZ1wiPkZyb2RvIFVwZGF0ZWQgSGlzIFByb2ZpbGU8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmV3IHBob25lICsxKDgwMCk1NTUtMTIzNDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZW51LWljb24gZmEgZmEtZW52ZWxvcGUtbyBiZy1saWdodC1ibHVlXCI+PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5Ob3JhIEpvaW5lZCBNYWlsaW5nIExpc3Q8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+bm9yYUBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZW51LWljb24gZmEgZmEtZmlsZS1jb2RlLW8gYmctZ3JlZW5cIj48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXItc3ViaGVhZGluZ1wiPkNyb24gSm9iIDI1NCBFeGVjdXRlZDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FeGVjdXRpb24gdGltZSA1IHNlY29uZHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICB7LyogLy5jb250cm9sLXNpZGViYXItbWVudSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLWhlYWRpbmdcIj5UYXNrcyBQcm9ncmVzczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbSBUZW1wbGF0ZSBEZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtZGFuZ2VyIHB1bGwtcmlnaHRcIj43MCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBwcm9ncmVzcy14eHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLWRhbmdlclwiIHN0eWxlPXt7d2lkdGg6ICc3MCUnfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBSZXN1bWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtc3VjY2VzcyBwdWxsLXJpZ2h0XCI+OTUlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MteHhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdWNjZXNzXCIgc3R5bGU9e3t3aWR0aDogJzk1JSd9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFyYXZlbCBJbnRlZ3JhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC13YXJuaW5nIHB1bGwtcmlnaHRcIj41MCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBwcm9ncmVzcy14eHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXdhcm5pbmdcIiBzdHlsZT17e3dpZHRoOiAnNTAlJ319PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXItc3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrIEVuZCBGcmFtZXdvcmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtcHJpbWFyeSBwdWxsLXJpZ2h0XCI+NjglPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MteHhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1wcmltYXJ5XCIgc3R5bGU9e3t3aWR0aDogJzY4JSd9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIHsvKiAvLmNvbnRyb2wtc2lkZWJhci1tZW51ICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiAvLnRhYi1wYW5lICovfVxyXG4gICAgICAgICAgICB7LyogU3RhdHMgdGFiIGNvbnRlbnQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cImNvbnRyb2wtc2lkZWJhci1zdGF0cy10YWJcIj5TdGF0cyBUYWIgQ29udGVudDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogLy50YWItcGFuZSAqL31cclxuICAgICAgICAgICAgey8qIFNldHRpbmdzIHRhYiBjb250ZW50ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJjb250cm9sLXNpZGViYXItc2V0dGluZ3MtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLWhlYWRpbmdcIj5HZW5lcmFsIFNldHRpbmdzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZXBvcnQgcGFuZWwgdXNhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBnZW5lcmFsIHNldHRpbmdzIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC8uZm9ybS1ncm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbGxvdyBtYWlsIHJlZGlyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBjaGVja2VkLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBPdGhlciBzZXRzIG9mIG9wdGlvbnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC8uZm9ybS1ncm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBFeHBvc2UgYXV0aG9yIG5hbWUgaW4gcG9zdHNcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEFsbG93IHRoZSB1c2VyIHRvIHNob3cgaGlzIG5hbWUgaW4gYmxvZyBwb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC8uZm9ybS1ncm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLWhlYWRpbmdcIj5DaGF0IFNldHRpbmdzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBTaG93IG1lIGFzIG9ubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgY2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC8uZm9ybS1ncm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBUdXJuIG9mZiBub3RpZmljYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC8uZm9ybS1ncm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgY2hhdCBoaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT1cInRleHQtcmVkIHB1bGwtcmlnaHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogLy5mb3JtLWdyb3VwICovfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIC8udGFiLXBhbmUgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1zaWRlYmFyLWJnXCI+PC9kaXY+ICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9TaWRlQmFyL1NpZGVCYXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==