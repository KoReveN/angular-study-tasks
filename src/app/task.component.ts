import { Component } from "@angular/core";

@Component({
    selector: 'task-component',
    template: `
    Task: 1 <br/>

    <div mouseOverEvent 
    (onHover)="onHover()" 
    (onHoverOut)="onHoverOut()" 
     > Some element </div>
    <p>{{isMouseOver ? 'Курсор мышки внутри элемента' : 'Курсор мышки вне элемента'}}</p>

    `
})
export class TaskComponent{

    private isMouseOver = false;

    public onHover(){
        this.isMouseOver = true;
    }

    public onHoverOut(){
        this.isMouseOver = false;
    }

}
