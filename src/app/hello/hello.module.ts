import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModernModule } from '../modern.module';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
];

@NgModule({
  declarations: [HelloComponent],
  imports: [
    RouterModule.forChild(routes),
    // ModernModule,
  ],
})
export class HelloModule {}
