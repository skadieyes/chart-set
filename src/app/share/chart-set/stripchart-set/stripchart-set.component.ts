import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenLengthService } from '../../screen-length.service';
import { ContactService } from '../../../share/http/contact.service';
import { ChartService } from '../../../share/chart/chart.service';
import { ChartlistItemModel } from '../../../center/chart-list/chart-list.model';
import { ChartListComponent } from '../../../center/chart-list/chart-list.component';
import { ChartlistService } from '../../../center/chart-list.service';
import { EditService } from '../../edit-list.service';
import { StripchartComponent } from './stripchart/stripchart.component';
import { StripChartSetModel } from './stripchart-set.model';




declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-stripchart-set',
    templateUrl: 'stripchart-set.component.html',
    styleUrls: ['stripchart-set.component.css'],
    providers: [ScreenLengthService, ContactService, ChartService, ChartlistService]
})

export class StripchartSetComponent implements OnInit, AfterViewInit {
    @ViewChild(StripchartComponent) stripchart: StripchartComponent;

    stripchartset: StripChartSetModel;

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

    Tooltip_Formatters: any;
    Tooltip_Triggers: any;

    Xaxis_Spl_Shows: any;

    Xaxis_Tickshows: any;

    Yaxis_Spl_Shows: any;

    Yaxis_Tickshows: any;

    Series_BarLabel_Shows: any;
    Series_BarLabel_Positions: any;

    Tooltip_Point_Types: any;



    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chart: ChartService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {
        this.stripchartset = new StripChartSetModel();

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
        this.Series_BarLabel_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Series_BarLabel_Positions = [
            { 'value': 'top', 'name': '上' },
            { 'value': 'left', 'name': '左' },
            { 'value': 'right', 'name': '右' },
            { 'value': 'bottom', 'name': '下' },
            { 'value': 'inside', 'name': '里' },
            { 'value': 'insideTop', 'name': '里上' },
            { 'value': 'insideLeft', 'name': '里左' },
            { 'value': 'insideRight', 'name': '里右' },
            { 'value': 'insideBottom', 'name': '里下' }
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
            this.stripchartset = this.edit_data;
        }
    }

    ngAfterViewInit() {
        this.chart_refresh();
    }

    chart_refresh() {
        this.stripchart.chart_refesh();
    }

    chart_edit(arr: any) {
        this.stripchartset = arr;
    }
    Save() {
        if (this.flag === false) {
            const chartlist = new ChartlistItemModel('', this.stripchartset.Title_Text, this.stripchartset.Series_Type);
            this._chartlist.Add_chartlistitem(this.stripchartset);
        } else if (this.flag === true) {
            this._chartlist.Update_chartlistitem(this.stripchartset);
        }
        this._router.navigate(['/center/chartlist']);
    }


    Load_resouce() {
        this._http.getData('assets/json/chart/line-chart/data_resource.json').subscribe(data => {
            this.Data_sources = data;
        });
    }

    select_data() { // 这个方法做三件事 请求数据并存到Data里 获取所有Key 放到arr中  并清空图表中的数据，清空两个下拉框
        this._http.getData(this.stripchartset.Data_source).subscribe(data => {

            this.Data = data;

            const arr = [];

            let i = 0;
            for (const index in data[0]) {
                if (i < Object.getOwnPropertyNames(data[0]).length) {
                    arr[i] = index;
                    i++;
                }
            }
            this.Data_names = arr;
            this.Data_valuenames = arr;

            this.stripchartset.Yaxis_Data = [1, 2, 3, 4, 5, 6, 7];
            this.stripchartset.Series_Data = [0, 0, 0, 0, 0, 0, 0];
            this.stripchartset.Data_valuename = '';
            this.stripchartset.Data_name = '';
            this.chart_refresh();
        });
    }

    select_data_name(name: any) { // 选择维度后触发 get所选参数名的数据并放入图表x轴
        let xData = [];
        xData = this._chart.DataArrGet(this.Data, name);
        this.stripchartset.Yaxis_Data = xData;
        this.chart_refresh();
    }

    select_data_valuename(name: any) { // 选择数值后触发 get所选参数名的数据并放入图表series
        let Data = [];
        Data = this._chart.DataArrGet(this.Data, name);
        this.stripchartset.Series_Data = Data;
        this.chart_refresh();
    }




}
