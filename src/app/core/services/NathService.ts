import { BaseCrudService } from './BaseCrudService';
import { HttpClient } from '@angular/common/http';

export class Nath extends BaseCrudService{
    constructor(protected http : HttpClient){
        super(this.http);
    }
}