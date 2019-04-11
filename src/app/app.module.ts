import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from "./task.component";
import { TaskDirective } from "./task.directive";
import { ClickOutsideDirective } from "./clickOutside.directive";
import { FormValidationTask } from "./form-validation-task.component";


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent , TaskComponent, TaskDirective, ClickOutsideDirective, FormValidationTask],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
