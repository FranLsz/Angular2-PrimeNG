import { ElementRef, OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, Renderer, EventEmitter, TemplateRef, IterableDiffers } from 'angular2/core';
import { SelectItem } from '../api/selectitem';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from 'angular2/common';
export declare class Dropdown implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, ControlValueAccessor {
    private el;
    private domHandler;
    private renderer;
    options: SelectItem[];
    onChange: EventEmitter<any>;
    scrollHeight: string;
    filter: boolean;
    style: string;
    styleClass: string;
    disabled: boolean;
    autoWidth: boolean;
    itemTemplate: TemplateRef;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, differs: IterableDiffers);
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    optionsToDisplay: SelectItem[];
    label: string;
    hover: boolean;
    focus: boolean;
    differ: any;
    private panelVisible;
    private documentClickListener;
    private optionsChanged;
    private panel;
    private container;
    private itemsWrapper;
    private initialized;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    updateLabel(): void;
    highlightValue(fallbackToFirst?: boolean): void;
    updateDimensions(): void;
    onMouseenter(event: any): void;
    onMouseleave(event: any): void;
    onMouseclick(event: any, input: any): void;
    show(panel: any, container: any): void;
    hide(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeydown(event: any): void;
    findListItem(element: any): any;
    onListMouseover(event: any): void;
    onListMouseout(event: any): void;
    onListClick(event: any): void;
    selectItem(event: any, item: any): void;
    findItemIndex(val: any, opts: SelectItem[]): number;
    onFilter(event: any): void;
    ngOnDestroy(): void;
}
