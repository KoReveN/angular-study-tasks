import { Component } from "@angular/core";

@Component({
    selector: 'task-component',
    template: `
    Task: 1 <br/>

    <div mouseOverEvent 
    (onHover)="onHover()" 
    (onHoverOut)="onHoverOut()" 
     > Mouse over this element </div>
    <p>{{isMouseOver ? 'Курсор мышки внутри элемента' : 'Курсор мышки вне элемента'}}</p>


    <br/> Task: 2_ 
    <div clickOutside (onClickOutside)="onClickOutside()" >
        Click outside this element
        <p>Outside click count: {{count}}</p>
    </div>
    
    `
})
export class TaskComponent{

    private isMouseOver = false;
    private count: number = 0;

    public onHover(){
        this.isMouseOver = true;
    }

    public onHoverOut(){
        this.isMouseOver = false;
    }

    public onClickOutside(){
        this.count++;
    }

}
