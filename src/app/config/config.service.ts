import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    private privateConfigUrl = 'assets/private-config.json';

    private privateConfig: Object = null;

    constructor(private http: HttpClient) {}

    public getPrivateConfig(key: any) {
        return this.privateConfig[key];
    }

    load() {
        return new Promise((resolve, reject) => {
            return this.http
                .get(this.privateConfigUrl)
                .subscribe((responseData) => {
                    this.privateConfig = responseData;
                    resolve(true);
                }, (error: any) => {
                    console.error('Error reading the configuration file');
                    resolve(error);
                });
        });
    }
}
