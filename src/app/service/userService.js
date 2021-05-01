import ApiService from '../apiService';

class UserService extends ApiService{

    constructor(){
        super('/user')
    }

    save(user){
        return this.post('', user);
    }
}

export default UserService;