import { Component, ViewEncapsulation, Output, OnInit, ViewChild } from '@angular/core';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ContactService } from '../../share/http/contact.service';
import { ChartlistService } from '../chart-list.service';
import { EditService } from '../../share/edit-list.service';
import { Router } from '@angular/router';
import { HomeSetModel } from '../../home/home-set/home-set.model';
import { HomeNavbarComponent } from '../../home-navbar/home-navbar.component';

declare var $: any;
@Component({
    selector: 'cst-home-list',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class HomeListComponent implements OnInit {
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;
    homelistitems: any;

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
        $('.list_body').css('height', this.height - 64);
        this._http.getData(this._chartlist.URL_HOMELIST).subscribe(data => {
            const listdata = data.data;
            this.getdata(listdata);
        });

    }
    getdata(data: any) {

        this.homelistitems = data;
    }
    add() {
        this._edit.flag = false;
        this._edit.isViewed(true);
        this._router.navigate(['/center/homeset']);
    }

    Deleteid_ChildEvent(item: any) {

        this._chartlist.Delete_homelistitem(item);

    }
    Deleteitem_ChildEvent(item: any) {

        for (let i = 0; i < this.homelistitems.length; i++) {
            if (this.homelistitems[i] === item) {

                const itemid = this.homelistitems[i].id;
                this.homelistitems.splice(i, 1);

            }
        }
    }

}
