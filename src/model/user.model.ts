/**
 * User model class to hold user bindable data.
 *
 * @author Ankit Kumar Singh
 */
export class User {

    id: number;
    name: string;
    emailID: string;
    mobile: string;
    status: Status;
    roleType: RoleType;


    constructor(data?: any) {
        if (!data) {
            return;
        }

        this.bind(data);
    }

    bind(data: User) {
        this.id = data.id;
        this.name = data.name;
        this.emailID = data.emailID;
        this.mobile = data.mobile;
        this.status = data.status;
        this.roleType = data.roleType;
    }
}

export enum Status {
    ACTIVE = 'ACTIVE',
    IN_ACTIVE = 'IN_ACTIVE',
    PENDING = 'PENDING'
}

export enum RoleType {
    ADMIN = 'ADMIN',
    CUSTOMER_EXECUTIVE = 'CUSTOMER_EXECUTIVE'
}
