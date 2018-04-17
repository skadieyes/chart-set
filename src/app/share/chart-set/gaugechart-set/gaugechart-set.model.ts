declare var 自适应: any;
export class GaugeChartSetModel {
    Title_Text: any;
    Title_Position: any;
    Title_Fontfamily: any;
    Title_Color: any;
    Title_Fontweight: any;

    Chart_BackgroundColor: any;

    Tooltip_Trigger: any;
    Tooltip_Backgroudcolor: any;
    Tooltip_Color: any;

    Series_Name: any;
    Series_Type: any;
    Series_Data: any;

    Series_SplitNumber: any;
    Series_Min: any;
    Series_Max: any;
    Series_Radius: any;
    Series_StartAngle: any;
    Series_EndAngle: any;

    Series_Line_Show: any;
    Series_Line_Width: any;
    Series_Line_Color: any;

    Series_Tick_Show: any;
    Series_Tick_SplitNumber: any;
    Series_Tick_Length: any;
    Series_Tick_Color: any;
    Series_Tick_Width: any;

    Series_Spl_Show: any;
    Series_Spl_Length: any;
    Series_Spl_Color: any;
    Series_Spl_Width: any;

    Series_Label_Show: any;
    Series_Label_Distance: any;
    Series_Label_Color: any;
    Series_Label_Fontsize: any;

    params: any;
    param1: any;
    param2: any;
    param3: any;
    param4: any;
    param5: any;
    param6: any;
    param7: any;
    param8: any;
    param9: any;
    param10: any;
    param11: any;

    Series_Point_Show: any;
    Series_Point_Width: any;
    Series_Point_Length: any;

    Series_Detail_Show: any;
    Series_Detail_offsetCenter: any;
    Series_Detail_fontcolor: any;
    Series_Detail_fontsize: any;

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

        this.Tooltip_Trigger = 'item';
        this.Tooltip_Backgroudcolor = 'rgba(50,50,50,0.7)';
        this.Tooltip_Color = '#fff';


        this.Series_Name = '图形名';
        this.Series_Type = 'gauge';
        this.Series_Data = [0];

        this.Series_SplitNumber = 10;
        this.Series_Min = 0;
        this.Series_Max = 100;
        this.Series_Radius = '75%';
        this.Series_StartAngle = 225;
        this.Series_EndAngle = -45;

        this.Series_Line_Show = true;
        this.Series_Line_Width = 30;
        this.Series_Line_Color = [
            [
                0.1,
                '#E43F3D'
            ],
            [
                0.2,
                '#e98e2c'
            ],
            [
                0.3,
                '#ddbd4d'
            ],
            [
                0.4,
                '#7cbb55'
            ],
            [
                0.5,
                '#9cd6ce'
            ],
            [
                0.6,
                '#9cd6ce'
            ],
            [
                0.7,
                '#7CBB55'
            ],
            [
                0.8,
                '#ddbd4d'
            ],
            [
                0.9,
                '#e98e2c'
            ],
            [
                1,
                '#e43f3d'
            ]
        ];
        this.Series_Label_Show = true;
        this.Series_Label_Distance = 5;
        this.Series_Label_Color = 'auto';
        this.Series_Label_Fontsize = 12;

        this.params = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
        this.param1 = '0';
        this.param2 = '较差';
        this.param3 = '20';
        this.param4 = '中等';
        this.param5 = '40';
        this.param6 = '良好';
        this.param7 = '60';
        this.param8 = '优秀';
        this.param9 = '80';
        this.param10 = '极好';
        this.param11 = '100';

        this.Series_Tick_Show = true;
        this.Series_Tick_SplitNumber = 1;
        this.Series_Tick_Length = 8;
        this.Series_Tick_Color = '#eee';
        this.Series_Tick_Width = 1;

        this.Series_Spl_Show = true;
        this.Series_Spl_Length = 30;
        this.Series_Spl_Color = '#eee';
        this.Series_Spl_Width = 2;

        this.Series_Point_Show = true;
        this.Series_Point_Width = 8;
        this.Series_Point_Length = '80%';

        this.Series_Detail_Show = true;
        this.Series_Detail_offsetCenter = [0, '40%'];
        this.Series_Detail_fontcolor = 'auto';
        this.Series_Detail_fontsize = '15';

        // 业务数据
        this.Data_source = '';
        this.Data_name = '';
        this.Data_valuename = '';

    }

}
