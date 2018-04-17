export class SourceSetModel {
    SOURCE_NAME: string;
    SOURCE_TYPE: number;
    SOURCE_EXPRESSION: string;
    SOURCE_PARAMS: string;
    id: any;

    constructor(name: string, type: number, expression: string, param: string) {
        this.SOURCE_NAME = name;
        this.SOURCE_TYPE = type;
        this.SOURCE_EXPRESSION = expression;
        this.SOURCE_PARAMS = param;
    }
}
