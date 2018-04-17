declare var 自适应: any;
export class MapChartSetModel {
    Title_Text: any;
    Title_Position: any;
    Title_Fontfamily: any;
    Title_Color: any;
    Title_Fontweight: any;

    Chart_BackgroundColor: any;

    Tooltip_Trigger: any;
    Tooltip_Backgroudcolor: any;
    Tooltip_Color: any;
    Tool_Formatter: any;

    VisualMap_Piece_Show: any;
    VisualMap_Piece_Type: any;
    VisualMap_Piece_Inverse: any;
    VisualMap_Piece_Pieces: any;
    VisualMap_Piece_Left: any;
    VisualMap_Piece_Top: any;
    VisualMap_Piece_Text_Color: any;
    VisualMap_Piece_Text_Fontsize: any;

    VisualMap_Conti_Show: any;
    VisualMap_Conti_Type: any;
    VisualMap_Conti_Left: any;
    VisualMap_Conti_Top: any;
    VisualMap_Conti_Min: any;
    VisualMap_Conti_Max: any;
    VisualMap_Conti_Text: any;
    VisualMap_Conti_InRange: any;
    VisualMap_Conti_Text_Color: any;
    VisualMap_Conti_Text_Fontsize: any;

    Series_Name: any;
    Series_Type: any;
    Series_Data: any;
    Series_MapType: any;

    Series_Lable_Normal_show: any;
    Series_Lable_Normal_Text_Color: any;
    Series_Lable_Normal_Text_Fontsize: any;

    Series_Lable_Emphasis_show: any;
    Series_Lable_Emphasis_Text_Color: any;
    Series_Lable_Emphasis_Text_Fontsize: any;

    Series_Item_Normal_Color: any;
    Series_Item_Emphasis_Color: any;

    // 业务数据
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
        this.Tool_Formatter = '';

        this.VisualMap_Piece_Show = true;
        this.VisualMap_Piece_Type = 'piecewise';
        this.VisualMap_Piece_Inverse = true;
        this.VisualMap_Piece_Pieces = [{
            min: 0,
            max: 10,
            color: '#ebdba4'
        }, {
            min: 10,
            max: 30,
            color: '#f2d643'
        }, {
            min: 30,
            max: 50,
            color: '#ffb248'
        }, {
            min: 50,
            max: 100,
            color: '#eb8146'
        }, {
            min: 100,
            color: '#d95850'
        }];
        this.VisualMap_Piece_Left = '2%';
        this.VisualMap_Piece_Top = '2%';
        this.VisualMap_Piece_Text_Color = '#000';
        this.VisualMap_Piece_Text_Fontsize = 12;

        this.VisualMap_Conti_Show = false;
        this.VisualMap_Conti_Type = 'continuous';
        this.VisualMap_Conti_Left = '2%';
        this.VisualMap_Conti_Top = '70%';
        this.VisualMap_Conti_Min = 0;
        this.VisualMap_Conti_Max = 100;
        this.VisualMap_Conti_Text = ['高', '低'];
        this.VisualMap_Conti_InRange = ['#ebdba4', '#f2d643', '#ffb248', '#eb8146', '#d95850'];
        this.VisualMap_Conti_Text_Color = '#000';
        this.VisualMap_Conti_Text_Fontsize = 12;

        this.Series_Name = '名字';
        this.Series_Type = 'map';
        this.Series_MapType = 'china';

        this.Series_Lable_Normal_show = true;
        this.Series_Lable_Normal_Text_Color = '#000';
        this.Series_Lable_Normal_Text_Fontsize = 12;

        this.Series_Lable_Emphasis_show = true;
        this.Series_Lable_Emphasis_Text_Color = '#672a2a';
        this.Series_Lable_Emphasis_Text_Fontsize = 12;

        this.Series_Item_Normal_Color = '#ccc';
        this.Series_Item_Emphasis_Color = '#ffdb19';

        this.Series_Data = [
            {
                name: '南海诸岛',
                value: 0,
                itemStyle: {
                    normal: { opacity: 0, label: { show: false } }
                }
            },
            { name: '河北', value: null },
            { name: '台湾', value: null },
            { name: '香港', value: null },
            { name: '澳门', value: null },
            { name: '山东', value: null },
            { name: '河南', value: null },
            { name: '重庆', value: null },
            { name: '广西', value: null },
            { name: '四川', value: null },
            { name: '海南', value: null },
            { name: '北京', value: null },
            { name: '天津', value: null },
            { name: '上海', value: null },
            { name: '江苏', value: null },
            { name: '浙江', value: null },
            { name: '福建', value: null },
            { name: '安徽', value: null },
            { name: '江西', value: null },
            { name: '湖北', value: null },
            { name: '湖南', value: null },
            { name: '广东', value: null },
            { name: '辽宁', value: null },
            { name: '吉林', value: null },
            { name: '黑龙江', value: null },
            { name: '内蒙古', value: null },
            { name: '云南', value: null },
            { name: '贵州', value: null },
            { name: '山西', value: null },
            { name: '陕西', value: null },
            { name: '甘肃', value: null },
            { name: '新疆', value: null },
            { name: '西藏', value: null },
            { name: '青海', value: null },
            { name: '宁夏', value: null }
        ];

        // 业务数据
        this.Data_source = '';
        this.Data_name = undefined;
        this.Data_valuename = undefined;

    }
}

export class PieceModel {
    min: any;
    max: any;
    color: any;
    constructor(min: any, max: any) {
        this.min = min;
        this.max = max;
        this.color = '#ebdba4';
    }
}

export class MapDataModel {
    name: any;
    value: any;
    constructor(name: any, value: any) {
        this.name = name;
        this.value = value;
    }
}
