import {Component, OnInit}      from 'angular2/core';
import {InputText}              from 'primeng/primeng';
import {SplitButton}            from 'primeng/primeng';
import {SplitButtonItem}        from 'primeng/primeng';
import {PieChart}               from 'primeng/primeng';
import {MultiSelect}            from 'primeng/primeng';
import {SelectItem}             from 'primeng/primeng';
import {Growl}                  from 'primeng/primeng';
import {Message}                from 'primeng/primeng';
import {Calendar}               from 'primeng/primeng';
import {Chart}                  from 'primeng/primeng';
import {RadarChart}             from 'primeng/primeng';

@Component({
    selector: 'app',
    templateUrl: BASE_URL + '/templates/app.template.html',
    directives: [InputText, SplitButton, SplitButtonItem, PieChart, MultiSelect, RadarChart, Growl, Calendar]
})

export class AppComponent {
    public titulo: string;
    public data: any[];
    cities: SelectItem[];
    selectedCity: string[];
    dateValue: string = "";
    public data2: any;
    constructor() {
        this.msgs = [];

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
        }



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

        this.titulo = "Angular 2 Prime NG"
    }

    public ngOnInit() {
    }

    msgs: Message[] = [];

    showInfo() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showError() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showMultiple() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    }

    clear() {
        this.msgs = [];
    }

    onSelect(event) {
        if (event.points) {
            this.msgs = [];
            for (var i = 0; i < event.points.length; i++) {
                this.msgs.push({ severity: 'info', summary: 'Point Selected', 'detail': event.points[i].label + ' ' + event.points[i].value });
            }

        }
    }
}