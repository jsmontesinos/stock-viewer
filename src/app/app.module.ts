import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from 'src/app/config/config.service';
import { DisplayStocksService } from 'src/app/features/stocks/services/displayStocks.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { displayStocksReducer } from './features/stocks/reducers/displayStocks.reducer';
import { DisplayStocksEffects } from './features/stocks/effects/displayStocks.effects';
import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ displayStocks: displayStocksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([DisplayStocksEffects]),
    CoreModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true },
    DisplayStocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
