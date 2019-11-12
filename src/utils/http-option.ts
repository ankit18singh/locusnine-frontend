import {HttpHeaders, HttpParams} from '@angular/common/http';

/**
 * Utility class to bind the filter data with the request.
 *
 * @author Ankit Kumar Singh
 */
export class HttpOption {

    readonly headers: HttpHeaders;
    params: HttpParams;
    observe: 'body';
    reportProgress: boolean;
    responseType: 'json';
    withCredentials: boolean;

    constructor(params?: { [key: string]: any; }, filters?: any) {
        if (params) {
            this.params = new HttpParams({fromObject: params});
        } else {
            this.params = new HttpParams();
        }

        if (filters) {
            this.addFilters(filters);
        }

        this.headers = new HttpHeaders();
    }

    addFilters(filters?: any) {
        this.params = this.params.set('filters', JSON.stringify(filters));
    }
}
