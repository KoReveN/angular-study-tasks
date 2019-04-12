import { Component, Input } from "@angular/core";
import { FormGroupService } from './services/form-group.service';

@Component({
    selector: 'form-validation-report',  
    template: `
    <label>{{IsValidReport ? 'Validation success:' : 'Validation fail:'}}</label>
    <ul>
    <li *ngFor="let item of validationReports">{{item}}</li>
    </ul>
    `, 
}) 
export class FormValidationReport {

    constructor(private formGroupService: FormGroupService){ }

    @Input()
    IsValidReport: boolean = false;

    validationReports: string[] 


    ngOnInit(): void {
        this.IsValidReport 
        ? this.validationReports = this.formGroupService.reportsValid
        : this.validationReports = this.formGroupService.reportsInvalid;
    }
}