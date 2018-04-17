import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ScreenLengthService } from '../../../screen-length.service';
import { PieChart } from '../../../chart/pie-chart/pie-chart';
import { PieChartSetModel } from '../piechart-set.model';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-piechart',
    templateUrl: 'piechart.component.html',
    styleUrls: ['piechart.component.css'],
    providers: [ScreenLengthService]
})

export class PieChartComponent implements OnInit {

    chartOption: any;
    chartOption2: any;

    @Input() piechart: PieChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
    ) {
    }

    ngOnInit(): void {

        this.chart_refesh();

    }

    chart_refesh() {
        this.chartOption = new PieChart(this.piechart['Title_Text'], this.piechart['Title_Position'], this.piechart['Title_Fontfamily'], this.piechart['Title_Color'], this.piechart['Title_Fontweight'],
            this.piechart['Chart_BackgroundColor'],
            this.piechart['Tooltip_Backgroudcolor'], this.piechart['Tooltip_Color'], this.piechart['Tooltip_Trigger'],
            this.piechart['Legend_Data'], this.piechart['Legend_Left'], this.piechart['Legend_Top'], this.Boolean_change(this.piechart['Legend_Show']), this.piechart['Legend_textcolor'], this.piechart['Legend_Orient'],
            this.piechart['Series_Name'], this.piechart['Series_Type'], this.piechart['Series_Data'],
            this.piechart['Series_Sposition'], this.piechart['Series_Radius'],
            this.Boolean_change(this.piechart['Series_SelectedMode']), this.piechart['Series_SelectedOffset'], this.Boolean_change(this.piechart['Series_AvoidLabelOverlap']),
            this.Boolean_change(this.piechart['Series_RoseType']), this.piechart['Series_Color'],
            this.Boolean_change(this.piechart['Series_Label_Show']), this.piechart['Series_Label_Position'], this.piechart['Series_Label_Color'], this.piechart['Series_Label_Fontsize'], this.piechart['Series_Label_Formatter'],
            this.Boolean_change(this.piechart['Series_Line_Show']), this.piechart['Series_Line_Color'], parseInt(this.piechart['Series_Line_Length'], 10), parseInt(this.piechart['Series_Line_Length2'], 10),
            this.piechart['Series_Item_ShadowBlur'], this.piechart['Series_Item_ShadowOffsetX'], this.piechart['Series_Item_ShadowColor']
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
