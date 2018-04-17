import { Component, ViewEncapsulation, Output, OnInit, ViewChild } from '@angular/core';
import { ScreenLengthService } from '../../../share/screen-length.service';
import { ContactService } from '../../../share/http/contact.service';
import { ChartlistService } from '../../chart-list.service';
import { EditService } from '../../../share/edit-list.service';
import { Router } from '@angular/router';
import { SourceSetComponent } from '../source-set/source-set.component';
import { SourceSetModel } from '../source-set/source-set.model';
import { HomeNavbarComponent } from '../../../home-navbar/home-navbar.component';

declare var $: any;
@Component({
    selector: 'cst-source-list',
    templateUrl: './source-list.component.html',
    styleUrls: ['./source-list.component.scss'],
    providers: [ScreenLengthService,
        ContactService,
        ChartlistService]
})


export class SourceListComponent implements OnInit {
    sourcelistitems: any;
    editdata: SourceSetModel;
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;
    @ViewChild(SourceSetComponent) sourceset: SourceSetComponent;
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
       // this.homenavbar.SetStyle('#sourcelist');
        $('.list_body').css('height', this.height - 64);
        this._http.getData(this._chartlist.URL_SOURCELIST).subscribe(data => {
            const listdata = data.data;
            this.getdata(listdata);
        });

    }
    getdata(data: any) {
        this.sourcelistitems = data;
    }
    add() {
        this._edit.isEdited(false, this.editdata);
        this.sourceset.RenewForm();
        this.sourceset.showChildModal();
    }
    Additem_ChildEvent(value: object) {
        this._http.getData(this._chartlist.URL_SOURCELIST).subscribe(data => {
            const listdata = data.data;
            this.getdata(listdata);
        });
    }

    Edit_ChildEvent(id: any) {
        this._http.getData(this._chartlist.URL_SOURCEITEM + id).subscribe(data => {
            const edit_data = data.data;
            this._edit.isEdited(true, edit_data);
            this.sourceset.showChildModal();
            this.sourceset.Edit();
        });
    }

    Deleteid_ChildEvent(item: any) {

        this._chartlist.Delete_sourcelistitem(item);

    }
    Deleteitem_ChildEvent(item: any) {

        for (let i = 0; i < this.sourcelistitems.length; i++) {
            if (this.sourcelistitems[i] === item) {

                const itemid = this.sourcelistitems[i].id;
                this.sourcelistitems.splice(i, 1);

            }
        }
    }
}
