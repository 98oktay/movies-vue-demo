import axios from 'axios';

const API_URL = 'http://localhost:3000';

class DataService {

    constructor() {
        this.config = {
            baseURL: API_URL,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        this.instance = axios.create(this.config);
        this.instance.interceptors.request.use(
            config => {
                config.headers["Authorization"] = localStorage.getItem('jwt') || "";
                return config;
            },
            error => {
                Promise.reject(error);
            }
        );

    }

    get(endPoint, params) {
        return this.instance.get(endPoint, {params: {...this.config.params, ...params}});
    }

    post(endPoint, formBody) {
        return this.instance.post(endPoint, formBody);
    }

    put(endPoint, formBody) {
        return this.instance.put(endPoint, formBody);
    }

    delete(endPoint, formBody) {
        return this.instance.delete(endPoint, formBody);
    }

}

export default new DataService();
