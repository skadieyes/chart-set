import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ScreenLengthService } from '../../../screen-length.service';
import { MapChart } from '../../../chart/map-chart/map-chart';
import { MapChartSetModel } from '../mapchart-set.model';
import { PieChart } from '../../../chart/pie-chart/pie-chart';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-mapchart',
    templateUrl: 'mapchart.component.html',
    styleUrls: ['mapchart.component.css'],
    providers: [ScreenLengthService]
})

export class MapChartComponent implements OnInit {

    chartOption: any;
    chartOption2: any;

    @Input() mapchart: MapChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
    ) {
    }


    ngOnInit(): void {

        this.chart_refesh();

    }

    chart_refesh() {
        this.chartOption = new MapChart(this.mapchart['Title_Text'], this.mapchart['Title_Position'], this.mapchart['Title_Fontfamily'], this.mapchart['Title_Color'], this.mapchart['Title_Fontweight'],
            this.mapchart['Chart_BackgroundColor'],
            this.mapchart['Tooltip_Backgroudcolor'], this.mapchart['Tooltip_Color'], this.mapchart['Tooltip_Trigger'], this.mapchart['Tool_Formatter'],
            this.Boolean_change(this.mapchart['VisualMap_Piece_Show']), this.mapchart['VisualMap_Piece_Type'], this.Boolean_change(this.mapchart['VisualMap_Piece_Inverse']),
            this.mapchart['VisualMap_Piece_Pieces'], this.mapchart['VisualMap_Piece_Left'], this.mapchart['VisualMap_Piece_Top'], this.mapchart['VisualMap_Piece_Text_Color'], this.mapchart['VisualMap_Piece_Text_Fontsize'],
            this.Boolean_change(this.mapchart['VisualMap_Conti_Show']), this.mapchart['VisualMap_Conti_Type'], this.mapchart['VisualMap_Conti_Left'], this.mapchart['VisualMap_Conti_Top'], this.mapchart['VisualMap_Conti_Min'],
            this.mapchart['VisualMap_Conti_Max'], this.mapchart['VisualMap_Conti_Text'], this.mapchart['VisualMap_Conti_InRange'], this.mapchart['VisualMap_Conti_Text_Color'], this.mapchart['VisualMap_Conti_Text_Fontsize'],
            this.mapchart['Series_Name'], this.mapchart['Series_Type'], this.mapchart['Series_MapType'], this.mapchart['Series_Data'],
            this.Boolean_change(this.mapchart['Series_Lable_Normal_show']), this.mapchart['Series_Lable_Normal_Text_Color'], this.mapchart['Series_Lable_Normal_Text_Fontsize'],
            this.Boolean_change(this.mapchart['Series_Lable_Emphasis_show']), this.mapchart['Series_Lable_Emphasis_Text_Color'], this.mapchart['Series_Lable_Emphasis_Text_Fontsize'],
            this.mapchart['Series_Item_Normal_Color'], this.mapchart['Series_Item_Emphasis_Color']
        );
    }

    Boolean_change(str: any) {
        if (str === 'true' || str === true) {
            return true;
        } if (str === 'false' || str === false) {
            return false;
        } else {
            return str;
        }
    }

}
