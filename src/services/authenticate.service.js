import BaseService from './base.service'
import axios from 'axios';
export default class AuthenticateService extends BaseService {
    constructor(){
        super({endpoint: "users"})
    }
    async login(user) {
        var result = await axios({
            method: 'POST',
            url: `${this.api}/${this.endpoint}/login`,
            data: user
        })

        return result;
    }
}
