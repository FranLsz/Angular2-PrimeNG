"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var primeng_10 = require('primeng/primeng');
var primeng_11 = require('primeng/primeng');
var primeng_12 = require('primeng/primeng');
var primeng_13 = require('primeng/primeng');
var primeng_14 = require('primeng/primeng');
var AppComponent = (function () {
    function AppComponent() {
        this.dateValue = "";
        this.display = false;
        this.selectedTypes = ['Apartment', 'Studio'];
        this.msgs = [];
        this.msgs = [];
        this.selectedType = "Apartment";
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.cities = [];
        this.cities.push({ label: 'New York', value: 'New York' });
        this.cities.push({ label: 'Rome', value: 'Rome' });
        this.cities.push({ label: 'London', value: 'London' });
        this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
        this.cities.push({ label: 'Paris', value: 'Paris' });
        this.data2 = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.data = [{
                value: 300,
                color: '#F7464A',
                highlight: '#FF5A5E',
                label: 'Red'
            },
            {
                value: 50,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'Green'
            },
            {
                value: 100,
                color: '#FDB45C',
                highlight: '#FFC870',
                label: 'Yellow'
            }];
        this.titulo = "Angular 2 Prime NG";
    }
    AppComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    AppComponent.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    AppComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    AppComponent.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    AppComponent.prototype.clear = function () {
        this.msgs = [];
    };
    AppComponent.prototype.onSelect = function (event) {
        if (event.points) {
            this.msgs = [];
            for (var i = 0; i < event.points.length; i++) {
                this.msgs.push({ severity: 'info', summary: 'Point Selected', 'detail': event.points[i].label + ' ' + event.points[i].value });
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: BASE_URL + '/templates/app.template.html',
            directives: [primeng_14.RadioButton, primeng_13.SelectButton, primeng_12.Dialog, primeng_11.Panel, primeng_10.ContextMenu, primeng_9.Button, primeng_1.InputText, primeng_2.SplitButton, primeng_3.SplitButtonItem, primeng_4.PieChart, primeng_5.MultiSelect, primeng_8.RadarChart, primeng_6.Growl, primeng_7.Calendar]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
