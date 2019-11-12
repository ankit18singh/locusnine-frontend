import {NgModule} from '@angular/core';
import {EnumFormatterPipe} from './enum-formatter.pipe';

@NgModule({
    declarations: [
        EnumFormatterPipe
    ],
    exports: [
        EnumFormatterPipe
    ]
})
export class AppPipesModule {
}