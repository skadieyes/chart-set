import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template1Component } from './template-1.component';


import { HomeConfigModule } from '../../../share/home-config/home-config.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
              HomeConfigModule,
              NgZorroAntdModule
              ],
    declarations: [Template1Component],
    exports: [Template1Component],
})
export class Template1Module {

}
