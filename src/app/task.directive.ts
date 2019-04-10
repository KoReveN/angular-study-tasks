import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({ 
    selector: '[mouseOverEvent]' ,

})
export class TaskDirective {

    @Output() 
    public onHover = new EventEmitter<boolean>();

    @Output() 
    public onHoverOut = new EventEmitter<boolean>();

    @HostListener("mouseenter") 
    public onMouseEnter() {
        this.onHover.emit();
    }

    @HostListener("mouseleave") 
    public onMouseLeave() {
        this.onHoverOut.emit();
    }

}
