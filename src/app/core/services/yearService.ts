import { Injectable } from '@angular/core';
import { BaseCrudService } from './BaseCrudService';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : "root"
})
export class YearService extends BaseCrudService {

    constructor(protected http : HttpClient){
        super(http);
        this.ApiUrl = 'https://api.hcmpt.sa/api/financialYear/';
    }

    


    
}