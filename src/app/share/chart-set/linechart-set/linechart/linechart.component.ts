import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { LineChart } from '../../../chart/line-chart/line-chart';
import { ScreenLengthService } from '../../../screen-length.service';
import { LineChartSetModel } from '../linechart-set.model';
import { EditService } from '../../../edit-list.service';
import { ContactService } from '../../../http/contact.service';
import { ChartlistService } from '../../../../center/chart-list.service';
import { ChartService } from '../../../chart/chart.service';

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'cst-linechart',
    templateUrl: 'linechart.component.html',
    styleUrls: ['linechart.component.css'],
    providers: [ScreenLengthService]
})
export class LineChartComponent implements OnInit {

    chartOption: any;

    @Input() linechart: LineChartSetModel;
    linechart_model = new LineChartSetModel;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _edit: EditService,
        private _http: ContactService,
        private _chartlist: ChartlistService,
        private _chart: ChartService
    ) {
    }

    height = this._ScrenntLength.height();
    width = this._ScrenntLength.width();

    ngOnInit(): void {

        this.chart_refesh();

    }
    chart_refesh() {
        this.chartOption = new LineChart(this.linechart['Title_Text'], this.linechart['Title_Position'], this.linechart['Title_Fontfamily'], this.linechart['Title_Color'], this.linechart['Title_Fontweight'],
            this.linechart['Chart_Color'], this.linechart['Chart_BackgroundColor'],
            this.linechart['Xaxis_Type'], this.linechart['Xaxis_Data'], this.linechart['Xaxis_Name'], this.Boolean_change(this.linechart['Xaxis_Spl_Show']), this.linechart['Xaxis_Spl_Interval'],
            this.linechart['Xaxis_Spl_Color'], this.Boolean_change(this.linechart['Xaxis_Tickshow']),
            this.linechart['Xaxis_Linecolor'], this.linechart['XAxis_Margin'], this.linechart['XAxis_Fontsize'],
            this.linechart['Yaxis_Type'], this.linechart['Yaxis_Name'], this.linechart['Yaxis_Min'], this.linechart['Yaxis_Max'], this.Boolean_change(this.linechart['Yaxis_Spl_Show']), this.linechart['Yaxis_Spl_Interval'],
            this.linechart['Yaxis_Spl_Color'], this.Boolean_change(this.linechart['Yaxis_Tickshow']),
            this.linechart['Yaxis_Linecolor'], this.linechart['Yaxis_Margin'], this.linechart['Yaxis_Fontsize'],
            this.linechart['Series_Name'], this.linechart['Series_Type'], this.linechart['Series_Data'],
            this.linechart['Series_SymbolSize'], this.linechart['Series_Type_1'], this.linechart['Series_Name_1'], this.linechart['Series_Type_2'], this.linechart['Series_Name_2'],
            this.linechart['Series_SymbolSize2'], this.linechart['Series_SymbolLineSize'], this.linechart['Series_Type_3'], this.linechart['Series_Name_3'],
            this.Boolean_change(this.linechart['Series_Smooth']), this.Boolean_change(this.linechart['Series_Showsymbol']), this.linechart['Series_Symbol'], this.linechart['Series_Symbolsize'],
            this.linechart['Series_Item_Color'], this.linechart['Series_Line_Width'],
            this.linechart['Tooltip_Trigger'], this.linechart['Tooltip_Backgroudcolor'], this.linechart['Tooltip_Color'], this.linechart['Tooltip_Line_Color'], this.linechart['Tooltip_Point_Type'],
            this.linechart['Series_Name'], this.linechart['Legend_Left'], this.linechart['Legend_Top'], this.Boolean_change(this.linechart['Legend_Show']), this.linechart['Legend_textcolor']
        );
    }

    chart_data_refresh() {
        this._http.getData(this._chartlist.URL_SOURCEITEM + this.linechart.Data_source).subscribe(data => {
            const source = data.data;
            this._http.getData(source.SOURCE_EXPRESSION).subscribe(chart_data => {

                const Dataz = chart_data;
                const arr = [];

                let i = 0;

                for (const index in Dataz[0]) {
                    if (i < Object.getOwnPropertyNames(Dataz[0]).length) {
                        arr[i] = index;
                        i++;
                    }
                }

                const xData = this._chart.DataArrGet(Dataz, this.linechart.Data_name);
                this.linechart.Xaxis_Data = xData;

                const Data = this._chart.DataArrGet(Dataz, this.linechart.Data_valuename);
                this.linechart.Series_Data = Data;
                this.chart_refesh();
            });
        });
    }

    Boolean_change(str: any) {
        if (str === 'true' || str === true) {
            return true;
        } if (str === 'false' || str === false) {
            return false;
        }
    }
}
