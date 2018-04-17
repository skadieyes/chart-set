import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ScreenLengthService } from '../../../screen-length.service';
import { Barchart } from '../../../chart/bar-chart/bar-chart';
import { BarChartSetModel } from '../barchart-set.model';


declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-barchart',
    templateUrl: 'barchart.component.html',
    styleUrls: ['barchart.component.css'],
    providers: [ScreenLengthService]
})

export class BarChartComponent implements OnInit {

    chartOption: any;
    chartOption2: any;

    @Input() barchart: BarChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
    ) {
    }

    height = this._ScrenntLength.height();
    width = this._ScrenntLength.width();

    ngOnInit(): void {
        this.chart_refesh();
    }
    chart_refesh() {
        this.chartOption = new Barchart(this.barchart['Title_Text'], this.barchart['Title_Position'], this.barchart['Title_Fontfamily'], this.barchart['Title_Color'], this.barchart['Title_Fontweight'],
            this.barchart['Chart_BackgroundColor'],
            this.barchart['Xaxis_Type'], this.barchart['Xaxis_Data'], this.barchart['Xaxis_Name'], this.Boolean_change(this.barchart['Xaxis_Spl_Show']), this.barchart['Xaxis_Spl_Interval'], this.barchart['Xaxis_Spl_Color'],
            this.Boolean_change(this.barchart['Xaxis_Tickshow']), this.barchart['Xaxis_Linecolor'], this.barchart['XAxis_Margin'], this.barchart['XAxis_Fontsize'],
            this.barchart['Yaxis_Type'], this.barchart['Yaxis_Name'], this.barchart['Yaxis_Min'], this.barchart['Yaxis_Max'], this.Boolean_change(this.barchart['Yaxis_Spl_Show']),
            this.barchart['Yaxis_Spl_Interval'], this.barchart['Yaxis_Spl_Color'],
            this.Boolean_change(this.barchart['Yaxis_Tickshow']),
            this.barchart['Yaxis_Linecolor'], this.barchart['Yaxis_Margin'], this.barchart['Yaxis_Fontsize'],
            this.barchart['Series_Name'], this.barchart['Series_Type'], this.barchart['Series_Data'],
            this.barchart['Series_BarWidth'], this.barchart['Series_BarColor'], this.Boolean_change(this.barchart['Series_BarLabel_Show']), this.barchart['Series_BarLabel_Position'],
            this.barchart['Series_BarLabel_Fontcolor'], this.barchart['Series_BarLabel_Fontsize'],
            this.barchart['Tooltip_Trigger'], this.barchart['Tooltip_Backgroudcolor'], this.barchart['Tooltip_Color'], this.barchart['Tooltip_Line_Color'], this.barchart['Tooltip_Point_Type'],
            this.barchart['Series_Name'], this.barchart['Legend_Left'], this.barchart['Legend_Top'], this.Boolean_change(this.barchart['Legend_Show'], ), this.barchart['Legend_textcolor']
        );
    }

    Boolean_change(str: any) {
        if (str === 'true' || str === true) {
            return true;
        } if (str === 'false' || str === false) {
            return false;
        }
    }

}
