import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

/**
 * Common component class for the modal used to add/edit a user.
 *
 * @author Ankit Kumar Singh
 */
@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

    user: User = new User();
    editMode: boolean;
    title: string;
    id: number;
    onDismiss = new EventEmitter();

    constructor(public bsModalRef: BsModalRef, private userService: UserService) {
    }

    async ngOnInit() {
        if (this.id) {
            this.user.id = this.id;
            await this.userService.show(this.user);
        }
    }

    async save() {
        const promise = this.userService.save(this.user);
        await this.resolveAndDismiss(promise);
    }

    private async resolveAndDismiss(promise) {
        try {
            await promise;
            this.hide(true);
        } catch (e) {
        }
    }

    hide(refreshList?: boolean) {
        this.bsModalRef.hide();
        this.onDismiss.emit({refreshList});
    }

    async update() {
        const promise = this.userService.update(this.user);
        await this.resolveAndDismiss(promise);
    }
}
