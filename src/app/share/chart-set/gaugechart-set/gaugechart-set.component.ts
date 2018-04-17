import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenLengthService } from '../../screen-length.service';
import { ContactService } from '../../../share/http/contact.service';
import { ChartService } from '../../../share/chart/chart.service';
import { ChartlistItemModel } from '../../../center/chart-list/chart-list.model';
import { ChartListComponent } from '../../../center/chart-list/chart-list.component';
import { ChartlistService } from '../../../center/chart-list.service';
import { EditService } from '../../edit-list.service';
import { GaugeChartComponent } from './gaugechart/gaugechart.component';
import { GaugeChartSetModel } from './gaugechart-set.model';




declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-gaugechart-set',
    templateUrl: 'gaugechart-set.component.html',
    styleUrls: ['gaugechart-set.component.css'],
    providers: [ScreenLengthService, ContactService, ChartService, ChartlistService]
})

export class GaugeChartSetComponent implements OnInit, AfterViewInit {
    @ViewChild(GaugeChartComponent) gaugechart: GaugeChartComponent;

    gaugechartset: GaugeChartSetModel;

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

    Series_gaugeLabel_Shows: any;
    Series_gaugeLabel_Positions: any;

    Tooltip_Point_Types: any;

    legend_orients: any;

    Series_SelectedModes: any;

    Series_RoseTypes: any;

    Series_AvoidLabelOverlaps: any;

    Series_Label_Shows: any;

    Series_Label_Positions: any;

    Series_Line_Shows: any;

    color_index: any;

    label_index: any;

    Series_SplitNumbers: any;

    Series_Tick_Shows: any;

    Series_Spl_Shows: any;

    Series_Point_Shows: any;

    Series_Detail_Shows: any;

    Threshold: any;

    Division: any;

    section: any;

    label_section: any;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chart: ChartService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {
        this.gaugechartset = new GaugeChartSetModel();

        this.Load_resouce();

        this.color_index = 0;

        this.label_index = 0;

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
        this.Title_Fontweights = [
            'normal', 'bold'
        ];
        this.Tooltip_Triggers = [
            { 'value': 'item', 'name': '图形项触发' },
            { 'value': 'none', 'name': '不触发' },
        ];
        this.Series_Label_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Series_SplitNumbers = [
            { 'value': 0, 'name': '不显示' },
            { 'value': 10, 'name': '显示' }
        ];
        this.Series_Tick_Shows = [
            { 'value': false, 'name': '不显示' },
            { 'value': true, 'name': '显示' }
        ];
        this.Series_Spl_Shows = [
            { 'value': false, 'name': '不显示' },
            { 'value': true, 'name': '显示' }
        ];
        this.Series_Point_Shows = [
            { 'value': false, 'name': '不显示' },
            { 'value': true, 'name': '显示' }
        ];
        this.Series_Detail_Shows = [
            { 'value': false, 'name': '不显示' },
            { 'value': true, 'name': '显示' }
        ];
        this.Division = 10;

        this.section = 1;

        this.label_section = 1;

        this.label_index = 0;

        this.Threshold = this.gaugechartset.Series_Line_Color[0][0] * this.gaugechartset.Series_Max;

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
            this.gaugechartset = this.edit_data;
        }

    }
    ngAfterViewInit() {
        this.chart_refresh();
    }
    Label_Index_Set(label_section: any) {
        this.label_index = label_section - 1;
    };

    Threshold_Set(section: any) {
        this.color_index = section - 1;
        this.Threshold = this.gaugechartset.Series_Line_Color[this.color_index][0] * this.gaugechartset.Series_Max;
    }
    Count_threshold(Threshold: any, color_index: any) {
        if (Threshold !== null && Threshold !== undefined) {
            const color_value = Threshold / this.gaugechartset.Series_Max;
            this.gaugechartset.Series_Line_Color[color_index][0] = color_value;
            this.gaugechart.chart_refesh();
        }
    }

    DoDivision(Division: any) {

        if (Division < 11 && Division > 0) {
            const index = Division - 1;
            for (let i = index; i < 10; i++) {
                this.gaugechartset.Series_Line_Color[i][0] = 1;
            }
        }

    }

    chart_refresh() {
        this.gaugechart.chart_refesh();
    }

    chart_edit(arr: any) {
        this.gaugechartset = arr;
    }
    Label_Count(Min: any, Max: any) {
        const max = parseInt(Max, 10);
        const min = parseInt(Min, 10);
        const sum = max - min;
        const piece = sum / 10;
        this.gaugechartset.params = [min, min + piece, min + piece * 2, min + piece * 3, min + piece * 4, min + piece * 5, min + piece * 6, min + piece * 7, min + piece * 8, min + piece * 9, max];
    }

    Save() {
        if (this.flag === false) {
            const chartlist = new ChartlistItemModel('', this.gaugechartset.Title_Text, this.gaugechartset.Series_Type);
            this._chartlist.Add_chartlistitem(this.gaugechartset);
        } else if (this.flag === true) {
            this._chartlist.Update_chartlistitem(this.gaugechartset);
        }
        this._router.navigate(['/center/chartlist']);
    }


    Load_resouce() {
        this._http.getData('assets/json/chart/line-chart/data_resource.json').subscribe(data => {
            this.Data_sources = data;
        });
    }

    select_data() { // 这个方法做三件事 请求数据并存到Data里 获取所有Key 放到arr中  并清空图表中的数据，清空两个下拉框
        this._http.getData(this.gaugechartset.Data_source).subscribe(data => {
            this.Data = data;

            const arr = [];

            let i = 0;

            for (const index in data[0]) {
                if (i < Object.getOwnPropertyNames(data[0]).length) {
                    arr[i] = index;
                    i++;
                }
            }

            this.Data_valuenames = arr;

            this.gaugechartset.Series_Data = [0];
            this.gaugechartset.Data_valuename = '';

            this.chart_refresh();
        });
    }

    select_data_valuename(key: any) { // 选择数值后触发 get所选参数名的数据并放入图表series
        let Data = [];
        Data = this._chart.DataArrGet(this.Data, key);

        this.gaugechartset.Series_Data = [Data[0]];

        this.chart_refresh();
    }
}
