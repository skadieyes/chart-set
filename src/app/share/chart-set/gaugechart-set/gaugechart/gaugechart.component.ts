import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ScreenLengthService } from '../../../screen-length.service';
import { GaugeChartSetModel } from '../gaugechart-set.model';
import { GaugeChart } from '../../../chart/gauge-chart/gauge-chart';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-gaugechart',
    templateUrl: 'gaugechart.component.html',
    styleUrls: ['gaugechart.component.css'],
    providers: [ScreenLengthService]
})
export class GaugeChartComponent implements OnInit {

    chartOption: any;
    chartOption2: any;

    @Input() gaugechart: GaugeChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
    ) {
    }

    ngOnInit(): void {
        this.chart_refesh();
    }

    chart_refesh() {

        this.chartOption = new GaugeChart(this.gaugechart['Title_Text'], this.gaugechart['Title_Position'], this.gaugechart['Title_Fontfamily'], this.gaugechart['Title_Color'], this.gaugechart['Title_Fontweight'],
            this.gaugechart['Chart_BackgroundColor'],
            this.gaugechart['Tooltip_Backgroudcolor'], this.gaugechart['Tooltip_Color'], this.gaugechart['Tooltip_Trigger'],
            this.gaugechart['Series_Name'], this.gaugechart['Series_Type'], this.gaugechart['Series_Data'],
            this.gaugechart['Series_SplitNumber'], this.gaugechart['Series_Min'], this.gaugechart['Series_Max'], this.gaugechart['Series_Radius'], this.gaugechart['Series_StartAngle'], this.gaugechart['Series_EndAngle'],
            this.Boolean_change(this.gaugechart['Series_Line_Show']), this.gaugechart['Series_Line_Color'], this.gaugechart['Series_Line_Width'],
            this.Boolean_change(this.gaugechart['Series_Tick_Show']), this.gaugechart['Series_Tick_SplitNumber'], this.gaugechart['Series_Tick_Length'], this.gaugechart['Series_Tick_Color'], this.gaugechart['Series_Tick_Width'],
            this.Boolean_change(this.gaugechart['Series_Spl_Show']), this.gaugechart['Series_Spl_Length'], this.gaugechart['Series_Spl_Color'], this.gaugechart['Series_Spl_Width'],
            this.Boolean_change(this.gaugechart['Series_Label_Show']), this.gaugechart['Series_Label_Distance'], this.gaugechart['Series_Label_Color'], this.gaugechart['Series_Label_Fontsize'], this.gaugechart['params'][0],
            this.gaugechart['params'][1], this.gaugechart['params'][2], this.gaugechart['params'][3], this.gaugechart['params'][4], this.gaugechart['params'][5], this.gaugechart['params'][6], this.gaugechart['params'][7],
            this.gaugechart['params'][8], this.gaugechart['params'][9], this.gaugechart['params'][10],
            this.Boolean_change(this.gaugechart['Series_Point_Show']), this.gaugechart['Series_Point_Length'], this.gaugechart['Series_Point_Width'],
            this.Boolean_change(this.gaugechart['Series_Detail_Show']), this.gaugechart['Series_Detail_offsetCenter'], this.gaugechart['Series_Detail_fontcolor'], this.gaugechart['Series_Detail_fontsize']
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
