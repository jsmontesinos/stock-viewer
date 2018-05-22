import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {}
