import { Directive, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";

@Directive({ selector: '[clickOutside]'})
export class ClickOutsideDirective{

    constructor(private _elementRef: ElementRef) { }

    @Output()
    public onClickOutside = new EventEmitter<any>();


    @HostListener('document:click', ['$event']) 
    public onMouseClick(event) {
        if (!this._elementRef.nativeElement.contains(event.target))
        this.onClickOutside.emit();
    }

}