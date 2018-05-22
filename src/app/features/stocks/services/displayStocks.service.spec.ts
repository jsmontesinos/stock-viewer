import { DisplayStocksService } from './displayStocks.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from '../../../config/config.service';
jest.mock('../../../config/config.service');

/*describe('DisplayStocksService', () => {
    let service: DisplayStocksService;
    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DisplayStocksService, ConfigService]
        });
        injector = getTestBed();
        service = injector.get(DisplayStocksService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('#getUsers', () => {
        it('should return an Observable<User[]>', () => {
          const dummyUsers = [
            { login: 'John' },
            { login: 'Doe' }
          ];

          service.getUsers().subscribe(users => {
            expect(users.length).toBe(2);
            expect(users).toEqual(dummyUsers);
          });

          const req = httpMock.expectOne(`${service.API_URL}/users`);
          expect(req.request.method).toBe('GET');
          req.flush(dummyUsers);
        });
    });
});*/
