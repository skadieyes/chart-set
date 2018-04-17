export class HomeSetModel {
    page_title: string;
    chart_arr: object;
    template_name: string;
    id: any;
    constructor(title: any, chart_arr: any, template_name: any) {
        this.page_title = title;
        this.chart_arr = chart_arr;
        this.template_name = template_name;
        this.id = '';
    }
}

