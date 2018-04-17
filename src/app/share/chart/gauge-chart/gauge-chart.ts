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

class Series {
    name: any;
    type: any;
    data: any;
    splitNumber: any;
    min: any;
    max: any;
    radius: any;
    startAngle: any;
    endAngle: any;
    axisLine: any;
    axisTick: any;
    splitLine: any;
    axisLabel: any;
    pointer: any;
    detail: any;
    constructor(name: any, type: any, data: any,
        splitNumber: any, min: any, max: any, radius: any, startAngle: any, endAngle: any,
        show: any, color: any, width: any,
        tick_show: any, tick_showsplitNumber: any, ticklength: any, tick_showcolor: any, tick_showwidth: any,
        spl_show: any, splength: any, spl_color: any, spl_width: any,
        lable_show: any, distance: any, label_color: any, fontsize: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any,
        point_show: any, point_length: any, point_width: any,
        detail_show: any, detail_offsetCenter: any, detail_color: any, detail_fontsize: any) {
        this.name = name;
        this.type = type;
        this.data = data;

        this.splitNumber = splitNumber;
        this.min = min;
        this.max = max;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;

        this.axisLine = new AxisLine(show, color, width);
        this.axisTick = new AxisTick(tick_show, tick_showsplitNumber, ticklength, tick_showcolor, tick_showwidth);
        this.splitLine = new SplitLine(spl_show, splength, spl_color, spl_width);
        this.axisLabel = new AxisLabel(lable_show, distance, label_color, fontsize,
            min, max,
            param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11);
        this.pointer = new Point(point_show, point_length, point_width);
        this.detail = new Detail(detail_show, detail_offsetCenter, detail_color, detail_fontsize);
    };
}

class Detail {
    show: any;
    offsetCenter: any;
    textStyle: any;
    constructor(show: any, offsetCenter: any, color: any, fontsize: any) {
        this.show = show;
        this.offsetCenter = offsetCenter;
        this.textStyle = new Textstyle(color, fontsize);
    };
}

class Point {
    show: any;
    length: any;
    width: any;
    constructor(show: any, point_length: any, point_width: any) {
        this.show = show;
        this.length = point_length;
        this.width = point_width;
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

class AxisLabel {
    show: any;
    distance: any;
    textStyle: any;
    formatter: any;
    constructor(show: any, distance: any, color: any, fontsize: any,
        Min: any, Max: any,
        param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any) {
        const value = '';
        this.show = show;
        this.distance = distance;
        this.textStyle = new Textstyle(color, fontsize);
        this.formatter = function (e: any) {
            const max = parseInt(Max, 10);
            const min = parseInt(Min, 10);
            const sum = max - min;
            const piece = sum / 10;
            switch (e + '') {
                case min + '':
                    return param1;
                case min + piece * 1 + '':
                    return param2;
                case min + piece * 2 + '':
                    return param3;
                case min + piece * 3 + '':
                    return param4;
                case min + piece * 4 + '':
                    return param5;
                case min + piece * 5 + '':
                    return param6;
                case min + piece * 6 + '':
                    return param7;
                case min + piece * 7 + '':
                    return param8;
                case min + piece * 8 + '':
                    return param9;
                case min + piece * 9 + '':
                    return param10;
                case max + '':
                    return param11;
                default:
                    return value;
            }
        };
    };
}

class SplitLine {
    show: any;
    length: any;
    lineStyle: any;
    constructor(show: any, splength: any,
        color: any, width: any) {
        this.show = show;
        this.length = splength;
        this.lineStyle = new SplitLineLineStyle(color, width);
    };
}

class SplitLineLineStyle {
    color: any;
    width: any;
    constructor(color: any, width: any) {
        this.color = color;
        this.width = width;
    };
}

class AxisTick {
    show: any;
    splitNumber: any;
    length: any;
    lineStyle: any;
    constructor(show: any, splitNumber: any, ticklength: any,
        color: any, width: any) {
        this.show = show;
        this.splitNumber = splitNumber;
        this.length = ticklength;
        this.lineStyle = new AxisTickLineStyle(color, width);
    };
}

class AxisTickLineStyle {
    color: any;
    width: any;
    constructor(color: any, width: any) {
        this.color = color;
        this.width = width;
    };
}

class AxisLine {
    show: any;
    lineStyle: any;
    constructor(show: any, color: any, width: any) {
        this.show = show;
        this.lineStyle = new AxisLineLineStyle(color, width);
    };

}

class AxisLineLineStyle {
    color: any;
    width: any;
    constructor(color: any, width: any) {
        this.color = color;
        this.width = width;
    };
}

export class GaugeChart {
    title: any;
    backgroundColor: any;
    tooltip: any;
    series: any;
    constructor(name: any, position: any, fontfamily: any, color: any, fontweight: any,
        backgroundColor: any,
        tool_backgroudcolor: any, tool_color: any, trigger: any,
        sname: any, type: any, data: any,
        splitNumber: any, min: any, max: any, radius: any, startAngle: any, endAngle: any,
        show: any, chart_color: any, width: any,
        tick_show: any, tick_showsplitNumber: any, ticklength: any, tick_showcolor: any, tick_showwidth: any,
        spl_show: any, splength: any, spl_color: any, spl_width: any,
        lable_show: any, distance: any, label_color: any, fontsize: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any,
        point_show: any, point_length: any, point_width: any,
        detail_show: any, detail_offsetCenter: any, detail_color: any, detail_fontsize: any) {
        this.title = new Title(name, position, fontfamily, color, fontweight);
        this.backgroundColor = [backgroundColor];
        this.tooltip = new TooltipFull(tool_backgroudcolor, tool_color, trigger);
        this.series = [new Series(sname, type, data,
            splitNumber, min, max, radius, startAngle, endAngle,
            show, chart_color, width,
            tick_show, tick_showsplitNumber, ticklength, tick_showcolor, tick_showwidth,
            spl_show, splength, spl_color, spl_width,
            lable_show, distance, label_color, fontsize, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11,
            point_show, point_length, point_width,
            detail_show, detail_offsetCenter, detail_color, detail_fontsize)];
    }

}
