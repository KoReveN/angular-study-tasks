import { FormGroup } from '@angular/forms';


export class FormGroupService {


    public reportsValid: string[] = [];
    public reportsInvalid: string[] = [];
    public invalidCounter: number =0;


    formSubmit(form: FormGroup): void {
        if (form.valid) {
            this.invalidCounter++;
            let reportString: string ="Valid fields: "; 
            for(var key in form.controls){
                if (form.controls[key].valid) {
                    reportString += "  " + key;
                }   
            }
            this.reportsValid.push(reportString);
        } else {
            this.invalidCounter++;
            let reportString: string ="Invalid fields: "; 
            for(var key in form.controls){
                if (form.controls[key].invalid) {
                    reportString += "  " + key;
                }   
            }
            this.reportsInvalid.push(reportString);
        }
    }
}