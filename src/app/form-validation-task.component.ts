import { Component } from "@angular/core";
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from "./validators/email-validator";
import { FormGroupService } from './services/form-group.service';

@Component({
    selector: 'form-validation-task',
    styles: [`
    .submited input.ng-invalid {border:solid red 2px;}
    .submited input.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'form-validation-task.component.html',

}) 
export class FormValidationTask{

    public isSubmit: boolean = false;
    public userForm: FormGroup;




    constructor(private formBuilder: FormBuilder, 
        private emailValidator: EmailValidator,
        private formGroupService: FormGroupService){ }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            "firstName": ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Za-zА-Яа-яЁё]+")]],
            "lastName" : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Za-zА-Яа-яЁё]+")]],
            "age": ["",[Validators.required, Validators.min(18), Validators.max(120)]],
            "email": ["",[Validators.required, Validators.email, this.emailValidator.blockMailRu]],
         });
    }

    public submit(){
        this.isSubmit = true;
        console.log(this.userForm);

        this.formGroupService.formSubmit(this.userForm);
        if (this.userForm.valid) {
            // Some other work
        } 
    }

    get firstName() { return this.userForm.get('firstName');}
    get lastName() { return this.userForm.get('lastName');}
    get age() { return this.userForm.get('age');}
    get email() { return this.userForm.get('email');}



}