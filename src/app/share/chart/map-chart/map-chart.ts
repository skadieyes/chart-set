class TextStyle {
    fontFamily: any;
    color: any;
    fontWeight: any;
    constructor(fontfamily: any, color: any, fontweight: any) {
        this.fontFamily = fontfamily;
        this.color = color;
        this.fontWeight = fontweight;
    };
}

class Title {
    text: any;
    left: any;
    textStyle: any;
    constructor(name: any, position: any, fontfamily: any, color: any, fontweight: any) {
        this.text = name;
        this.left = position;
        this.textStyle = new TextStyle(fontfamily, color, fontweight);
    };
}

class TooltipFull {
    trigger: any;
    backgroundColor: any;
    textStyle: any;
    formatter: any;
    constructor(backgroudcolor: any, color: any, trigger: any, formatter: any) {
        this.trigger = trigger;
        this.backgroundColor = backgroudcolor;
        this.textStyle = new TooltipTextstyle(color);
        this.formatter = function (params: any) {
            let value = (params.value);
            value = value + formatter;
            return params.name + ' : ' + value;
        };
    };
}
class TooltipTextstyle {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class VisualMapPiece {
    show: any;
    type: any;
    inverse: any;
    pieces: any;

    left: any;
    top: any;
    textStyle: any;
    constructor(show: any, type: any, inverse: any, pieces: any, piece_left: any, piece_top: any, text_color: any, text_fontsize: any) {
        this.show = show;
        this.type = type;
        this.inverse = inverse;
        this.pieces = pieces;

        this.left = piece_left;
        this.top = piece_top;
        this.textStyle = new Textstyle(text_color, text_fontsize);
    };
}
class Textstyle {
    color: any;
    fontSize: any;
    constructor(color: any, fontsize: any) {
        this.color = color;
        this.fontSize = fontsize;
    };
}
class VisualMapContinuous {
    show: any;
    type: any;
    left: any;
    top: any;
    min: any;
    max: any;
    text: any;
    inRange: any;
    textStyle: any;
    constructor(show: any, type: any, piece_left: any, piece_top: any, min: any, max: any, text: any, inRange: any, text_color: any, text_fontsize: any) {
        this.show = show;
        this.type = type;

        this.left = piece_left;
        this.top = piece_top;

        this.min = min;
        this.max = max;
        this.text = text;
        this.inRange = new InRange(inRange);
        this.textStyle = new Textstyle(text_color, text_fontsize);
    };
}


class InRange {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class Series {
    name: any;
    type: any;
    mapType: any;
    data: any;
    label: any;
    ItemStyle: any;
    constructor(sname: any, type: any, mapType: any, sdata: any,
        normal_show: any, normal_text_color: any, normal_text_fontsize: any, emphasis_show: any, emphasis_text_color: any, emphasis_text_fontsize: any, normal_color: any, emphasis_color: any) {
        this.name = sname;
        this.type = type;
        this.mapType = mapType;
        this.data = sdata;
        this.label = new Label(normal_show, normal_text_color, normal_text_fontsize, emphasis_show, emphasis_text_color, emphasis_text_fontsize);
        this.ItemStyle = new ItemStyle(normal_color, emphasis_color);
    };
}

class Label {
    normal: any;
    emphasis: any;
    constructor(normal_show: any, normal_text_color: any, normal_text_fontsize: any, emphasis_show: any, emphasis_text_color: any, emphasis_text_fontsize: any) {
        this.normal = new LabelNormal(normal_show, normal_text_color, normal_text_fontsize);
        this.emphasis = new LabelEmphasis(emphasis_show, emphasis_text_color, emphasis_text_fontsize);
    };
}

class LabelNormal {
    show: any;
    textStyle: any;
    constructor(show: any, text_color: any, text_fontsize: any) {
        this.show = show;
        this.textStyle = new Textstyle(text_color, text_fontsize);
    }
}
class LabelEmphasis {
    show: any;
    textStyle: any;
    constructor(show: any, text_color: any, text_fontsize: any) {
        this.show = show;
        this.textStyle = new Textstyle(text_color, text_fontsize);
    };
}

class ItemStyle {
    normal: any;
    emphasis: any;
    constructor(normal_color: any, emphasis_color: any) {
        this.normal = new AreaColor(normal_color);
        this.emphasis = new AreaColor(emphasis_color);
    };
}
class AreaColor {
    areaColor: any;
    constructor(color: any) {
        this.areaColor = color;
    };
}

export class MapChart {
    title: any;
    backgroundColor: any;
    tooltip: any;
    visualMap: any;
    series: any;
    constructor(title_name: any, title_position: any, title_fontfamily: any, title_color: any, title_fontweight: any,
        backgroundColor: any,
        tool_backgroudcolor: any, tool_color: any, tool_trigger: any, tool_formatter: any,
        piece_show: any, piece_type: any, inverse: any, pieces: any, piece_left: any, piece_top: any, piece_text_color: any, piece_text_fontsize: any,
        conti_show: any, conti_type: any, conti__left: any, conti__top: any, min: any, max: any, text: any, inRange: any, conti_text_color: any, conti_text_fontsize: any,
        sname: any, stype: any, mapType: any, sdata: any,
        normal_show: any, normal_text_color: any, normal_text_fontsize: any, emphasis_show: any, emphasis_text_color: any, emphasis_text_fontsize: any, normal_color: any, emphasis_color: any
    ) {
        this.title = new Title(title_name, title_position, title_fontfamily, title_color, title_fontweight);
        this.backgroundColor = [backgroundColor];
        this.tooltip = new TooltipFull(tool_backgroudcolor, tool_color, tool_trigger, tool_formatter);
        this.visualMap = [
            new VisualMapPiece(piece_show, piece_type, inverse, pieces, piece_left, piece_top, piece_text_color, piece_text_fontsize),
            new VisualMapContinuous(conti_show, conti_type, conti__left, conti__top, min, max, text, inRange, conti_text_color, conti_text_fontsize)
        ];
        this.series = [
            new Series(sname, stype, mapType, sdata,
                normal_show, normal_text_color, normal_text_fontsize, emphasis_show, emphasis_text_color, emphasis_text_fontsize, normal_color, emphasis_color)
        ];

    };
}
