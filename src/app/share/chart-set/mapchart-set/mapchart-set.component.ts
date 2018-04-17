import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenLengthService } from '../../screen-length.service';
import { ContactService } from '../../../share/http/contact.service';
import { ChartService } from '../../../share/chart/chart.service';
import { ChartlistItemModel } from '../../../center/chart-list/chart-list.model';
import { ChartListComponent } from '../../../center/chart-list/chart-list.component';
import { ChartlistService } from '../../../center/chart-list.service';
import { EditService } from '../../edit-list.service';
import { MapChartComponent } from './mapchart/mapchart.component';
import { MapChartSetModel, PieceModel, MapDataModel } from './mapchart-set.model';




declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-mapchart-set',
    templateUrl: 'mapchart-set.component.html',
    styleUrls: ['mapchart-set.component.css'],
    providers: [ScreenLengthService, ContactService, ChartService, ChartlistService]
})

export class MapChartSetComponent implements OnInit, AfterViewInit {
    @ViewChild(MapChartComponent) mapchart: MapChartComponent;

    mapchartset: MapChartSetModel;


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

    Series_pieLabel_Shows: any;
    Series_pieLabel_Positions: any;

    Tooltip_Point_Types: any;

    legend_orients: any;

    Series_SelectedModes: any;

    Series_RoseTypes: any;

    Series_AvoidLabelOverlaps: any;

    Series_Label_Shows: any;

    Series_Label_Positions: any;

    Series_Line_Shows: any;

    color_index: any;

    VisualMap_Piece_Shows: any;

    VisualMap_Piece_Inverses: any;

    Pieces: any;

    piece_section: any;

    piece_index: any;

    Conti: any;

    conti_section: any;

    conti_index: any;

    VisualMap_Conti_Shows: any;

    Series_Lable_Normal_shows: any;

    Series_Lable_Emphasis_shows: any;
    piece_min: any;

    piece_max: any;

    VisualMap_Shows: any;

    VisualMap_Show: any;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _http: ContactService,
        private _chart: ChartService,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _router: Router
    ) {
        this.mapchartset = new MapChartSetModel();

        this.Load_resouce();

        this.Pieces = 5;

        this.piece_section = 1;

        this.piece_index = 0;

        this.Conti = 5;

        this.conti_section = 1;

        this.conti_index = 0;

        this.flag = this._edit.flag;

        this.edit_data = this._edit.edit_data;

        this.piece_min = this.mapchartset.VisualMap_Piece_Pieces[0].min;
        this.piece_max = this.mapchartset.VisualMap_Piece_Pieces[0].max;


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
        this.Tooltip_Formatters = [
            { 'value': '{a} <br/>{b} : {c}', 'name': '格式一' },
            { 'value': '{a} : {b}   {c}', 'name': '格式二' },
        ];
        this.Tooltip_Triggers = [
            { 'value': 'item', 'name': '图形项触发' },
            { 'value': 'none', 'name': '不触发' },
        ];
        this.VisualMap_Piece_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.VisualMap_Piece_Inverses = [
            { 'value': true, 'name': '倒序' },
            { 'value': false, 'name': '顺序' }
        ];
        this.VisualMap_Conti_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Series_Lable_Normal_shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.Series_Lable_Emphasis_shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
        ];
        this.VisualMap_Shows = [
            { 'value': true, 'name': '显示' },
            { 'value': false, 'name': '不显示' }
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
            this.mapchartset = this.edit_data;
        }

        //  this. Load_resouce();

    }
    ngAfterViewInit() {
        this.chart_refresh();
    }
    Piece_Min_Set(piece_index: any, value: any) {
        this.mapchartset.VisualMap_Piece_Pieces[piece_index].min = parseInt(value, 10);

    }

    Piece_Max_Set(piece_index: any, value: any) {
        this.mapchartset.VisualMap_Piece_Pieces[piece_index].max = parseInt(value, 10);
    }
    chart_refresh() {
        this.mapchart.chart_refesh();
    }

    chart_edit(arr: any) {
        this.mapchartset = arr;
    }


    Create_Pieces(Pieces: any) {
        const piece_arr = new Array(Pieces);

        for (let i = 0; i < Pieces; i++) {
            piece_arr[i] = new PieceModel(i, i + 1);
        }
        this.mapchartset.VisualMap_Piece_Pieces = piece_arr;
        this.piece_min = this.mapchartset.VisualMap_Piece_Pieces[0].min;
        this.piece_max = this.mapchartset.VisualMap_Piece_Pieces[0].max;
    }

    Conti_Index_Set(conti_section: any) {
        this.conti_index = conti_section - 1;

        if (conti_section > this.Conti) {
            this.conti_index = this.Conti - 1;
            this.conti_section = this.Conti;
        }
    }

    Save() {
        if (this.flag === false) {
            const chartlist = new ChartlistItemModel('', this.mapchartset.Title_Text, this.mapchartset.Series_Type);
            this._chartlist.Add_chartlistitem(this.mapchartset);
        } else if (this.flag === true) {
            this._chartlist.Update_chartlistitem(this.mapchartset);
        }
        this._router.navigate(['/center/chartlist']);
        //  this._router.navigate(['/chartlist']);
    }
    Piece_Index_Set(piece_section: any) {
        this.piece_index = piece_section - 1;

        if (piece_section > this.Pieces) {
            this.piece_index = this.Pieces - 1;
            this.piece_section = this.Pieces;
        }
        this.piece_min = this.mapchartset.VisualMap_Piece_Pieces[this.piece_index].min;
        this.piece_max = this.mapchartset.VisualMap_Piece_Pieces[this.piece_index].max;
    }

    Piece_ColorSet() {
        const piece_arr = this.mapchartset.VisualMap_Piece_Pieces;
        const color_arr = [];
        for (let i = 0; i < piece_arr.length; i++) {
            color_arr[i] = piece_arr[i].color;
        }
        this.mapchartset.VisualMap_Conti_InRange = color_arr;
    }

    Load_resouce() {
        this._http.getData('assets/json/chart/line-chart/data_resource.json').subscribe(data => {
            this.Data_sources = data;
        });
    }

    select_data() { // 这个方法做三件事 请求数据并存到Data里 获取所有Key 放到arr中  并清空图表中的数据，清空两个下拉框
        this._http.getData(this.mapchartset.Data_source).subscribe(data => {

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

            this.mapchartset.Data_valuename = '';
            this.mapchartset.Data_name = '';
            this.chart_refresh();
        });
    }
    select_mapname(keyname: any) { // 选择数值后触发 get所选参数名的数据并放入图表series

        // this.chart_refresh();
    }
    select_data_valuename(keyname: any, key: any) { // 选择数值后触发 get所选参数名的数据并放入图表series
        if (keyname !== undefined && key !== undefined) {
            const map_data = [];
            for (let i = 0; i < this.Data.length; i++) {
                map_data[i] = new MapDataModel(this.Data[i][keyname], this.Data[i][key]);
            }
            const index_max = this.Data.length;
            map_data[index_max] = {
                name: '南海诸岛',
                value: 0,
                itemStyle: {
                    normal: { opacity: 0, label: { show: false } }
                }
            };

            this.mapchartset.Series_Data = map_data;
            this.chart_refresh();
        }
    }




}
