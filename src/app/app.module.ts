import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from "./task.component";
import { TaskDirective } from "./task.directive";
import { ClickOutsideDirective } from "./clickOutside.directive";
import { FormValidationTask } from "./form-validation-task.component";
import { InvalidCounter } from "./form-validation-couter.component";
import { FormValidationReport } from "./form-validation-report";
import { EmailValidator } from "./validators/email-validator";
// import { FormGroupService } from "./services/form-group.service";

 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

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
    FormValidationReport,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ EmailValidator]
})
export class AppModule { }
