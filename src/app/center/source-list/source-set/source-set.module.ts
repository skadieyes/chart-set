import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { SourceSetComponent } from './source-set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SourceSetComponent],
    exports: [SourceSetComponent],
})

export class SourceSetModule {

}
