import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayStocksComponent } from 'src/app/displayStocks/displayStocks';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from 'src/app/config/config.service';
import { DisplayStocksService } from 'src/app/displayStocks/displayStocks.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { displayStocksReducer } from 'src/app/displayStocks/displayStocks.reducer';
import { DisplayStocksEffects } from 'src/app/displayStocks/displayStocks.effects';
import { environment } from '../environments/environment';

const MaterialModules = [MatButtonModule, MatSelectModule, MatFormFieldModule];

@NgModule({
  declarations: [
    DisplayStocksComponent
  ],
  imports: [
    BrowserModule,
    ... MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ displayStocks: displayStocksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([DisplayStocksEffects])
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true },
    DisplayStocksService
  ],
  bootstrap: [DisplayStocksComponent]
})
export class AppModule { }
