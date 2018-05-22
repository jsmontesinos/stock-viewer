import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app.component';
import { LayoutComponent } from './components/layout.component';

export const COMPONENTS = [
    AppComponent,
    LayoutComponent
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: []
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
