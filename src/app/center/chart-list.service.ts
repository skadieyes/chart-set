import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ChartlistItemModel } from './chart-list/chart-list.model';
import { ContactService } from '../share/http/contact.service';


@Injectable()
export class ChartlistService {
    URL = 'http://116.62.119.145:8080/';
    resourceURL = 'http://127.0.0.1:4200/';
    URL_LIST = 'http://116.62.119.145:8080/questionnaires';
    URL_ITEM = 'http://116.62.119.145:8080/questionnaire/';

    URL_HOMELIST = 'http://116.62.119.145:8080/homepages';
    URL_HOMEITEM = 'http://116.62.119.145:8080/homepage/';

    URL_SOURCELIST = 'http://116.62.119.145:8080/sources';
    URL_SOURCEITEM = 'http://116.62.119.145:8080/source/';
    Location_URL = window.location.protocol + '//' + location.hostname + ':' + location.port + '/';

    constructor(private _http: ContactService, ) { }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }

    Get_Data(source: any) { // source中含 Data_source（数据源）和 Data_params 数据源参数两个字段
        // 这个方法用来向后台发送一个请求 来获取一条数据
    }

    Add_chartlistitem(chartlist: any) { // chartlist是一条图表数据
        // 这个方法用来发送一个增加一条数据的请求 请求后台为这条数据增加一个id属性
        this._http.postData(chartlist, this.URL_ITEM + 'add').subscribe(data => {
        });
    }

    Update_chartlistitem(chartlist: any) { // chartlist是一条图表数据
        // 这个方法用来更新编辑后的图表数据
        this._http.postData(chartlist, this.URL_ITEM + 'update').subscribe(data => {
        });
    }
    Get_chartlistitem(id: any) { // 图表数据中的id
        // 这个方法把id发送给后台 查询对应数据
        this._http.getData(this.URL_ITEM + id).subscribe(data => {

        });
    }

    Delete_chartlistitem(id: any) { // 图表数据中的id
        // 这个方法用来发送请求 删除对应id的那条图表数据
        this._http.getData(this.URL_ITEM + 'delete/' + id).subscribe(data => {
        });
    }

    GetAll_chartlist() {
        // 这个方法用来获取所有的图表数据
        this._http.getData(this.URL_LIST).subscribe(data => {
        });
    }


    Add_homelistitem(homelist: any) {
        this._http.postData(homelist, this.URL_HOMEITEM + 'add').subscribe(data => {
        });
    }

    Update_homelistitem(homelist: any) {

        this._http.postData(homelist, this.URL_HOMEITEM + 'update').subscribe(data => {
        });
    }

    Delete_homelistitem(id: any) {
        this._http.getData(this.URL_HOMEITEM + 'delete/' + id).subscribe(data => {
        });
    }

    Add_sourcelistitem(sourcelist: any) {
        this._http.postData(sourcelist, this.URL_SOURCEITEM + 'add').subscribe(data => {
        });
    }

    Delete_sourcelistitem(id: any) {
        this._http.getData(this.URL_SOURCEITEM + 'delete/' + id).subscribe(data => {
        });
    }
    Update_sourcelistitem(sourcelist: any) {
        this._http.postData(sourcelist, this.URL_SOURCEITEM + 'update').subscribe(data => {
        });
    }
}
