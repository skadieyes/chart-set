import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ScreenLengthService } from '../../../share/screen-length.service';
import { ChartlistItemModel } from '../../chart-list/chart-list.model';
import { ContactService } from '../../../share/http/contact.service';
import { ChartlistService } from '../../chart-list.service';
import { EditService } from '../../../share/edit-list.service';
import { Router } from '@angular/router';
import { SourceSetModel } from '../source-set/source-set.model';

declare var $: any;
declare var id: any;
declare var lgModal: any;
@Component({
    selector: 'cst-source-listitem',
    templateUrl: './source-listitem.component.html',
    styleUrls: ['./source-listitem.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class SourceListItemComponent implements OnInit {
    @Input() sourcelistitem: SourceSetModel;
    @Output() deleteidEvent = new EventEmitter<any>();
    @Output() deleteitemEvent = new EventEmitter<any>();
    @Output() editEvent = new EventEmitter<any>();
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
        this.editEvent.emit(this.sourcelistitem.id);
        /*
        this._http.getData(this._chartlist.URL_HOMEITEM + this.homelistitem.id).subscribe(data => {
            const edit_data = data.data;
            this._edit.isEdited(true, edit_data);
            this._edit.isViewed(true);
            window.location.href = this._chartlist.Location_URL + '#/homeset';
            // this._router.navigate(['/set']);
        });
        */
    }

    deleteitem() {
        this.deleteidEvent.emit(this.sourcelistitem.id);
        this.deleteitemEvent.emit(this.sourcelistitem);
    }



}

