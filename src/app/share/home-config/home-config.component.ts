import { Component, OnInit, EventEmitter, ViewChild, Input, Output, AfterContentInit } from '@angular/core';
import { ContactService } from '../../share/http/contact.service';
import { ChartService } from '../../share/chart/chart.service';
import { ScreenLengthService } from '../../share/screen-length.service';
import { ChartlistService } from '../../center/chart-list.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { TemplateChartSetModel } from '../../home/template/template-chart.model';
import { EditService } from '../edit-list.service';


import { LineChartSetModel } from '../../share/chart-set/linechart-set/linechart-set.model';
import { LineChartComponent } from '../chart-set/linechart-set/linechart/linechart.component';
import { BarChartSetModel } from '../chart-set/barchart-set/barchart-set.model';
import { BarChartComponent } from '../chart-set/barchart-set/barchart/barchart.component';
import { PieChartSetModel } from '../chart-set/piechart-set/piechart-set.model';
import { PieChartComponent } from '../chart-set/piechart-set/piechart/piechart.component';
import { GaugeChartSetModel } from '../chart-set/gaugechart-set/gaugechart-set.model';
import { GaugeChartComponent } from '../chart-set/gaugechart-set/gaugechart/gaugechart.component';
import { StripchartComponent } from '../chart-set/stripchart-set/stripchart/stripchart.component';
import { StripChartSetModel } from '../chart-set/stripchart-set/stripchart-set.model';
import { MapChartComponent } from '../chart-set/mapchart-set/mapchart/mapchart.component';
import { MapChartSetModel } from '../chart-set/mapchart-set/mapchart-set.model';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-home-config',
    templateUrl: 'home-config.component.html',
    styleUrls: ['home-config.component.scss'],
    providers: [ContactService,
        ChartService,
        ScreenLengthService,
        ChartlistService]
})
export class HomeConfigComponent implements AfterContentInit {
    @ViewChild(LineChartComponent) linechart: LineChartComponent;
    @ViewChild(BarChartComponent) barchart: BarChartComponent;
    @ViewChild(PieChartComponent) piechart: PieChartComponent;
    @ViewChild(GaugeChartComponent) gaugechart: GaugeChartComponent;
    @ViewChild(StripchartComponent) stripchart: StripchartComponent;
    @ViewChild(MapChartComponent) mapchart: MapChartComponent;

    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    @Input() configdata: TemplateChartSetModel;
    @Output() saveidEvent = new EventEmitter<any>();

    chart: any;
    chart_lists: any;
    chart_id: any;
    staticModal: any;
    chart_name: any;
    chart_show: any;
    loading: any;
    menu_show: any;

    public isModalShown = false;

    public showModal(): void {
        this.isModalShown = true;
    }

    public hideModal(): void {
        this.autoShownModal.hide();
    }

    public onHidden(): void {
        this.isModalShown = false;
    }

    constructor(
        private _http: ContactService,
        private _chart: ChartService,
        private _length: ScreenLengthService,
        private _chartlist: ChartlistService,
        private _edit: EditService
    ) {

        this.Load_resouce();
        this.chart_show = true;
        this.loading = false;
    }

    ngAfterContentInit() {
        if (this._edit.flag === true) {
            const id = this.configdata.chartid;
            this.save(id);
        }
        if (this._edit.view === true) {
            this.menu_show = true;
        } else if (this._edit.view === false) {
            this.menu_show = false;
        }
    }

    Load_resouce() {
        this._http.getData(this._chartlist.URL_LIST).subscribe(data => {
            this.chart_lists = data.data;
        });
    }

    chartset(id: any) {

        this._http.getData(this._chartlist.URL_ITEM + id).subscribe(data => {
            const chart_data = data.data;
            this.chart_name = chart_data.Series_Type;
            if (chart_data.Series_Type === 'bar') {
                if (chart_data.Xaxis_Type === 'value') {
                    this.chart_name = 'strip';
                }
            };
            switch (this.chart_name) {
                case 'line':
                    this.linechart.chart_refesh();
                    this.linechart.chart_data_refresh();
                    this.loading = false;
                    break;
            };
            switch (this.chart_name) {
                case 'bar':
                    this.barchart.chart_refesh();
                    this.loading = false;
                    break;
            };
            switch (this.chart_name) {
                case 'pie':
                    this.piechart.chart_refesh();
                    this.loading = false;
                    break;
            };
            switch (this.chart_name) {
                case 'gauge':
                    this.gaugechart.chart_refesh();
                    this.loading = false;
                    break;
            };
            switch (this.chart_name) {
                case 'map':
                    this.mapchart.chart_refesh();
                    this.loading = false;
                    break;
            };
            switch (this.chart_name) {
                case 'strip':
                    this.stripchart.chart_refesh();
                    this.loading = false;
                    break;
            };
        });

    }

    save(id: any) {
        if (id !== undefined && id !== null && id !== '') {
            this.loading = true;
            this._http.getData(this._chartlist.URL_ITEM + id).subscribe(data => {
                const chart_data = data.data;
                this.chart_name = chart_data.Series_Type;
                if (chart_data.Series_Type === 'bar') {
                    if (chart_data.Xaxis_Type === 'value') {
                        this.chart_name = 'strip';
                    }
                };
                switch (this.chart_name) {
                    case 'line':
                        this.chart = new LineChartSetModel();
                        break;
                };
                switch (this.chart_name) {
                    case 'bar':

                        this.chart = new BarChartSetModel();

                        break;
                };
                switch (this.chart_name) {
                    case 'pie':
                        this.chart = new PieChartSetModel();
                        break;
                };
                switch (this.chart_name) {
                    case 'gauge':
                        this.chart = new GaugeChartSetModel();
                        break;
                };
                switch (this.chart_name) {
                    case 'map':
                        this.chart = new MapChartSetModel();
                        break;
                };
                switch (this.chart_name) {
                    case 'strip':
                        this.chart = new StripChartSetModel();
                        break;
                };
                this.chart = chart_data;
            });
            this.chart_show = true;

            this.configdata.chartid = id;
            this.saveidEvent.emit(this.configdata);
            this.chartset(id);
        }
    }

    delete_chart() {
        this.chart_show = false;
    }

}
