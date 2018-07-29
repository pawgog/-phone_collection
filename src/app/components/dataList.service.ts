import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataListService {

    private dataUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }
        getData() {
            return this.http.get(this.dataUrl);
        }
}
