import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {HttpOption} from '../utils/http-option';
import {UserFilter} from '../interface/interface';

/**
 * Service class to hold the method for user management API calls.
 *
 * @author Ankit Kumar Singh
 */
@Injectable()
export class UserService {

    userList: User[] = [];

    constructor(private http: HttpClient) {
    }

    /**
     * Method to send HTTP request to list down user.
     * @param params
     * @param filters
     */
    async list(params?: { [key: string]: any; }, filters?: UserFilter) {
        const httpOption = new HttpOption(params, filters);
        let data;
        try {
            data = await this.http.get(`/user`, httpOption).toPromise();
        } catch (e) {
            throw e;
        }

        return data.items.map((item) => new User(item));
    }

    /**
     * Method to send HTTP request to save a new user.
     * @param user
     */
    async save(user: User) {
        try {
            await this.http.post('/user/save', user).toPromise();
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method to send HTTP request to update a existing user.
     * @param user
     */
    async update(user: User) {
        try {
            await this.http.put('/user/update', user).toPromise();
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method to send HTTP request to get user data.
     * @param user
     */
    async show(user: User) {
        const data: any = await this.http.get(`/user/show/${user.id}`).toPromise();
        user.bind(data);
    }

    /**
     * Method to send HTTP request to delete a existing user.
     * @param id
     */
    async delete(id: number) {
        try {
            await this.http.delete(`/user/delete/${id}`).toPromise();
        } catch (e) {
            throw e;
        }
    }
}
