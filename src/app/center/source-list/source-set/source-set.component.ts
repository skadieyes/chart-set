import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { FormsModule, FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SourceSetModel } from './source-set.model';
import { ChartlistService } from '../../chart-list.service';
import { EditService } from '../../../share/edit-list.service';
import { ContactService } from '../../../share/http/contact.service';

declare var $: any;
declare var id: any;

@Component({
    selector: 'cst-source-set',
    templateUrl: './source-set.component.html',
    styleUrls: ['./source-set.component.scss'],
    providers: [ChartlistService]
})


export class SourceSetComponent implements OnInit {

    @ViewChild('childModal') public childModal: ModalDirective;
    @Output() additemEvent = new EventEmitter<any>();
    @Input() editdata: SourceSetModel;
    myForm: FormGroup;

    SOURCE_TYPEs: object;

    SOURCE_NAME: AbstractControl;
    constructor(private fb: FormBuilder,
        private _chartlist: ChartlistService,
        private _edit: EditService,
        private _http: ContactService) {
        this.myForm = fb.group({
            'SOURCE_NAME': ['', Validators.compose([
                Validators.required])],
            'SOURCE_TYPE': [0],
            'SOURCE_EXPRESSION': [''],
            'SOURCE_PARAMS': ['']
        });
        this.SOURCE_NAME = this.myForm.controls['SOURCE_NAME'];
        this.SOURCE_TYPEs = [
            { 'value': 0, 'name': '表或视图' },
            { 'value': 1, 'name': '存储过程' }
        ];
    }

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    ngOnInit() {
    }

    Edit() {
        this.editdata = this._edit.edit_data;
        this.myForm = this.fb.group({
            'SOURCE_NAME': [this.editdata.SOURCE_NAME, Validators.compose([
                Validators.required])],
            'SOURCE_TYPE': [this.editdata.SOURCE_TYPE],
            'SOURCE_EXPRESSION': [this.editdata.SOURCE_EXPRESSION],
            'SOURCE_PARAMS': [this.editdata.SOURCE_PARAMS]
        });
    }

    RenewForm() {
        this.myForm = this.fb.group({
            'SOURCE_NAME': ['', Validators.compose([
                Validators.required])],
            'SOURCE_TYPE': [0],
            'SOURCE_EXPRESSION': [''],
            'SOURCE_PARAMS': ['']
        });
    }

    onSubmit(value: string): void {
        if (this._edit.flag === false) {
            this._http.postData(value, this._chartlist.URL_SOURCEITEM + 'add').subscribe(data => {
                this.additemEvent.emit(value);
            });
        } else if (this._edit.flag === true) {
            this.editdata.SOURCE_NAME = this.myForm.controls['SOURCE_NAME'].value;
            this.editdata.SOURCE_TYPE = this.myForm.controls['SOURCE_TYPE'].value;
            this.editdata.SOURCE_EXPRESSION = this.myForm.controls['SOURCE_EXPRESSION'].value;
            this.editdata.SOURCE_PARAMS = this.myForm.controls['SOURCE_PARAMS'].value;
            this._chartlist.Update_sourcelistitem(this.editdata);
            this._edit.isEdited(false, this.editdata);
        }
        this.hideChildModal();
    }
}
