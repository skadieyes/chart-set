import { Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';


@Injectable()
export class EditService {
    public flag: boolean;
    public view: boolean;
    public edit_data: any;
    private flagchanges: Subject<any> = new Subject<any>();
    private datachanges: Subject<any> = new Subject<any>();
    private viewchanges: Subject<any> = new Subject<any>();


    constructor() {
    }

    isEdited(isflag: boolean, data: any): void {
        this.flag = isflag;
        this.flagchanges.next(this.flag);

        this.edit_data = data;
        this.datachanges.next(this.edit_data);

    }

    isViewed(isview: boolean): void {
        this.view = isview;
        this.viewchanges.next(this.view);
    }
}
