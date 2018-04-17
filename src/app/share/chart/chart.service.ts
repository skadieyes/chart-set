import { Injectable } from '@angular/core';

declare var $: any;
declare var name: any;
declare var value: any;
@Injectable()
export class ChartService {

    DataArrGet(data: any, key: any) {
        const arr = [];
        if (data !== null) {
            for (let i = 0; i < data.length; i++) {
                arr[i] = data[i][key];
            };
            return arr;
        } else {
            return;
        }
    }
    PieDataArrGet(data: any, keyname: any, key: any) {
        const arr = [];
        const l = data.length;
        for (let i = 0; i < l; i++) {
            arr.push(data[i]);
        };
        if (data !== null) {
            for (let i = 0; i < arr.length; i++) {
                arr[i]['value'] = data[i][key];
                arr[i]['name'] = data[i][keyname];
            }
            return arr;
        } else {
            return;
        }
    }

}
