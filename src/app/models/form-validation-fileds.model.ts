export class FormValidationFields {
    public isFormValid: boolean;
    public fieldsValid: string[];
    public fieldsInvalid: string[];

    constructor(){
        this.fieldsValid = [];
        this.fieldsInvalid = [];
    }
}