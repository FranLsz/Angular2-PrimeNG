import { ElementRef, AfterViewInit, DoCheck, EventEmitter, IterableDiffers, TemplateRef } from 'angular2/core';
export declare class DataList implements AfterViewInit, DoCheck {
    private el;
    value: any[];
    paginator: boolean;
    rows: number;
    totalRecords: number;
    pageLinks: number;
    rowsPerPageOptions: number[];
    lazy: boolean;
    onLazyLoad: EventEmitter<any>;
    style: string;
    styleClass: string;
    header: any;
    footer: any;
    itemTemplate: TemplateRef;
    private dataToRender;
    private first;
    private page;
    differ: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    updatePaginator(): void;
    paginate(event: any): void;
    updateDataToRender(datasource: any): void;
    isEmpty(): boolean;
    createLazyLoadMetadata(): any;
}
