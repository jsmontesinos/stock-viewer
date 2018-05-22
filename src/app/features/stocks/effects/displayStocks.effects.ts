import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DisplayStocksService } from '../services/displayStocks.service';
import { DisplayStocksActionTypes, DisplayStocksAction } from '../reducers/displayStocks.reducer';

@Injectable()
export class DisplayStocksEffects {

    constructor(
        private actions: Actions,
        private displayStocksService: DisplayStocksService
    ) { }

    @Effect()
    loadStocks: Observable<Action> = this.actions.pipe(
        ofType<DisplayStocksAction>(DisplayStocksActionTypes.LOAD_STOCK_DATA),
        mergeMap(action =>
            this.displayStocksService.displayStocks(action.payload).pipe(
                map(data => ({ type: DisplayStocksActionTypes.LOAD_STOCK_DATA_SUCCESS, payload: data })),
                // If request fails, dispatch failed action
                catchError(() => of({ type: DisplayStocksActionTypes.LOAD_STOCK_DATA_ERROR }))
            )
        )
    );
}
