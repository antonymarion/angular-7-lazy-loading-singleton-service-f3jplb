import { Injectable } from '@angular/core';

import { ModernModule } from './modern.module';

@Injectable({
  providedIn: ModernModule,
})
export class ModernSingletonService {
  static instance?: ModernSingletonService;

  constructor() {
    if (ModernSingletonService.instance !== undefined) {
      throw new Error('Import ModernModule only once.');
    }

    ModernSingletonService.instance = this;
  }
}