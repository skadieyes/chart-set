import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenLengthService } from '../../screen-length.service';
import { ContactService } from '../../../share/http/contact.service';
import { ChartService } from '../../../share/chart/chart.service';
import { LineChartSetModel } from './linechart-set.model';

import { LineChartComponent } from './linechart/linechart.component';
import { ChartlistItemModel } from '../../../center/chart-list/chart-list.model';
import { ChartListComponent } from '../../../center/chart-list/chart-list.component';
import { ChartlistService } from '../../../center/chart-list.service';
import { EditService } from '../../edit-list.service';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-linechart-set',
    templateUrl: 'linechart-set.component.html',
    styleUrls: ['linechart-set.component.css'],
    providers: [ScreenLengthService, ContactService, ChartService, ChartlistService]
})

export class LineChartSetComponent implements OnInit, AfterViewInit {
    @ViewChild(LineChartComponent) linechart: LineChartComponent;

    linechartset: LineChartSetModel;

    flag: any;
    edit_data: any;

    Data: any;
    Data_sources: any;
    Data_names: any;
    Data_valuenames: any;

    fontfamilys: any;

    title_positions: any;

    color: any;

    Title_Fontweights: any;
    Legend_Shows: any;
    Series_SymbolSizes: any;
    Tooltip_Formatters: any;
    Tooltip_Triggers: any;

    Xaxis_Spl_Shows: any;

    Xaxis_Tickshows: any;

    Yaxis_Spl_Shows: any;

    Yaxis_Tickshows: any;

    Series_Smooths: any;

    Series_Showsymbols: any;

    Series_Symbols: any;

    Tooltip_Point_Types: any;

    Data_source: object;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chart: ChartService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {
        this.linechartset = new LineChartSetModel();

        this.Load_resouce();

        this.flag = this._edit.flag;

        this.edit_data = this._edit.edit_data;


        this.fontfamilys = [
            '微软雅黑', '黑体', '宋体'
        ];
        this.title_positions = [
            { 'value': 'center', 'name': '中' },
            { 'value': 'left', 'name': '左' },
            { 'value': 'right', 'name': '右' },
        ];
        this.Legend_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Title_Fontweights = [
            'normal', 'bold'
        ];
        this.Series_SymbolSizes = [
            { 'value': 0, 'name': '不显示' },
            { 'value': this.linechartset.Series_SymbolSize, 'name': '显示' }
        ];
        this.Tooltip_Formatters = [
            { 'value': '{a} <br/>{b} : {c}', 'name': '格式一' },
            { 'value': '{a} : {b}   {c}', 'name': '格式二' },
        ];
        this.Tooltip_Triggers = [
            { 'value': 'axis', 'name': '坐标轴触发' },
            { 'value': 'item', 'name': '图形项触发' },
            { 'value': 'none', 'name': '不触发' },
        ];
        this.Xaxis_Spl_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Xaxis_Tickshows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Yaxis_Spl_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Yaxis_Tickshows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];

        this.Series_Smooths = [
            { 'value': true, 'name': '曲线' },
            { 'value': false, 'name': '直线' }
        ];

