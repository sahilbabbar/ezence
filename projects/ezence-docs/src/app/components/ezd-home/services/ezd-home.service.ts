import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EzdHomeModel } from '../utilities/homeModel.utility';

const HOME_DATA_LOCATION = 'assets/home/data.json';

@Injectable({
    providedIn: 'root'
})
export class EzdHomeService {
    constructor(private http: HttpClient) {}

    fetchHomeData() {
        return this.http.get<EzdHomeModel>(HOME_DATA_LOCATION);
    }
}
