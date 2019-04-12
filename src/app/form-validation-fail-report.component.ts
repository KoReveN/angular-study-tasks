import { Component, Input, Output } from "@angular/core";
import { FormGroupService } from './services/form-group.service';
import { FormValidationFields } from './models/form-validation-fileds.model';

@Component({
    selector: 'form-validation-fail-report',  
    template: `
    <label>Validation fail:</label>
    <ul>
    <li *ngFor="let item of validationReports">{{item}}</li>
    </ul>
    `, 
}) 
export class FormValidationFailReport {

    private subscription: any;
    private validationReports: string[] = []; 

    constructor(private formGroupService: FormGroupService){  }

    ngOnInit(): void {
        this.subscription = this.formGroupService.getSubmitEmiter()
        .subscribe((q) => this.onFormSubmit(q));
    }


     public onFormSubmit(formValidationFields: FormValidationFields) {
        if (!formValidationFields.isFormValid) {
            var newReportString: string = "Invalid fields: ";

            formValidationFields.fieldsInvalid.forEach(fieldName => {
                newReportString += "  " + fieldName;
            });
            this.validationReports.push(newReportString);
        }
    }


}