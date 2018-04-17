import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CenterComponent } from './center.component';
import { CenterRoutes } from './center.routing';
import { SetModule } from '../share/chart-set/set.module';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        NgZorroAntdModule,
        CenterRoutes,
        SetModule
    ],
    declarations: [CenterComponent],
    exports: [CenterComponent],
})

export class CenterModule {

}
