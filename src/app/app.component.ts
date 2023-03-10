import { Component } from '@angular/core';

import { ModernSingletonService } from './modern-singleton.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    modernService: ModernSingletonService,
  ) {}
}
