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
class AxisTextstyle {
    fontSize: any;
    constructor(fontsize: any) {
        this.fontSize = fontsize;
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

class SplLinestyleColor {
    color: any;
    constructor(color: any) {
        this.color = [color];
    };
}

class AxisLine {
    lineStyle: any;
    constructor(color: any) {
        this.lineStyle = new AxiLineStyle(color);
    };
}

class AxiLineStyle {
    color: any;
    constructor(color: any) {
        this.color = color;
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
class Axislabel {
    interval: any;
    constructor(interval: any) {
        this.interval = interval;
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

class SeriesFull {
    markPoint: any;
    markLine: any;
    smooth: any;
    showSymbol: any;
    symbol: any;
    symbolSize: any;
    itemStyle: any;
    lineStyle: any;
    constructor(name: any, type: any, data: any,
        symbolSize: any, type_1: any, name_1: any, type_2: any, name_2: any,
        symbolSize2: any, symbolLineSize: any, type_3: any, name_3: any,
        smooth: any, showsymbol: any, symbol: any, symbolsize: any,
        color: any, width: any) {
        Series.call(this, name, type, data);
        this.markPoint = new MarkPoint(symbolSize, type_1, name_1, type_2, name_2);
        this.markLine = new MarkLine(symbolSize2, symbolLineSize, type_3, name_3);
        this.smooth = smooth;
        this.showSymbol = showsymbol;
        this.symbol = symbol;
        this.symbolSize = symbolsize;
        this.itemStyle = new ItemStyle(color);
        this.lineStyle = new SeriesLineStyle(width);
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
    lineStyle: any;
    data: any;
    constructor(symbolSize: any, symbolLineSize: any, type_1: any, name_1: any) {
        this.symbolSize = symbolSize;
        this.lineStyle = new MarkLineNormal(symbolLineSize);
        this.data = [
            new MarkData(type_1, name_1),
        ];
    };
}

class MarkLineNormal {
    normal: any;
    constructor(width: any) {
        this.normal = new Width(width);
    };
}

class Width {
    width: any;
    constructor(width: any) {
        this.width = width;
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

export class LineChart {
    title: any;
    color: any;
    backgroundColor: any;
    xAxis: any;
    yAxis: any;
    series: any;
    tooltip: any;
    legend: any;
    constructor(name: any, position: any, fontfamily: any, fontcolor: any, fontweight: any,
        color: any,
        backgroundColor: any,
        type: any, xdata: any, xname: any, x_spl_show: any, x_spl_interval: any, x_spl_color: any, xAxis_tickshow: any, xAxis_linecolor: any, xAxis_margin: any, xAxis_fontsize: any,
        ytype: any, yname: any, min: any, max: any, y_spl_show: any, y_spl_interval: any, y_spl_color: any, yAxis_tickshow: any, yAxis_linecolor: any, yAxis_margin: any, yAxis_fontsize: any,
        sname: any, stype: any, data: any,
        symbolSize: any, type_1: any, name_1: any, type_2: any, name_2: any,
        symbolSize2: any, symbolLineSize: any, type_3: any, name_3: any,
        smooth: any, showsymbol: any, symbol: any, symbolsize: any,
        linecolor: any, linewidth: any,
        trigger: any, tooltip_backgroudcolor: any, tooltip_color: any, tooltip_line_color: any, point_type: any,
        legend_data: any, legend_left: any, Legend_Top: any, Legend_show: any, Legend_textcolor: any) {

        this.title = new Title(name, position, fontfamily, fontcolor, fontweight);
        this.color = [color];
        this.backgroundColor = [backgroundColor];
        this.xAxis = new XaxisFull(type, xdata, xname, x_spl_show, x_spl_interval, x_spl_color, xAxis_tickshow, xAxis_linecolor, xAxis_margin, xAxis_fontsize);
        this.yAxis = new YaxisFull(ytype, yname, min, max, y_spl_show, y_spl_interval, y_spl_color, yAxis_tickshow, yAxis_linecolor, yAxis_margin, yAxis_fontsize);
        this.series = [new SeriesFull(sname, stype, data,
            symbolSize, type_1, name_1, type_2, name_2,
            symbolSize2, symbolLineSize, type_3, name_3,
            smooth, showsymbol, symbol, symbolsize,
            linecolor, linewidth)];
        this.tooltip = new TooltipFull(trigger, tooltip_backgroudcolor, tooltip_color, tooltip_line_color, point_type);
        this.legend = new Legend(legend_data, legend_left, Legend_Top, Legend_show, Legend_textcolor);
    }
}





