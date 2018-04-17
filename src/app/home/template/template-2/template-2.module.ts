import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template2Component } from './template-2.component';

import { HomeConfigModule } from '../../../share/home-config/home-config.module';

import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
    imports: [CommonModule,
              HomeConfigModule,
              TabsModule.forRoot()
              ],
    declarations: [Template2Component],
    exports: [Template2Component],
})
export class Template2Module {

}
