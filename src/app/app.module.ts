import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HomeModule } from './home/home.module';

import { HomeNavbarModule } from './home-navbar/home-navbar.module';
import { AngularEchartsModule } from 'angular2-echarts';

import { LineChartSetModule } from './share/chart-set/linechart-set/linechart-set.module';
import { SetModule } from './share/chart-set/set.module';
import { ChartListModule } from './center/chart-list/chart-list.module';
import { HomeListModule } from './center/home-list/home-list.module';
import { SourceListModule } from './center/source-list/source-list/source-list.module';
import { HomeViewModule } from './home/home-view/home-view.module';
import { PieChartSetModule } from './share/chart-set/piechart-set/piechart-set.module';
import { GaugeChartSetModule } from './share/chart-set/gaugechart-set/gaugechart-set.module';
import { StripchartSetModule } from './share/chart-set/stripchart-set/stripchart-set.module';
import { MapChartSetModule } from './share/chart-set/mapchart-set/mapchart-set.module';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CenterModule } from './center/center.module';

@NgModule({
    imports: [
        BrowserModule,
        //  CoreModule,
        // NotificationsModule.forRoot(),
        BrowserAnimationsModule,
        NoopAnimationsModule,
        //  HttpModule,
        HttpModule,
        HomeModule,
        HomeNavbarModule,
        SetModule,
        AngularEchartsModule,
        ChartListModule,
        SourceListModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
        HomeListModule,
        HomeViewModule,
        PieChartSetModule,
        GaugeChartSetModule,
        StripchartSetModule,
        MapChartSetModule,
        NgZorroAntdModule.forRoot(),
        CenterModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class AppModule { }
