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
    constructor(trigger: any, backgroudcolor: any, color: any) {
        this.trigger = trigger;
        this.backgroundColor = backgroudcolor;
        this.textStyle = new TooltipTextstyle(color);
    };
}
class TooltipTextstyle {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class Legend {
    orient: any;
    data: any;
    left: any;
    top: any;
    show: any;
    textStyle: any;
    constructor(data: any, left: any, top: any, show: any, color: any, orient: any) {
        this.orient = orient;
        this.data = data;
        this.left = left;
        this.top = top;
        this.show = show;
        this.textStyle = new LegendTextstyle(color);
    };
}

class LegendTextstyle {
    color: any;
    constructor(color: any) {
        this.color = color;
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

class LabelNormal {
    show: any;
    position: any;
    textStyle: any;
    formatter: any;
    constructor(show: any, position: any, color: any, fontsize: any, formatter: any) {
        this.show = show;
        this.position = position;
        this.textStyle = new Textstyle(color, fontsize);
        this.formatter = formatter;
    };
}

class LabelEmphasis {
    show: any;
    textStyle: any;
    constructor(show: any, color: any, fontsize: any) {
        this.show = show;
        this.textStyle = new Textstyle(color, fontsize);
    };
}

class LineStyle {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class LabelLineNormal {
    show: any;
    lineStyle: any;
    length: any;
    length2: any;
    constructor(show: any, color: any, labelline_length: any, labelline_length2: any) {
        this.show = show;
        this.lineStyle = new LineStyle(color);
        this.length = labelline_length;
        this.length2 = labelline_length2;
    };
}

class Label {
    normal: any;
    constructor(show: any, position: any, color: any, fontsize: any, formatter: any) {
        this.normal = new LabelNormal(show, position, color, fontsize, formatter);
    };
}

class LabelLine {
    normal: any;
    constructor(show: any, color: any, labelline_length: any, labelline_length2: any) {
        this.normal = new LabelLineNormal(show, color, labelline_length, labelline_length2);
    };
}

class Emphasis {
    shadowBlur: any;
    shadowOffsetX: any;
    shadowColor: any;
    constructor(shadowBlur: any, shadowOffsetX: any, shadowColor: any) {
        this.shadowBlur = shadowBlur;
        this.shadowOffsetX = shadowOffsetX;
        this.shadowColor = shadowColor;
    };
}

class ItemStyle {
    emphasis: any;
    constructor(shadowBlur: any, shadowOffsetX: any, shadowColor: any) {
        this.emphasis = new Emphasis(shadowBlur, shadowOffsetX, shadowColor);
    };
}

class Series {
    name: any;
    type: any;
    data: any;
    center: any;
    radius: any;
    selectedMode: any;
    selectedOffset: any;
    roseType: any;
    color: any;
    label: any;
    labelLine: any;
    itemStyle: any;
    constructor(sname: any, stype: any, data: any, sposition: any, sradius: any, selectedMode: any, selectedOffset: any, avoidLabelOverlap: any, roseType: any, color: any,
        label_show: any, position: any, l_color: any, fontsize: any, formatter: any,
        line_show: any, line_color: any, labelline_length: any, labelline_length2: any,
        shadowBlur: any, shadowOffsetX: any, shadowColor: any) {
        this.name = sname;
        this.type = stype;
        this.data = data;
        this.center = sposition;
        this.radius = sradius;
        this.selectedMode = selectedMode;
        this.selectedOffset = selectedOffset;
        this.roseType = roseType;
        this.color = color;
        this.label = new Label(label_show, position, l_color, fontsize, formatter);
        this.labelLine = new LabelLine(line_show, line_color, labelline_length, labelline_length2);
        this.itemStyle = new ItemStyle(shadowBlur, shadowOffsetX, shadowColor);
    }
}
export class PieChart {
    title: any;
    backgroundColor: any;
    tooltip: any;
    legend: any;
    series: any;
    constructor(name: any, position: any, fontfamily: any, color: any, fontweight: any,
        backgroundColor: any,
        tool_backgroudcolor: any, tool_color: any, trigger: any,
        legend_data: any, legend_left: any, legend_top: any, legend_show: any, legend_color: any, orient: any,
        sname: any, stype: any, data: any, sposition: any, sradius: any, selectedMode: any, selectedOffset: any, avoidLabelOverlap: any, roseType: any, s_color: any,
        label_show: any, l_position: any, l_color: any, fontsize: any, formatter: any,
        line_show: any, line_color: any, labelline_length: any, labelline_length2: any,
        shadowBlur: any, shadowOffsetX: any, shadowColor: any) {
        this.title = new Title(name, position, fontfamily, color, fontweight);
        this.backgroundColor = [backgroundColor];
        this.tooltip = new TooltipFull(tool_backgroudcolor, tool_color, trigger);
        this.legend = new Legend(legend_data, legend_left, legend_top, legend_show, legend_color, orient);
        this.series = [new Series(sname, stype, data, sposition, sradius, selectedMode, selectedOffset, avoidLabelOverlap, roseType, s_color,
            label_show, l_position, l_color, fontsize, formatter,
            line_show, line_color, labelline_length, labelline_length2,
            shadowBlur, shadowOffsetX, shadowColor)];
    }
}
