import ApiService from '../apiService';

class AuthService extends ApiService{

    constructor(){
        super('/auth')
    }
    authUser(credentials){
        return this.post('/login', credentials)
    }
}

export default AuthService;