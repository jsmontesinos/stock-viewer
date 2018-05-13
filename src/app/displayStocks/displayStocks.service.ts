import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';


@Injectable()
export class DisplayStocksService {
    private baseUrl: string;
    constructor(private http: HttpClient, private config: ConfigService) {
    }

    displayStocks(stockSymbol: string): Observable<any> {
        const apiKey = this.config.getPrivateConfig('alphaVantageKey');
        this.baseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=${apiKey}`;
        return this.http.get(this.baseUrl + `&symbol=${stockSymbol}`);
    }
}
