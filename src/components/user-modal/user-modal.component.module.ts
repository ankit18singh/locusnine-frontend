import {NgModule} from '@angular/core';
import {UserModalComponent} from './user-modal.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserModalComponent
    ],
    exports: [
        UserModalComponent
    ]
})
export class UserModalComponentModule {
}
