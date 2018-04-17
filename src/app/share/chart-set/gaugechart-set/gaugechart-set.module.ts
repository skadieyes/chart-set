import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { GaugeChartModule } from './gaugechart/gaugechart.module';
import { GaugeChartSetComponent } from './gaugechart-set.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
        GaugeChartModule,
        RouterModule,
        HomeNavbarModule,
        AngularEchartsModule,
        FormsModule,
        ColorPickerModule,
        NgZorroAntdModule
    ],
    declarations: [GaugeChartSetComponent],
    exports: [GaugeChartSetComponent],
})

export class GaugeChartSetModule {

}
