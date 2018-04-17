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

class Xaxis {
    type: any;
    data: any;
    constructor(type: any, xdata: any) {
        this.type = type;
        this.data = xdata;
    };
}

class XaxisFull {
    type: any;
    name: any;
    data: any;
    splitLine: any;
    axisTick: any;
    axisLine: any;
    axisLabel: any;
    constructor(type: any, xdata: any, name: any, show: any, interval: any, color: any, tickshow: any, linecolor: any, margin: any, fontsize: any) {
        this.type = type;
        this.name = name;
        this.data = xdata;
        this.splitLine = new SplitLine(show, interval, color);
        this.axisTick = new AxisTick(tickshow);
        this.axisLine = new AxisLine(linecolor);
        this.axisLabel = new AxisLabel(margin, fontsize);
    };
}
class AxisTextstyle {
    fontSize: any;
    constructor(fontsize: any) {
        this.fontSize = fontsize;
    };
}

class AxisLabel {
    margin: any;
    textStyle: any;
    constructor(margin: any, fontsize: any) {
        this.margin = margin;
        this.textStyle = new AxisTextstyle(fontsize);
    };
}

class SplitLine {
    show: any;
    interval: any;
    lineStyle: any;
    constructor(show: any, interval: any, color: any) {
        this.show = show;
        this.interval = interval;
        this.lineStyle = new SplLinestyleColor(color);
    };
}

class AxisLine {
    lineStyle: any;
    constructor(color: any) {
        this.lineStyle = new AxilineStyle(color);
    };
}

class AxilineStyle {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}
class SplLinestyleColor {
    color: any;
    constructor(color: any) {
        this.color = [color];
    };
}
class AxisTick {
    show: any;
    constructor(show: any) {
        this.show = show;
    };
}
class XaxisLabel {
    axisLabel: any;
    constructor(type: any, xdata: any, interval: any) {
        Xaxis.call(this, type, xdata);
        this.axisLabel = new Axislabel(interval);
    };
}

class Yaxis {
    type: any;
    constructor(type: any) {
        this.type = type;
    };
}

class YaxisFull {
    type: any;
    name: any;
    min: any;
    max: any;
    splitLine: any;
    axisTick: any;
    axisLine: any;
    axisLabel: any;
    constructor(type: any, name: any, min: any, max: any, show: any, interval: any, color: any, tickshow: any, linecolor: any, margin: any, fontsize: any) {
        this.type = type;
        this.name = name;
        this.min = min;
        this.max = max;
        this.splitLine = new SplitLine(show, interval, color);
        this.axisTick = new AxisTick(tickshow);
        this.axisLine = new AxisLine(linecolor);
        this.axisLabel = new AxisLabel(margin, fontsize);
    };
}

class YaxisName {
    type: any;
    name: any;
    min: any;
    max: any;
    constructor(type: any, name: any, min: any, max: any) {
        this.type = type;
        this.name = name;
        this.min = min;
        this.max = max;
    };
}

class Series {
    name: any;
    type: any;
    data: any;
    constructor(name: any, type: any, data: any) {
        this.name = name;
        this.type = type;
        this.data = data;
    };
}

class SeriesMark {
    markPoint: any;
    markLine: any;
    constructor(name: any, type: any, data: any,
        symbolSize: any, type_1: any, name_1: any, type_2: any, name_2: any,
        symbolSize2: any, type_3: any, name_3: any) {
        Series.call(this, name, type, data);
        this.markPoint = new MarkPoint(symbolSize, type_1, name_1, type_2, name_2);
        this.markLine = new MarkLine(symbolSize2, type_3, name_3);
    };
}

class SeriesFull {
    barWidth: any;
    itemStyle: any;
    label: any;
    constructor(name: any, type: any, data: any,
        width: any, color: any,
        show: any, position: any, fontcolor: any, fontsize: any) {
        Series.call(this, name, type, data);
        this.barWidth = width;
        this.itemStyle = new ItemStyle(color);
        this.label = new BarLabel(show, position, fontcolor, fontsize);

    };
}

class BarTextStyle {
    color: any;
    fontSize: any;
    constructor(color: any, fontsize: any) {
        this.color = color;
        this.fontSize = fontsize;
    };
}

class BarLabel {
    normal: any;
    constructor(show: any, position: any, color: any, fontsize: any) {
        this.normal = new LabelNormal(show, position, color, fontsize);
    };
}

class LabelNormal {
    show: any;
    position: any;
    textStyle: any;
    constructor(show: any, position: any, color: any, fontsize: any) {
        this.show = show;
        this.position = position;
        this.textStyle = new BarTextStyle(color, fontsize);
    };
}

