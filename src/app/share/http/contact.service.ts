import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

const CONTACT_URL = 'assets/json/data1.json';

@Injectable()
export class ContactService {
    constructor(
        private http: Http
    ) { }

    request(url: string, opts: any): Observable<any> {
        return this.http.request(url, new RequestOptions(opts))
            .map(res => {
                const _res = res.json();
                return _res;
            });
    }

    get(url: string, opts?: Object) {
        return this.request(url, (<any>Object).assign({
            method: 'get'
        }, opts));
    }

    getData(url: string) {
        return this.get(url);
    }

    postData(obj: Object = {}, url: string) {
        const body = JSON.stringify(obj);
        const options = new RequestOptions({});
        const jsondata = this.http.post(url, obj, options).map(res => res.json());
        return jsondata;
    }


}
