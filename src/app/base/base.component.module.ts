import {NgModule} from '@angular/core';
import {NavbarComponentModule} from '../../components/navbar/navbar.component.module';
import {BaseComponent} from './base.component';
import {UserComponentModule} from '../user/user.component.module';

@NgModule({
    declarations: [
        BaseComponent
    ],
    exports: [
        BaseComponent
    ],
    imports: [
        NavbarComponentModule,
        UserComponentModule
    ]
})
export class BaseComponentModule {

}
