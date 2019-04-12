import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from "./task.component";
import { TaskDirective } from "./task.directive";
import { ClickOutsideDirective } from "./clickOutside.directive";
import { FormValidationTask } from "./form-validation-task.component";
import { InvalidCounter } from "./form-validation-couter.component";
import { EmailValidator } from "./validators/email-validator";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormValidationSuccessReport } from './form-validation-success-report.component';
import { FormValidationFailReport } from './form-validation-fail-report.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent , 
    TaskComponent, 
    TaskDirective, 
    ClickOutsideDirective, 
    FormValidationTask,
    InvalidCounter,  
    FormValidationSuccessReport,
    FormValidationFailReport,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ EmailValidator]
})
export class AppModule { }
