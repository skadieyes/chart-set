import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartComponent } from './piechart.component';
import { AngularEchartsModule } from 'angular2-echarts';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [PieChartComponent],
    exports: [PieChartComponent],
})

export class PieChartModule {

}
