import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class mainService {

    constructor(private _httpClient : HttpClient){

    }
    getTimezone(){
        return this._httpClient.get('http://worldtimeapi.org/api/timezone/');
    }

    getSpecificTime(timezone){
        return this._httpClient.get('http://worldtimeapi.org/api/timezone/' + timezone);
    }
}
