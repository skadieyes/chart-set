import { Routes } from '@angular/router';


import { HomeComponent } from './home';

import { LineChartSetComponent } from './share/chart-set/linechart-set/linechart-set.component';

import { SetComponent } from './share/chart-set/set.component';
import { ChartListComponent } from './center/chart-list/chart-list.component';
import { HomeListComponent } from './center/home-list/home-list.component';
import { SourceListComponent } from './center/source-list/source-list/source-list.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { GaugeChartSetComponent } from './share/chart-set/gaugechart-set/gaugechart-set.component';
import { CenterComponent } from './center/center.component';

export const rootRouterConfig: Routes = [
    {
        path: 'gaugechart',
        component: GaugeChartSetComponent
    },
    {
        path: 'center',
        component: CenterComponent
    },
    {
        path: 'homeset',
        component: HomeComponent
    },
    {
        path: 'homeview',
        component: HomeViewComponent
    },
    {
        path: 'set',
        component: SetComponent
    },
    {
        path: 'chartlist',
        component: ChartListComponent
    },
    {
        path: 'homelist',
        component: HomeListComponent
    },
    {
        path: 'sourcelist',
        component: SourceListComponent
    },
    {
        path: '',
        redirectTo: 'center',
        pathMatch: 'full'
    }
];

