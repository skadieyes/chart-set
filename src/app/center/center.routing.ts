import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CenterComponent } from './center.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { HomeListComponent } from './home-list/home-list.component';
import { SourceListComponent } from './source-list/source-list/source-list.component';
import { HomeComponent } from '../home/home.component';
import { HomeViewComponent } from '../home/home-view/home-view.component';
import { SetComponent } from '../share/chart-set/set.component';

export const routes: Routes = [
    {
        path: 'center',
        component: CenterComponent,
        children: [
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
                path: 'homeset',
                component: HomeComponent
            },
            {
                path: 'homeview',
                component: HomeViewComponent
            },
            {
                path: 'chartset',
                component: SetComponent
            }
        ]
    }
];

export const CenterRoutes: ModuleWithProviders = RouterModule.forChild(routes);
