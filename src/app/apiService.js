import axios from 'axios';

const HttpCliente = axios.create({
    baseURL: 'http://localhost:3000'
})

class ApiService {
    constructor(apiurl){
        this.apiurl = apiurl;

    }

    post(url, object){
        const requestUrl = `${this.apiurl}${url}`
        return HttpCliente.post(requestUrl, object);
    }
    put(url, object){
        const requestUrl = `${this.apiurl}${url}`
        return HttpCliente.put(requestUrl, object);
    }
    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return HttpCliente.delete(requestUrl)
    }
    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return HttpCliente.get(requestUrl)
    }
}

export default ApiService;