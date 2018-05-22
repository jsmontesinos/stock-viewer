import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayStocksService } from './services/displayStocks.service';
import { DisplayStocksComponent } from './containers/displayStocks';
import { MatButtonModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { RouterModule } from '@angular/router';

const MaterialModules = [MatButtonModule, MatSelectModule, MatFormFieldModule];

@NgModule({
    declarations: [DisplayStocksComponent],
    imports: [
        CommonModule,
        ... MaterialModules,
        RouterModule.forChild([
            { path: '', component: DisplayStocksComponent },
        ])
    ],
    exports: [],
    providers: [DisplayStocksService],
})
export class StocksModule { }
