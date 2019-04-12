import { Component, Input } from "@angular/core";
import { FormGroupService } from './services/form-group.service';

@Component ({
    selector: 'invalid-counter',
    template: `
    <label>Счётчик неудачных попыток заполнения формы: {{formGroupService.invalidCounter}} </label>
    `
})
export class InvalidCounter{

    constructor(private formGroupService: FormGroupService){ }

}