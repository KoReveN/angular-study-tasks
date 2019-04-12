import { Component, Input } from "@angular/core";
import { FormGroupService, FormValidationFields } from './services/form-group.service';

@Component ({
    selector: 'invalid-counter',
    template: `
    <label>Счётчик неудачных попыток заполнения формы: {{formInvelidCount}} </label>
    `
})
export class InvalidCounter{

    private subscription: any;
    public formInvelidCount: number = 0;

    constructor(private formGroupService: FormGroupService){ 
        this.subscription = this.formGroupService.getSubmitEmiter()
        .subscribe((f) => this.onFormSubmit(f));
    }

    public onFormSubmit(formValidationFields: FormValidationFields) {
        if (!formValidationFields.isFormValid) {
            this.formInvelidCount++;
        }
    }


}