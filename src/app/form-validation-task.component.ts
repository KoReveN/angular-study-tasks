import { Component } from "@angular/core";
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from "./validators/email-validator";

@Component({
    selector: 'form-validation-task',
    styles: [`
    .submited input.ng-invalid {border:solid red 2px;}
    .submited input.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'form-validation-task.component.html',
    providers: [ EmailValidator ]
}) 
export class FormValidationTask{

    public isSubmit: boolean = false;
    public userForm: FormGroup;


    constructor(private formBuilder: FormBuilder, private emailValidator: EmailValidator){
        this.userForm = formBuilder.group({
           "firstName": ["", [Validators.required, Validators.pattern("[A-Za-zА-Яа-яЁё]{3,20}")]],
           "lastName" : ["",[Validators.required, Validators.pattern("[A-Za-zА-Яа-яЁё]{3,20}")]],
           "age": ["",[Validators.required, Validators.min(18), Validators.max(120)]],
           "email": ["",[Validators.required, Validators.email, this.emailValidator.blockMailRu]],
        });
    }

    public submit(){
        this.isSubmit = true;
        console.log(this.userForm);

        if (this.userForm.valid) {
            // DO some work
        }
    }
}