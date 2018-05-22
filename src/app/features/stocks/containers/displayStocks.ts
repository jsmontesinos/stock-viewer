import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as c3 from 'c3';
import { DisplayStocksActionTypes } from '../reducers/displayStocks.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './displayStocks.html',
  styleUrls: ['./displayStocks.css']
})
export class DisplayStocksComponent {
  stocks = [
    {value: 'GOOG', name: 'Alphabet'},
    {value: 'MSFT', name: 'Microsoft'},
    {value: 'AMZN', name: 'Amazon'},
    {value: 'AAPL', name: 'Apple'}
  ];

  data: Observable<string>;

  constructor(private store: Store<any>) {
    this.data = store.pipe(select('displayStocks'));
    this.data.subscribe(data => {
      if (!data) { return; }
      const timeSeries = data['Time Series (Daily)'];
      const timeSeriesKeys = Object.keys(timeSeries);
      const timeSeriesData = timeSeriesKeys.map(key => {
        const day = timeSeries[key];
        const high = parseFloat(day['2. high']);
        const low = parseFloat(day['3. low']);
        return high + low / 2;
      });
      c3.generate({
        bindto: '#chart',
        data: {
          x: 'x',
          columns: [
              ['x', ...timeSeriesKeys],
              ['data', ...timeSeriesData],
          ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
      });
    });
  }

  onStockChange(stock: string) {
      this.store.dispatch({type: DisplayStocksActionTypes.LOAD_STOCK_DATA, payload: stock});
  }

}
