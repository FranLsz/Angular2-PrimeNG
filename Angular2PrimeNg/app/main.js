"use strict";
var app_component_1 = require('./components/app.component');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
browser_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
