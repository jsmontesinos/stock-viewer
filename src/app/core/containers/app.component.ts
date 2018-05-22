import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <h1>Stocks Viewer</h1>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {}
