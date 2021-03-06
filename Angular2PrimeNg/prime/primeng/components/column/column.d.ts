import { TemplateRef } from 'angular2/core';
export declare class Column {
    field: string;
    header: string;
    footer: string;
    sortable: boolean;
    editable: boolean;
    filter: boolean;
    filterMatchMode: string;
    rowspan: number;
    colspan: number;
    style: string;
    styleClass: string;
    template: TemplateRef;
}
