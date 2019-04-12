import { Component, Input } from "@angular/core";

@Component({
    selector: 'form-validation-report',  
    template: `
    <label>{{listHeader}}</label>
    <ul>
    <li *ngFor="let item of validationReports">{{item}}</li>
    </ul>
    `, 
}) 
export class FormValidationReport {

    @Input()
    listHeader: string

    @Input()
    validationReports: string[]

}