import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DisplayStocksActionTypes } from './displayStocks.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './displayStocks.html',
  styleUrls: ['./displayStocks.css']
})
export class DisplayStocksComponent {
  stocks = [
    {value: 'MSFT', name: 'Microsoft'},
    {value: 'MSFT', name: 'Microsoft'},
    {value: 'MSFT', name: 'Microsoft'}
  ];

  data: Observable<string>;

  constructor(private store: Store<any>) {
    this.data = store.pipe(select('displayStocks'));
  }

  onStockChange(stock: string) {
      this.store.dispatch({type: DisplayStocksActionTypes.LOAD_STOCK_DATA, payload: stock});
  }

}
