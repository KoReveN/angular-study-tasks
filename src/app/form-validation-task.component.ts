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

    public invalidCounter: number =0;


    constructor(private formBuilder: FormBuilder, private emailValidator: EmailValidator){ }

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

        if (this.userForm.valid) {
            this.invalidCounter++;
            let reportString: string ="Valid fields: "; 
            for(var key in this.userForm.controls){
                if (this.userForm.controls[key].valid) {
                    reportString += "  " + key;
                }   
            }
            this.reportsValid.push(reportString);
        } else {
            this.invalidCounter++;
            let reportString: string ="Invalid fields: "; 
            for(var key in this.userForm.controls){
                if (this.userForm.controls[key].invalid) {
                    reportString += "  " + key;
                }   
            }
            this.reportsInvalid.push(reportString);
        }
    }

    get firstName() { return this.userForm.get('firstName');}
    get lastName() { return this.userForm.get('lastName');}
    get age() { return this.userForm.get('age');}
    get email() { return this.userForm.get('email');}

    reportsValid: string[] = [];
    reportsInvalid: string[] = [];

}




// Сайт делится на 4 части:
// 1) [x] Форма, которую ты уже реализовал
// 2) [x] Счётчик неудачных попыток заполнения формы
// 3) История в виде списка, что форма была заполнена с N кол-вом невалидных полей. Перечислить эти поля
// 4) История в виде списка, что форма была заполнена верно. Показать все поля, которые были введены


// Постарайся найти гибкое решение. Например, если тебе придётся добавить ещё 1 компонент, 
// то не нужно будет менять существующую логику