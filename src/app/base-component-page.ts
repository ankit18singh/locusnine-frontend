/**
 * Base component page to hold common methods needed in some basic components.
 *
 * @author Ankit Kumar Singh
 */
import {BasicParams} from '../interface/interface';

export abstract class BaseComponentPage<T> {

    params: BasicParams = {offset: 0, max: 20};

    items: Array<T> = [];

    protected constructor() {
    }

    abstract list(params?: any);

    paginateList() {
        this.params.offset += this.params.max;
        this.list(this.params);
    }

    refresh() {
        this.items.length = 0;
        this.params.offset = 0;
        this.list(this.params);
    }

    searchItem() {
        this.refresh();
    }
}
