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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(19);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(18);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_Layout__ = __webpack_require__(16);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayoutNavMenu_NavMenu__ = __webpack_require__(17);
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
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'container-fluid' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__LayoutNavMenu_NavMenu__["a" /* NavMenu */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-9' }, this.props.children)));
    };
    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPanel__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchForm__ = __webpack_require__(23);
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(135);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(143);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(70);

/***/ }),
/* 22 */
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
/* 23 */
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


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzRmMzA3ODc2MDE5MjdiOWZkNWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dE5hdk1lbnUvVXNlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L1NlYXJjaEZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LENBZHdCLGdEQUFlLEdBY3ZDO0FBRUQseURBQWUsVUFBVSIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzRmMzA3ODc2MDE5MjdiOWZkNWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuXHJcbmludGVyZmFjZSBJbmNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH1cclxuaW50ZXJmYWNlIERlY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0RFQ1JFTUVOVF9DT1VOVCcgfVxyXG5cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxudHlwZSBLbm93bkFjdGlvbiA9IEluY3JlbWVudENvdW50QWN0aW9uIHwgRGVjcmVtZW50Q291bnRBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgaW5jcmVtZW50OiAoKSA9PiA8SW5jcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnSU5DUkVNRU5UX0NPVU5UJyB9LFxyXG4gICAgZGVjcmVtZW50OiAoKSA9PiA8RGVjcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDb3VudGVyU3RhdGU+ID0gKHN0YXRlOiBDb3VudGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH07XHJcbiAgICAgICAgY2FzZSAnREVDUkVNRU5UX0NPVU5UJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBjb3VudDogMCB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0c1N0YXRlIHtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIHN0YXJ0RGF0ZUluZGV4PzogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnO1xyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJztcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24gfCBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0V2VhdGhlckZvcmVjYXN0czogKHN0YXJ0RGF0ZUluZGV4OiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgbG9hZCBkYXRhIGlmIGl0J3Mgc29tZXRoaW5nIHdlIGRvbid0IGFscmVhZHkgaGF2ZSAoYW5kIGFyZSBub3QgYWxyZWFkeSBsb2FkaW5nKVxyXG4gICAgICAgIGlmIChzdGFydERhdGVJbmRleCAhPT0gZ2V0U3RhdGUoKS53ZWF0aGVyRm9yZWNhc3RzLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cz9zdGFydERhdGVJbmRleD0keyBzdGFydERhdGVJbmRleCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFdlYXRoZXJGb3JlY2FzdFtdPilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXgsIGZvcmVjYXN0czogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogV2VhdGhlckZvcmVjYXN0c1N0YXRlID0geyBmb3JlY2FzdHM6IFtdLCBpc0xvYWRpbmc6IGZhbHNlIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxXZWF0aGVyRm9yZWNhc3RzU3RhdGU+ID0gKHN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUsIGluY29taW5nQWN0aW9uOiBBY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0czogc3RhdGUuZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG91dC1vZi1vcmRlciByZXNwb25zZXMuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhcnREYXRlSW5kZXggPT09IHN0YXRlLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBhY3Rpb24uZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzLnRzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmVNb2R1bGUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGhpc3Rvcnk6IEhpc3RvcnksIGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXHJcbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IDxTPihuZXh0OiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFM+KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnM6IFJlZHVjZXJzTWFwT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY29tcG9uZW50cy9Db3VudGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSA8TGF5b3V0PlxyXG4gICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17IEhvbWUgfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnQ9eyBDb3VudGVyIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvZmV0Y2hkYXRhLzpzdGFydERhdGVJbmRleD8nIGNvbXBvbmVudD17IEZldGNoRGF0YSB9IC8+XHJcbjwvTGF5b3V0PjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkxcclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXHJcbiAgICAgICAgY29uc3QgdXJsQWZ0ZXJCYXNlbmFtZSA9IHBhcmFtcy51cmwuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShjcmVhdGVNZW1vcnlIaXN0b3J5KCkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGxhY2UodXJsQWZ0ZXJCYXNlbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17IGJhc2VuYW1lIH0gY29udGV4dD17IHJvdXRlckNvbnRleHQgfSBsb2NhdGlvbj17IHBhcmFtcy5sb2NhdGlvbi5wYXRoIH0gY2hpbGRyZW49eyByb3V0ZXMgfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbnR5cGUgQ291bnRlclByb3BzID1cclxuICAgIENvdW50ZXJTdG9yZS5Db3VudGVyU3RhdGVcclxuICAgICYgdHlwZW9mIENvdW50ZXJTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q291bnRlclByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNvdW50ZXI8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGEgUmVhY3QgY29tcG9uZW50LjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+eyB0aGlzLnByb3BzLmNvdW50IH08L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMucHJvcHMuaW5jcmVtZW50KCkgfSB9PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoQ291bnRlcikgYXMgdHlwZW9mIENvdW50ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbi8vIEF0IHJ1bnRpbWUsIFJlZHV4IHdpbGwgbWVyZ2UgdG9nZXRoZXIuLi5cclxudHlwZSBXZWF0aGVyRm9yZWNhc3RQcm9wcyA9XHJcbiAgICBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuV2VhdGhlckZvcmVjYXN0c1N0YXRlICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAmIHR5cGVvZiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAvLyAuLi4gcGx1cyBhY3Rpb24gY3JlYXRvcnMgd2UndmUgcmVxdWVzdGVkXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBzdGFydERhdGVJbmRleDogc3RyaW5nIH0+OyAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnNcclxuXHJcbmNsYXNzIEZldGNoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXZWF0aGVyRm9yZWNhc3RQcm9wcywge30+IHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBhZGRlZCB0byB0aGUgcGFnZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBXZWF0aGVyRm9yZWNhc3RQcm9wcykge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiBpbmNvbWluZyBwcm9wcyAoZS5nLiwgcm91dGUgcGFyYW1zKSBjaGFuZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludChuZXh0UHJvcHMubWF0Y2gucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCB3b3JraW5nIHdpdGggVVJMIHBhcmFtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9yZWNhc3RzVGFibGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCkgfVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckZvcmVjYXN0c1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JlY2FzdHMubWFwKGZvcmVjYXN0ID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5zdW1tYXJ5IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHByZXZTdGFydERhdGVJbmRleCA9ICh0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4IHx8IDApIC0gNTtcclxuICAgICAgICBsZXQgbmV4dFN0YXJ0RGF0ZUluZGV4ID0gKHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggfHwgMCkgKyA1O1xyXG5cclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjbGVhcmZpeCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdCcgdG89eyBgL2ZldGNoZGF0YS8keyBwcmV2U3RhcnREYXRlSW5kZXggfWAgfT5QcmV2aW91czwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodCcgdG89eyBgL2ZldGNoZGF0YS8keyBuZXh0U3RhcnREYXRlSW5kZXggfWAgfT5OZXh0PC9MaW5rPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNMb2FkaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBbXSB9XHJcbiAgICAgICAgPC9wPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUud2VhdGhlckZvcmVjYXN0cywgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4pKEZldGNoRGF0YSkgYXMgdHlwZW9mIEZldGNoRGF0YTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgICAgICAgPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0Lyc+UmVhY3Q8L2E+LCA8YSBocmVmPSdodHRwOi8vcmVkdXguanMub3JnJz5SZWR1eDwvYT4sIGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgcmVidWlsdCBSZWFjdCBjb21wb25lbnRzIHdpbGwgYmUgaW5qZWN0ZWQgZGlyZWN0bHkgaW50byB5b3VyIHJ1bm5pbmcgYXBwbGljYXRpb24sIHByZXNlcnZpbmcgaXRzIGxpdmUgc3RhdGUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gVG8gb3B0aW1pemUgc3RhcnR1cCB0aW1lLCB5b3VyIFJlYWN0IGFwcGxpY2F0aW9uIGlzIGZpcnN0IHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSBpbml0aWFsIEhUTUwgYW5kIHN0YXRlIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIsIHdoZXJlIGNsaWVudC1zaWRlIGNvZGUgcGlja3MgdXAgd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZi48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4uL0xheW91dE5hdk1lbnUvTmF2TWVudSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVXNlclBhbmVsIGZyb20gJy4vVXNlclBhbmVsJ1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL1NlYXJjaEZvcm0nXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtYWluLXNpZGViYXJcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICA8VXNlclBhbmVsLz5cclxuICAgICAgICAgICA8U2VhcmNoRm9ybS8+XHJcblxyXG4gIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLW1lbnVcIiBkYXRhLXdpZGdldD1cInRyZWVcIj5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJcIj5NQUlOIE5BVklHQVRJT048L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZSB0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiPjwvaT4gPHNwYW4+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCJpbmRleC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IERhc2hib2FyZCB2MTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXgyLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRGFzaGJvYXJkIHYyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT5cclxuICAgICAgICA8c3Bhbj5MYXlvdXQgT3B0aW9uczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtcHJpbWFyeSBwdWxsLXJpZ2h0XCI+NDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2xheW91dC90b3AtbmF2Lmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gVG9wIE5hdmlnYXRpb248L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2xheW91dC9ib3hlZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEJveGVkPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9sYXlvdXQvZml4ZWQuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBGaXhlZDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvbGF5b3V0L2NvbGxhcHNlZC1zaWRlYmFyLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQ29sbGFwc2VkIFNpZGViYXI8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxhIGhyZWY9XCJwYWdlcy93aWRnZXRzLmh0bWxcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aFwiPjwvaT4gPHNwYW4+V2lkZ2V0czwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctZ3JlZW5cIj5uZXc8L3NtYWxsPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpZS1jaGFydFwiPjwvaT5cclxuICAgICAgICA8c3Bhbj5DaGFydHM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2NoYXJ0cy9jaGFydGpzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQ2hhcnRKUzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvY2hhcnRzL21vcnJpcy5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IE1vcnJpczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvY2hhcnRzL2Zsb3QuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBGbG90PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9jaGFydHMvaW5saW5lLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gSW5saW5lIGNoYXJ0czwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhcHRvcFwiPjwvaT5cclxuICAgICAgICA8c3Bhbj5VSSBFbGVtZW50czwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvZ2VuZXJhbC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEdlbmVyYWw8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL1VJL2ljb25zLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gSWNvbnM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL1VJL2J1dHRvbnMuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBCdXR0b25zPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9VSS9zbGlkZXJzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gU2xpZGVyczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvdGltZWxpbmUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBUaW1lbGluZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvVUkvbW9kYWxzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTW9kYWxzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiPjwvaT4gPHNwYW4+Rm9ybXM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2Zvcm1zL2dlbmVyYWwuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBHZW5lcmFsIEVsZW1lbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9mb3Jtcy9hZHZhbmNlZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEFkdmFuY2VkIEVsZW1lbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9mb3Jtcy9lZGl0b3JzLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gRWRpdG9yczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhYmxlXCI+PC9pPiA8c3Bhbj5UYWJsZXM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHVsbC1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL3RhYmxlcy9zaW1wbGUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBTaW1wbGUgdGFibGVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy90YWJsZXMvZGF0YS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IERhdGEgdGFibGVzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YSBocmVmPVwicGFnZXMvY2FsZW5kYXIuaHRtbFwiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiA8c3Bhbj5DYWxlbmRhcjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctcmVkXCI+Mzwvc21hbGw+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibGFiZWwgcHVsbC1yaWdodCBiZy1ibHVlXCI+MTc8L3NtYWxsPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPGEgaHJlZj1cInBhZ2VzL21haWxib3gvbWFpbGJveC5odG1sXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIj48L2k+IDxzcGFuPk1haWxib3g8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJsYWJlbCBwdWxsLXJpZ2h0IGJnLXllbGxvd1wiPjEyPC9zbWFsbD5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJsYWJlbCBwdWxsLXJpZ2h0IGJnLWdyZWVuXCI+MTY8L3NtYWxsPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxhYmVsIHB1bGwtcmlnaHQgYmctcmVkXCI+NTwvc21hbGw+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInRyZWV2aWV3XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZm9sZGVyXCI+PC9pPiA8c3Bhbj5FeGFtcGxlczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvaW52b2ljZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IEludm9pY2U8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL3Byb2ZpbGUuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBQcm9maWxlPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9sb2dpbi5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExvZ2luPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9yZWdpc3Rlci5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFJlZ2lzdGVyPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy9sb2Nrc2NyZWVuLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTG9ja3NjcmVlbjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvNDA0Lmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gNDA0IEVycm9yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJwYWdlcy9leGFtcGxlcy81MDAuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiA1MDAgRXJyb3I8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cInBhZ2VzL2V4YW1wbGVzL2JsYW5rLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gQmxhbmsgUGFnZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwicGFnZXMvZXhhbXBsZXMvcGFjZS5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IFBhY2UgUGFnZTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNoYXJlXCI+PC9pPiA8c3Bhbj5NdWx0aWxldmVsPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHB1bGwtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVldmlldy1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIE9uZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgT25lXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVHdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIFR3b1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlZXZpZXctbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+IExldmVsIFRocmVlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT4gTGV2ZWwgVGhyZWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vXCI+PC9pPiBMZXZlbCBPbmU8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYWRtaW5sdGUuaW8vZG9jc1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJvb2tcIj48L2k+IDxzcGFuPkRvY3VtZW50YXRpb248L3NwYW4+PC9hPjwvbGk+XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyXCI+TEFCRUxTPC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIHRleHQtcmVkXCI+PC9pPiA8c3Bhbj5JbXBvcnRhbnQ8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyB0ZXh0LXllbGxvd1wiPjwvaT4gPHNwYW4+V2FybmluZzwvc3Bhbj48L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIHRleHQtYXF1YVwiPjwvaT4gPHNwYW4+SW5mb3JtYXRpb248L3NwYW4+PC9hPjwvbGk+XHJcbiAgPC91bD5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgY291bnRlcjogQ291bnRlci5Db3VudGVyU3RhdGU7XHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLldlYXRoZXJGb3JlY2FzdHNTdGF0ZTtcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBjb3VudGVyOiBDb3VudGVyLnJlZHVjZXIsXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDcwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIFVzZXJQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IGltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzdC9pbWcvdXNlcjItMTYweDE2MC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiVXNlciBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsZXhhbmRlciBQaWVyY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT4gT25saW5lPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQYW5lbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0TmF2TWVudS9Vc2VyUGFuZWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3NOYW1lPVwic2lkZWJhci1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInNlYXJjaFwiIGlkPVwic2VhcmNoLWJ0blwiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxhdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXROYXZNZW51L1NlYXJjaEZvcm0udHN4Il0sInNvdXJjZVJvb3QiOiIifQ==