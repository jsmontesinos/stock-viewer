import { DisplayStocksService } from "./displayStocks.service";

describe('DisplayStocksService', () => {
    let service: DisplayStocksService;
    beforeEach(() => {
        service = new DisplayStocksService(); 
    });

    it('#getValue should return real value', () => {
        expect(service.getValue()).toBe('real value');
    });
});
