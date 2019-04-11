import { Component } from "@angular/core";
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'form-validation-task',
    styles: [`
        input.submited.ng-invalid {border:solid red 2px;}
        input.submited.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'form-validation-task.component.html'
}) 
export class FormValidationTask{

    public isSubmit: boolean = false;
    public userForm: FormGroup;


    constructor(private formBuilder: FormBuilder){
        this.userForm = formBuilder.group({
           "firstName": ["", [Validators.required, Validators.pattern("[A-Za-zА-Яа-яЁё]{3,20}")]],
           "lastName" : ["",[Validators.required, Validators.pattern("[A-Za-zА-Яа-яЁё]{3,20}")]],
           "age": ["",[Validators.required, Validators.min(18), Validators.max(120)]],
           "email": ["",[Validators.required, Validators.email, this.emailCustomValidator]],
        });
    }

    public submit(){
        this.isSubmit = true;
        console.log(this.userForm);
    }

    emailCustomValidator(control: FormControl): {[s:string]:boolean}{
        if (control.value.includes("mail.ru")){
            return {"email": true};
        } 
        return null;
    }
}


// Создай форму со следующими полями:
// 3) Age. От 18 до 120
// 4) Email. Должна быть валидная почта, кроме mail.ru, он запрещён
// Все поля обязательны, использовать валидаторы. Выводить соответствующие сообщения о неправильно 
// введённых данных. Валидация проходит при первом подтверждении формы. После первого подтверждения 
// валидация происходит при вводе каждого символа