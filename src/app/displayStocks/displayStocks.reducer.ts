// counter.ts
import { Action } from '@ngrx/store';

export enum DisplayStocksActionTypes {
    LOAD_STOCK_DATA = 'LOAD_STOCK_DATA',
    LOAD_STOCK_DATA_SUCCESS = 'LOAD_STOCK_DATA_SUCCESS',
    LOAD_STOCK_DATA_ERROR = 'LOAD_STOCK_DATA_ERROR'
}

export interface DisplayStocksAction extends Action {
    type: DisplayStocksActionTypes.LOAD_STOCK_DATA | DisplayStocksActionTypes.LOAD_STOCK_DATA_SUCCESS;
    payload: any;
}

export interface DisplayStocksData {
    data: any;
}

export function displayStocksReducer(state: any, action: DisplayStocksAction) {
  switch (action.type) {
    case DisplayStocksActionTypes.LOAD_STOCK_DATA_SUCCESS:
      return JSON.stringify(action.payload);
    default:
      return state;
  }
}