class Tooltip {
    trigger: any;
    formatter: any;
    constructor(trigger: any, formatter: any) {
        this.trigger = trigger;
        this.formatter = formatter;
    };
}

class ItemStyle {
    normal: any;
    constructor(color: any) {
        this.normal = new NormalColor(color);
    };
}
class SeriesLineStyle {
    normal: any;
    constructor(width: any) {
        this.normal = new NormalWidth(width);
    };
}

class NormalColor {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}
class NormalWidth {
    width: any;
    constructor(width: any) {
        this.width = width;
    };
}
class TooltipFull {
    trigger: any;
    backgroundColor: any;
    textStyle: any;
    axisPointer: any;
    constructor(trigger: any, backgroudcolor: any, color: any, line_color: any, point_type: any) {
        this.trigger = trigger;
        this.backgroundColor = backgroudcolor;
        this.textStyle = new TooltipTextstyle(color);
        this.axisPointer = new LineStyle(line_color, point_type);
    };
}

class TooltipTextstyle {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class LineStyle {
    lineStyle: any;
    type: any;
    constructor(color: any, type: any) {
        this.lineStyle = new LineStyleColor(color);
        this.type = type;
    };
}

class LineStyleColor {
    color: any;
    constructor(color: any) {
        this.color = color;
    };
}

class Legend {
    data: any;
    left: any;
    top: any;
    show: any;
    textStyle: any;
    constructor(data: any, left: any, top: any, show: any, color: any) {
        this.data = [data];
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

class Axislabel {
    interval: any;
    constructor(interval: any) {
        this.interval = interval;
    };
}

class MarkPoint {
    symbolSize: any;
    data: any;
    constructor(symbolSize: any, type_1: any, name_1: any, type_2: any, name_2: any) {
        this.symbolSize = symbolSize;
        this.data = [
            new MarkData(type_1, name_1),
            new MarkData(type_2, name_2)
        ];
    };
}

class MarkLine {
    symbolSize: any;
    data: any;
    constructor(symbolSize: any, type_1: any, name_1: any) {
        this.symbolSize = symbolSize;
        this.data = [
            new MarkData(type_1, name_1),
        ];
    };
}

class MarkData {
    type: any;
    name: any;
    constructor(type: any, name: any) {
        this.type = type;
        this.name = name;
    };
}


export class Stripchart {
    title: any;
    backgroundColor: any;
    xAxis: any;
    yAxis: any;
    series: any;
    tooltip: any;
    legend: any;
    constructor(name: any, position: any, fontfamily: any, fontcolor: any, fontweight: any,
        backgroundColor: any,
        type: any, xdata: any, xname: any, x_spl_show: any, x_spl_interval: any, x_spl_color: any, xAxis_tickshow: any, xAxis_linecolor: any, xAxis_margin: any, xAxis_fontsize: any,
        ytype: any, yname: any, min: any, max: any, y_spl_show: any, y_spl_interval: any, y_spl_color: any, yAxis_tickshow: any, yAxis_linecolor: any, yAxis_margin: any, yAxis_fontsize: any,
        sname: any, stype: any, data: any,
        barwidth: any, barcolor: any,
        bar_label_show: any, bar_label_position: any, bar_label_fontcolor: any, bar_label_fontsize: any,
        trigger: any, tooltip_backgroudcolor: any, tooltip_color: any, tooltip_line_color: any, point_type: any,
        legend_data: any, legend_left: any, Legend_Top: any, Legend_show: any, Legend_textcolor: any) {

        this.title = new Title(name, position, fontfamily, fontcolor, fontweight);
        this.backgroundColor = [backgroundColor];
        this.yAxis = new XaxisFull(type, xdata, xname, x_spl_show, x_spl_interval, x_spl_color, xAxis_tickshow, xAxis_linecolor, xAxis_margin, xAxis_fontsize);
        this.xAxis = new YaxisFull(ytype, yname, min, max, y_spl_show, y_spl_interval, y_spl_color, yAxis_tickshow, yAxis_linecolor, yAxis_margin, yAxis_fontsize);
        this.series = [new SeriesFull(sname, stype, data,
            barwidth, barcolor,
            bar_label_show, bar_label_position, bar_label_fontcolor, bar_label_fontsize)];
        this.tooltip = new TooltipFull(trigger, tooltip_backgroudcolor, tooltip_color, tooltip_line_color, point_type);
        this.legend = new Legend(legend_data, legend_left, Legend_Top, Legend_show, Legend_textcolor);
    }
}
