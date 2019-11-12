import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

/**
 * Utility class to intercept the requests and pass required data and params with it.
 *
 * @author Ankit Kumar Singh
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private defaultPrefix = 'v1';
    private headers: any = {
        'x-requested-with': 'XMLHttpRequest'
    };

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiURL = environment.apiURL;

        const modifiedURL: string = request.url;

        const params = request.params;
        const url = `${apiURL}/${this.defaultPrefix}${modifiedURL}`;
        const modifiedRequestConfig = {url, params, setHeaders: this.headers};

        request = request.clone(modifiedRequestConfig);

        return next.handle(request);
    }
}
