import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ChartlistItemModel } from '../chart-list/chart-list.model';
import { ContactService } from '../../share/http/contact.service';
import { ChartlistService } from '../chart-list.service';
import { EditService } from '../../share/edit-list.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
    selector: 'cst-chart-listitem',
    templateUrl: './chart-listitem.component.html',
    styleUrls: ['./chart-listitem.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class ChartListItemComponent implements OnInit {

    @Input() chartlistitem: ChartlistItemModel;
    @Output() deleteidEvent = new EventEmitter<any>();
    @Output() deleteitemEvent = new EventEmitter<any>();
    typeclass: any;
    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {

    }

    ngOnInit(): void {
        this.setType();
    }
    setType() {
        switch (this.chartlistitem.Series_Type) {
            case 'line':
                this.typeclass = 'icon-linechart';
                break;


            case 'bar':
                this._http.getData(this._chartlist.URL_ITEM + this.chartlistitem.id).subscribe(data => {
                    const chart_data = data.data;
                    if (data.data.Yaxis_Type === 'value') {
                        this.typeclass = 'icon-barchart';
                    } else if (data.data.Xaxis_Type === 'value') {
                        this.typeclass = 'icon-stripchart';
                    }
                });
                break;

            case 'gauge':
                this.typeclass = 'icon-guagechart';
                break;

            case 'pie':
                this.typeclass = 'icon-piechart';
                break;

            case 'map':
                this.typeclass = 'icon-mapchart';
                break;
        }

    }
    deleteitem() {
        this.deleteidEvent.emit(this.chartlistitem.id);
        this.deleteitemEvent.emit(this.chartlistitem);
    }

    edititem() {
        this._http.getData(this._chartlist.URL_ITEM + this.chartlistitem.id).subscribe(data => {
            const edit_data = data.data;
            this._edit.isEdited(true, edit_data);
         //   window.location.href = this._chartlist.Location_URL + '#/set';
             this._router.navigate(['/center/chartset']);
        });

    }

}