        this.Series_Showsymbols = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];

        this.Series_Symbols = [
            { 'value': 'emptyCircle', 'name': '空心圆' },
            { 'value': 'circle', 'name': '圆' },
            { 'value': 'rect', 'name': '矩形' },
            { 'value': 'roundRect', 'name': '圆角' },
            { 'value': 'triangle', 'name': '三角形' },
            { 'value': 'diamond', 'name': '菱形' },
            { 'value': 'pin', 'name': '图钉' },
            { 'value': 'arrow', 'name': '箭头' }
        ];
        this.Tooltip_Point_Types = [
            { 'value': 'line', 'name': '直线指示器' },
            { 'value': 'shadow', 'name': '阴影指示器' },
            { 'value': 'cross', 'name': '十字准星指示器' }
        ];
    }
    height = this._ScrenntLength.height();

    ngOnInit(): void {
        $('#Title_color_picker').hide();
        $(function () { $('#collapseOne').collapse('show'); });
        $('#collapseOne').on('show.bs.collapse', function () {
            $('.coll-panel-one').addClass('panel-cst');
        });
        $('#collapseOne').on('hide.bs.collapse', function () {
            $('.coll-panel-one').removeClass('panel-cst');
        });

        $(function () { $('#collapseTwo').collapse('show'); });
        $('#collapseTwo').on('show.bs.collapse', function () {
            $('.coll-panel-two').addClass('panel-cst');
        });
        $('#collapseTwo').on('hide.bs.collapse', function () {
            $('.coll-panel-two').removeClass('panel-cst');
        });
        $('input').blur(() => {
            this.chart_refresh();
        });
        $('select').change(() => {
            this.chart_refresh();
        });
        if (this.flag === true) {
            this.linechartset = this.edit_data;
            this._http.getData(this._chartlist.URL_SOURCEITEM + this.linechartset.Data_source).subscribe(data => {
                const source = data.data;
                this._http.getData(source.SOURCE_EXPRESSION).subscribe(chart_data => {

                    this.Data = chart_data;
                    const arr = [];

                    let i = 0;

                    for (const index in this.Data[0]) {
                        if (i < Object.getOwnPropertyNames(this.Data[0]).length) {
                            arr[i] = index;
                            i++;
                        }
                    }

                    this.Data_names = arr;
                    this.Data_valuenames = arr;

                    const xData = this._chart.DataArrGet(this.Data, this.linechartset.Data_name);
                    this.linechartset.Xaxis_Data = xData;

                    const Data = this._chart.DataArrGet(this.Data, this.linechartset.Data_valuename);
                    this.linechartset.Series_Data = Data;
                    this.chart_refresh();
                });
            });
        }
    }
    ngAfterViewInit() {
        this.chart_refresh();
    }

    chart_refresh() {
        this.linechart.chart_refesh();
    }

    chart_edit(arr: any) {
        this.linechartset = arr;
    }

    Save() {
        if (this.flag === false) {
            const chartlist = new ChartlistItemModel('', this.linechartset.Title_Text, this.linechartset.Series_Type);
            this._chartlist.Add_chartlistitem(this.linechartset);
        } else if (this.flag === true) {
            this._chartlist.Update_chartlistitem(this.linechartset);
        }
        this._router.navigate(['/center/chartlist']);
        //  this._router.navigate(['/chartlist']);
    }


    Load_resouce() {
        /**
        this._http.getData('assets/json/chart/line-chart/data_resource.json').subscribe(data => {
            this.Data_sources = data;
        });
        */
        this._http.getData(this._chartlist.URL_SOURCELIST).subscribe(data => {
            this.Data_sources = data.data;
        });
    }

    select_data() { // 这个方法做三件事 请求数据并存到Data里 获取所有Key 放到arr中  并清空图表中的数据，清空两个下拉框
        this._http.getData(this._chartlist.URL_SOURCEITEM + this.linechartset.Data_source).subscribe(data => {
            const source = data.data;
            this._http.getData(source.SOURCE_EXPRESSION).subscribe(chart_data => {

                this.Data = chart_data;
                const arr = [];

                let i = 0;

                for (const index in this.Data[0]) {
                    if (i < Object.getOwnPropertyNames(this.Data[0]).length) {
                        arr[i] = index;
                        i++;
                    }
                }

                this.Data_names = arr;
                this.Data_valuenames = arr;

                this.linechartset.Xaxis_Data = [1, 2, 3, 4, 5, 6, 7];
                this.linechartset.Series_Data = [0, 0, 0, 0, 0, 0, 0];
                this.linechartset.Data_valuename = '';
                this.linechartset.Data_name = '';
                this.chart_refresh();
            });
        });

    }

    select_data_name(name: any) { // 选择维度后触发 get所选参数名的数据并放入图表x轴
        let xData = [];
        xData = this._chart.DataArrGet(this.Data, name);
        this.linechartset.Xaxis_Data = xData;
        this.linechartset.Data_name = name;
        this.chart_refresh();
    }

    select_data_valuename(name: any) { // 选择数值后触发 get所选参数名的数据并放入图表series
        let Data = [];
        Data = this._chart.DataArrGet(this.Data, name);
        this.linechartset.Series_Data = Data;
        this.linechartset.Data_valuename = name;
        this.chart_refresh();
    }




}
