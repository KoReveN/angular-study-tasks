import { Component, Input } from "@angular/core";

@Component ({
    selector: 'invalid-counter',
    template: `
    <label>Счётчик неудачных попыток заполнения формы: {{formInvalidCount}} </label>
    `
})
export class InvalidCounter{

    @Input()
    public formInvalidCount: number = 0;
}