export class ChartlistItemModel {
    id: number;
    Title_Text: string;
    Series_Type: string;
    constructor(id: any, title: any, type: any) {
        this.id = id;
        this.Title_Text = title;
        this.Series_Type = type;
    }
}

