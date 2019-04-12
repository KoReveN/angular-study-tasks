import { Component } from '@angular/core';
import { FormGroupService } from './services/form-group.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ FormGroupService ]
})
export class AppComponent  {
  name = 'Angular';
}
