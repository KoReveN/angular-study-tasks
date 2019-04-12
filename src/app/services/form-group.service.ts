import { FormGroup } from '@angular/forms';
import { Output, EventEmitter} from '@angular/core';
import { FormValidationFields } from '../models/form-validation-fileds.model';




export class FormGroupService {

    constructor(){}

    private onSubmit: EventEmitter<FormValidationFields> = new EventEmitter();

    public formSubmit(form: FormGroup): void {
        var formValidationFields: FormValidationFields = new FormValidationFields() ;
 
        formValidationFields.isFormValid = form.valid;

        for(var key in form.controls){
            form.controls[key].valid 
            ? formValidationFields.fieldsValid.push(key)
            : formValidationFields.fieldsInvalid.push(key)
        }

        this.onSubmit.emit(formValidationFields);
    }

    public getSubmitEmiter(): any{
        return this.onSubmit;
    }
}