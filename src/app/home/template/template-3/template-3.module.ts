import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template3Component } from './template-3.component';


import { HomeConfigModule } from '../../../share/home-config/home-config.module';


@NgModule({
    imports: [CommonModule,
              HomeConfigModule
              ],
    declarations: [Template3Component],
    exports: [Template3Component],
})
export class Template3Module {

}
