import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ChartlistItemModel } from '../chart-list/chart-list.model';
import { ContactService } from '../../share/http/contact.service';
import { ChartlistService } from '../chart-list.service';
import { EditService } from '../../share/edit-list.service';
import { Router } from '@angular/router';
import { HomeSetModel } from '../../home/home-set/home-set.model';


declare var $: any;
declare var id: any;
@Component({
    selector: 'cst-home-listitem',
    templateUrl: './home-listitem.component.html',
    styleUrls: ['./home-listitem.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class HomeListItemComponent implements OnInit {
    @Input() homelistitem: HomeSetModel;
    @Output() deleteidEvent = new EventEmitter<any>();
    @Output() deleteitemEvent = new EventEmitter<any>();
    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {

    }
    ngOnInit(): void {

    }

    edititem() {
        this._http.getData(this._chartlist.URL_HOMEITEM + this.homelistitem.id).subscribe(data => {
            const edit_data = data.data;
            this._edit.isEdited(true, edit_data);
            this._edit.isViewed(true);
            this._router.navigate(['/center/homeset']);
            // this._router.navigate(['/set']);
        });
    }

    deleteitem() {
        this.deleteidEvent.emit(this.homelistitem.id);
        this.deleteitemEvent.emit(this.homelistitem);
    }

    viewitem() {
        this._http.getData(this._chartlist.URL_HOMEITEM + this.homelistitem.id).subscribe(data => {
            const edit_data = data.data;
            this._edit.isEdited(true, edit_data);
            this._edit.isViewed(false);
            this._router.navigate(['/center/homeview']);

        });
    }


}

