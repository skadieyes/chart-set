import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEchartsModule } from 'angular2-echarts';
import { StripchartComponent } from './stripchart.component';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [StripchartComponent],
    exports: [StripchartComponent],
})

export class StripchartModule {

}
