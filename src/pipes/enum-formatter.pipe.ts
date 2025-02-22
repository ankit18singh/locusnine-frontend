import {Pipe, PipeTransform} from '@angular/core';

/**
 * Custom pipe to transform enum text.
 *
 * @author Ankit Kumar Singh
 */
@Pipe({
    name: 'enumFormatter'
})
export class EnumFormatterPipe implements PipeTransform {

    private titleCase = (word) => {
        return word.replace(/(^|\s)\S/g, (text) => {
            return text.toUpperCase();
        });
    };

    transform(value: string): string {
        if (!value) {
            return '';
        }

        return this.titleCase(value.toLowerCase().split('_').join(' '));
    }
}
