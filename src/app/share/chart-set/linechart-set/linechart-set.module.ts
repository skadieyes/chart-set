import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LineChartSetComponent } from './linechart-set.component';

import { LineChartModule } from './linechart/linechart.module';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    imports: [CommonModule,
        LineChartModule,
        RouterModule,
        HomeNavbarModule,
        AngularEchartsModule,
        FormsModule,
        ColorPickerModule,
        NgZorroAntdModule
    ],
    declarations: [LineChartSetComponent],
    exports: [LineChartSetComponent],
})

export class LineChartSetModule {

}
