import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {BaseComponentPage} from '../base-component-page';
import {UserFilter} from '../../interface/interface';
import {BsModalService} from 'ngx-bootstrap';
import {UserModalComponent} from '../../components/user-modal/user-modal.component';

/**
 * Component class for the User Management UI.
 *
 * @author Ankit Kumar Singh
 */
@Component({
    selector: 'app-user-component',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponentPage<User> implements OnInit {

    filters: UserFilter = {};
    sortParams = {sort: 'name', order: 'asc'};

    constructor(private userService: UserService, private modalService: BsModalService) {
        super();
    }

    async ngOnInit() {
        await this.list(this.params);
    }

    addUser() {
        const config = {
            initialState: {editMode: false, title: 'Add User'}
        };

        this.openModal(config);
    }

    editUser(id: number) {
        const config = {
            initialState: {editMode: true, title: 'Edit User', id}
        };

        this.openModal(config);
    }

    private openModal(config: {}) {
        const modalRef = this.modalService.show(UserModalComponent, config);
        modalRef.content.onDismiss.subscribe((data) => {
            if (data.refreshList) {
                this.refresh();
            }
        });
    }

    async list(params?: any) {
        const promise = this.userService.list(params, this.filters);

        try {
            const items: User[] = await promise;
            this.items.push(...items);
        } catch (ignore) {
        }
    }

    searchItem() {
        if (this.sortParams) {
            this.params.sort = this.sortParams.sort;
            this.params.order = this.params.order === this.sortParams.order ? 'desc' : 'asc';
        }

        super.searchItem();
    }
}
