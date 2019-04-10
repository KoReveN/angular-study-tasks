import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "./task.component";
import { TaskDirective } from "./task.directive";
import { ClickOutsideDirective } from "./clickOutside.directive";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , TaskComponent, TaskDirective, ClickOutsideDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
