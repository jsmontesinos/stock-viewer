import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class LayoutComponent {}
