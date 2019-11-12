import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AppPipesModule} from '../../pipes/app-pipes.module';
import {ModalModule} from 'ngx-bootstrap';
import {UserService} from '../../service/user.service';
import {UserModalComponent} from '../../components/user-modal/user-modal.component';
import {UserModalComponentModule} from '../../components/user-modal/user-modal.component.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    entryComponents: [
        UserModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
        AppPipesModule,
        UserModalComponentModule,
        ModalModule.forRoot()
    ],
    providers: [
        UserService
    ]
})
export class UserComponentModule {

}
