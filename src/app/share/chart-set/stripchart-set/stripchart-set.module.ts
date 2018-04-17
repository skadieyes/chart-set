import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { StripchartModule } from './stripchart/stripchart.module';
import { StripchartSetComponent } from './stripchart-set.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
        StripchartModule,
        RouterModule,
        HomeNavbarModule,
        AngularEchartsModule,
        FormsModule,
        ColorPickerModule,
        NgZorroAntdModule
    ],
    declarations: [StripchartSetComponent],
    exports: [StripchartSetComponent],
})

export class StripchartSetModule {

}
