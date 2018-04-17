export class LineChartSetModel {
    Title_Text: any;
    Title_Position: any;
    Title_Fontfamily: any;
    Title_Color: any;
    Title_Fontweight: any;

    Chart_Color: any;
    Chart_BackgroundColor: any;

    Xaxis_Type: any;
    Xaxis_Data: any;
    Xaxis_Name: any;
    Xaxis_Spl_Show: any;
    Xaxis_Spl_Interval: any;
    Xaxis_Spl_Color: any;
    Xaxis_Tickshow: any;
    Xaxis_Linecolor: any;
    XAxis_Margin: any;
    XAxis_Fontsize: any;

    Yaxis_Type: any;
    Yaxis_Name: any;
    Yaxis_Min: any;
    Yaxis_Max: any;
    Yaxis_Spl_Show: any;
    Yaxis_Spl_Interval: any;
    Yaxis_Spl_Color: any;
    Yaxis_Tickshow: any;
    Yaxis_Linecolor: any;
    Yaxis_Margin: any;
    Yaxis_Fontsize: any;

    Series_Name: any;
    Series_Type: any;
    Series_Data: any;

    Series_SymbolSize: any;
    Series_Type_1: any;
    Series_Name_1: any;
    Series_Type_2: any;
    Series_Name_2: any;

    Series_SymbolSize2: any;
    Series_SymbolLineSize: any;
    Series_Type_3: any;
    Series_Name_3: any;

    Series_Smooth: any;
    Series_Showsymbol: any;
    Series_Symbol: any;
    Series_Symbolsize: any;
    Series_Item_Color: any;
    Series_Line_Width: any;

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

        this.Chart_Color = '#398fcb';
        this.Chart_BackgroundColor = '#ffffff';

        this.Xaxis_Type = 'category';
        this.Xaxis_Data = [1, 2, 3, 4, 5, 6, 7];
        this.Xaxis_Name = 'X轴';
        this.Xaxis_Spl_Show = false;
        this.Xaxis_Spl_Interval = 'auto';
        this.Xaxis_Spl_Color = '#ccc';
        this.Xaxis_Tickshow = true;
        this.Xaxis_Linecolor = '#333';
        this.XAxis_Margin = '8';
        this.XAxis_Fontsize = '12';

        this.Yaxis_Type = 'value';
        this.Yaxis_Name = 'Y轴';
        this.Yaxis_Min = 0;
        this.Yaxis_Max = null;
        this.Yaxis_Spl_Show = true;
        this.Yaxis_Spl_Interval = 'auto';
        this.Yaxis_Spl_Color = '#ccc';
        this.Yaxis_Tickshow = true;
        this.Yaxis_Linecolor = '#333';
        this.Yaxis_Margin = '8';
        this.Yaxis_Fontsize = '12';

        this.Series_Name = '图例';
        this.Series_Type = 'line';
        this.Series_Data = [0, 0, 0, 0, 0, 0, 0];

        this.Series_SymbolSize = 40;
        this.Series_Type_1 = 'max';
        this.Series_Name_1 = '最大值';
        this.Series_Type_2 = 'min';
        this.Series_Name_2 = '最小值';

        this.Series_SymbolSize2 = 2;
        this.Series_SymbolLineSize = 1;
        this.Series_Type_3 = 'average';
        this.Series_Name_3 = '平均值';

        this.Series_Smooth = false;
        this.Series_Showsymbol = true;
        this.Series_Symbol = 'emptyCircle';
        this.Series_Symbolsize = '4';
        this.Series_Item_Color = '#398fcb';
        this.Series_Line_Width = '2';

        this.Tooltip_Trigger = 'axis';
        this.Tooltip_Backgroudcolor = 'rgba(50,50,50,0.7)';
        this.Tooltip_Color = '#fff';
        this.Tooltip_Line_Color = '#555';
        this.Tooltip_Point_Type = 'line';

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
