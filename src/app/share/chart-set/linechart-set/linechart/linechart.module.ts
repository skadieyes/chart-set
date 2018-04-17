import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineChartComponent } from './linechart.component';
import { AngularEchartsModule } from 'angular2-echarts';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [LineChartComponent],
    exports: [LineChartComponent],
})

export class LineChartModule {

}
