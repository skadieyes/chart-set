import { Component, ViewEncapsulation, Output, OnInit, ViewChild } from '@angular/core';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ChartlistItemModel } from './chart-list.model';
import { ContactService } from '../../share/http/contact.service';
import { ChartlistService } from '../chart-list.service';
import { EditService } from '../../share/edit-list.service';
import { Router } from '@angular/router';
import { HomeNavbarComponent } from '../../home-navbar/home-navbar.component';

declare var $: any;
@Component({
    selector: 'cst-chart-list',
    templateUrl: './chart-list.component.html',
    styleUrls: ['./chart-list.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class ChartListComponent implements OnInit {
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;
    chartlistitems: ChartlistItemModel[];

    listdata: any;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {

    }

    height = this._ScrenntLength.height();

    ngOnInit(): void {
       // this.homenavbar.SetStyle('#chartlist');
        $('.list_body').css('height', this.height - 64);
        this._http.getData(this._chartlist.URL_LIST).subscribe(data => {
            this.listdata = data.data;
            this.getdata(this.listdata);
        });
    }
    getdata(data: any) {

        this.chartlistitems = data;
    }

    Deleteid_ChildEvent(item: any) {

        this._chartlist.Delete_chartlistitem(item);

    }
    Deleteitem_ChildEvent(item: any) {

        for (let i = 0; i < this.chartlistitems.length; i++) {
            if (this.chartlistitems[i] === item) {

                const itemid = this.chartlistitems[i].id;
                this.chartlistitems.splice(i, 1);

            }
        }
    }

    add() {
        this._edit.flag = false;
        this._router.navigate(['/center/chartset']);
    }


}
