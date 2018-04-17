import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ScreenLengthService } from '../../../screen-length.service';
import { StripChartSetModel } from '../stripchart-set.model';
import { Stripchart } from '../../../chart/strip-chart/strip-chart';


declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-stripchart',
    templateUrl: 'stripchart.component.html',
    styleUrls: ['stripchart.component.css'],
    providers: [ScreenLengthService]
})

export class StripchartComponent implements OnInit {

    chartOption: any;
    chartOption2: any;

    @Input() stripchart: StripChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
    ) {
    }
    ngOnInit(): void {

        this.chart_refesh();

    }

    chart_refesh() {
          this.chartOption = new Stripchart(this.stripchart['Title_Text'], this.stripchart['Title_Position'], this.stripchart['Title_Fontfamily'], this.stripchart['Title_Color'], this.stripchart['Title_Fontweight'],
            this.stripchart['Chart_BackgroundColor'],
            this.stripchart['Yaxis_Type'], this.stripchart['Yaxis_Data'], this.stripchart['Yaxis_Name'], this.Boolean_change(this.stripchart['Yaxis_Spl_Show']), this.stripchart['Yaxis_Spl_Interval'], this.stripchart['Yaxis_Spl_Color'],
            this.Boolean_change(this.stripchart['Yaxis_Tickshow']),
            this.stripchart['Yaxis_Linecolor'], this.stripchart['YAxis_Margin'], this.stripchart['YAxis_Fontsize'],
            this.stripchart['Xaxis_Type'], this.stripchart['Xaxis_Name'], this.stripchart['Xaxis_Min'], this.stripchart['Xaxis_Max'], this.Boolean_change(this.stripchart['Xaxis_Spl_Show']), this.stripchart['Xaxis_Spl_Interval'],
            this.stripchart['Xaxis_Spl_Color'],
            this.Boolean_change(this.stripchart['Xaxis_Tickshow']),
            this.stripchart['Xaxis_Linecolor'], this.stripchart['Xaxis_Margin'], this.stripchart['Xaxis_Fontsize'],
            this.stripchart['Series_Name'], this.stripchart['Series_Type'], this.stripchart['Series_Data'],
            this.stripchart['Series_BarWidth'], this.stripchart['Series_BarColor'], this.Boolean_change(this.stripchart['Series_BarLabel_Show']), this.stripchart['Series_BarLabel_Position'],
            this.stripchart['Series_BarLabel_Fontcolor'], this.stripchart['Series_BarLabel_Fontsize'],
            this.stripchart['Tooltip_Trigger'], this.stripchart['Tooltip_Backgroudcolor'], this.stripchart['Tooltip_Color'], this.stripchart['Tooltip_Line_Color'], this.stripchart['Tooltip_Point_Type'],
            this.stripchart['Series_Name'], this.stripchart['Legend_Left'], this.stripchart['Legend_Top'], this.Boolean_change(this.stripchart['Legend_Show'], ) , this.stripchart['Legend_textcolor']
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
