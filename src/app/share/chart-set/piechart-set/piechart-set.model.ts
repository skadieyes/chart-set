declare var 自适应: any;
export class PieChartSetModel {
    Title_Text: any;
    Title_Position: any;
    Title_Fontfamily: any;
    Title_Color: any;
    Title_Fontweight: any;

    Chart_BackgroundColor: any;

    Tooltip_Trigger: any;
    Tooltip_Backgroudcolor: any;
    Tooltip_Color: any;

    Legend_Data: any;
    Legend_Left: any;
    Legend_Top: any;
    Legend_Show: any;
    Legend_textcolor: any;
    Legend_Orient: any;

    Series_Name: any;
    Series_Type: any;
    Series_Data: any;

    Series_Radius: any;
    Series_Sposition: any;

    Series_SelectedMode: any;
    Series_SelectedOffset: any;
    Series_AvoidLabelOverlap: any;
    Series_RoseType: any;
    Series_Color: any;

    Series_Label_Show: any;
    Series_Label_Position: any;
    Series_Label_Color: any;
    Series_Label_Fontsize: any;
    Series_Label_Formatter: any;

    Series_Line_Show: any;
    Series_Line_Color: any;
    Series_Line_Length: any;
    Series_Line_Length2: any;

    Series_Item_ShadowBlur: any;
    Series_Item_ShadowOffsetX: any;
    Series_Item_ShadowColor: any;

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

        this.Legend_Data = [''];
        this.Legend_Left = '2%';
        this.Legend_Top = '1%';
        this.Legend_Show = true;
        this.Legend_textcolor = '#000';
        this.Legend_Orient = 'vertical';

        this.Series_Name = '图形名';
        this.Series_Type = 'pie';
        this.Series_Data = [0, 0, 0, 0, 0, 0, 0];

        this.Series_Radius = [0, '65%'];
        this.Series_Sposition = ['50%', '50%'];

        this.Series_SelectedMode = 'single';
        this.Series_SelectedOffset = 10;
        this.Series_AvoidLabelOverlap = true;
        this.Series_RoseType = false;
        this.Series_Color = ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395', '#91d4e5', '#8eb3e8',
                            '#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395', '#91d4e5', '#8eb3e8',
                            '#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395', '#91d4e5', '#8eb3e8'];

        this.Series_Label_Show = true;
        this.Series_Label_Position = 'outside';
        this.Series_Label_Color = '#000';
        this.Series_Label_Fontsize = '12';
        this.Series_Label_Formatter = '{b}: {d}';

        this.Series_Line_Show = true;
        this.Series_Line_Color = '#000';
        this.Series_Line_Length = 10;
        this.Series_Line_Length2 = 28;

        this.Series_Item_ShadowBlur = 20;
        this.Series_Item_ShadowOffsetX = 0;
        this.Series_Item_ShadowColor = 'rgba(0, 0, 0, 0.5)';

        // 业务数据
        this.Data_source = '';
        this.Data_name = '';
        this.Data_valuename = '';

    }
}
