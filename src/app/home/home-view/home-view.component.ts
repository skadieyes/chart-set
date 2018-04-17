import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Template1Component } from '../template/template-1/template-1.component';
import { HomeSetModel } from '../home-set/home-set.model';
import { ContactService } from '../../share/http/contact.service';
import { ChartService } from '../../share/chart/chart.service';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ChartlistService } from '../../center/chart-list.service';
import { EditService } from '../../share/edit-list.service';
import { HomeNavbarComponent } from '../../home-navbar/home-navbar.component';


declare var $: any;
declare var echarts: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'cst-home-view',
    templateUrl: 'home-view.component.html',
    styleUrls: ['home-view.component.scss'],
    providers: [ContactService,
        ChartService,
        ScreenLengthService,
        ChartlistService]
})
export class HomeViewComponent implements OnInit {

    menu_template_name: any;
    title: any;
    homeset: any;
    flag: any;
    edit_data: any;
    chart_arr: any;
    template_name: any;

    @ViewChild(Template1Component) template1: Template1Component;
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;

    constructor(
        private _http: ContactService,
        private _chart: ChartService,
        private _length: ScreenLengthService,
        private _chartlist: ChartlistService,
        private _edit: EditService
    ) {
        const type = this._edit.edit_data.template_name;
        this.menu_template_name = type;
        this.homeset = new HomeSetModel('', '', '');
        this.flag = this._edit.flag;
        this.edit_data = this._edit.edit_data;
    }

    ngOnInit(): void {
        // this.homenavbar.SetStyle('#homelist');
        if (this.flag === true) {
            this.homeset = this.edit_data;
            this.title = this.homeset.page_title;
            this.chart_arr = this.homeset.chart_arr;
            this.template_name = this.homeset.template_name;
        }
    }
}
