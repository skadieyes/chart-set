declare var 自适应: any;
export class StripChartSetModel {
    Title_Text: any;
    Title_Position: any;
    Title_Fontfamily: any;
    Title_Color: any;
    Title_Fontweight: any;

    Chart_Color: any;
    Chart_BackgroundColor: any;

    Yaxis_Type: any;
    Yaxis_Data: any;
    Yaxis_Name: any;
    Yaxis_Spl_Show: any;
    Yaxis_Spl_Interval: any;
    Yaxis_Spl_Color: any;
    Yaxis_Tickshow: any;
    Yaxis_Linecolor: any;
    YAxis_Margin: any;
    YAxis_Fontsize: any;

    Xaxis_Type: any;
    Xaxis_Name: any;
    Xaxis_Min: any;
    Xaxis_Max: any;
    Xaxis_Spl_Show: any;
    Xaxis_Spl_Interval: any;
    Xaxis_Spl_Color: any;
    Xaxis_Tickshow: any;
    Xaxis_Linecolor: any;
    Xaxis_Margin: any;
    Xaxis_Fontsize: any;

    Series_Name: any;
    Series_Type: any;
    Series_Data: any;

    Series_BarColor: any;
    Series_BarWidth: any;
    Series_BarLabel_Show: any;
    Series_BarLabel_Position: any;
    Series_BarLabel_Fontcolor: any;
    Series_BarLabel_Fontsize: any;

    Tooltip_Trigger: any;
    Tooltip_Formatter: any;
    Tooltip_Backgroudcolor: any;
    Tooltip_Color: any;
    Tooltip_Line_Color: any;
    Tooltip_Point_Type: any;

    Legend_Data: any;
    Legend_Left: any;
    Legend_Top: any;
    Legend_Show: any;
    Legend_textcolor: any;

    Data_source: any;
    Data_name: any;
    Data_valuename: any;

    constructor() {
        // 图形属性
        this.Title_Text = '标题';
        this.Title_Position = 'center';
        this.Title_Fontfamily = '微软雅黑';
        this.Title_Color = '#515151';
        this.Title_Fontweight = 'normal';


        this.Chart_BackgroundColor = '#ffffff';

        this.Yaxis_Type = 'category';
        this.Yaxis_Data = [1, 2, 3, 4, 5, 6, 7];
        this.Yaxis_Name = 'Y轴';
        this.Yaxis_Spl_Show = false;
        this.Yaxis_Spl_Interval = 'auto';
        this.Yaxis_Spl_Color = '#ccc';
        this.Yaxis_Tickshow = true;
        this.Yaxis_Linecolor = '#333';
        this.YAxis_Margin = '8';
        this.YAxis_Fontsize = '12';

        this.Xaxis_Type = 'value';
        this.Xaxis_Name = 'X轴';
        this.Xaxis_Min = 0;
        this.Xaxis_Max = null;
        this.Xaxis_Spl_Show = true;
        this.Xaxis_Spl_Interval = 'auto';
        this.Xaxis_Spl_Color = '#ccc';
        this.Xaxis_Tickshow = true;
        this.Xaxis_Linecolor = '#333';
        this.Xaxis_Margin = '8';
        this.Xaxis_Fontsize = '12';

        this.Series_Name = '图例';
        this.Series_Type = 'bar';
        this.Series_Data = [1, 0, 0, 0, 0, 0, 0];

        this.Series_BarWidth = '自适应';
        this.Series_BarColor = '#398fcb';
        this.Series_BarLabel_Show = false;
        this.Series_BarLabel_Position = 'top';
        this.Series_BarLabel_Fontcolor = '#515151';
        this.Series_BarLabel_Fontsize = '12';

        this.Tooltip_Trigger = 'axis';
        this.Tooltip_Backgroudcolor = 'rgba(50,50,50,0.7)';
        this.Tooltip_Color = '#fff';
        this.Tooltip_Line_Color = '#555';
        this.Tooltip_Point_Type = 'shadow';

        this.Legend_Data = '图例';
        this.Legend_Left = '2%';
        this.Legend_Top = '1%';
        this.Legend_Show = true;
        this.Legend_textcolor = '#000';

        // 业务数据
        this.Data_source = '';
        this.Data_name = '';
        this.Data_valuename = '';
    }
}
