import type {AxiosInstance} from "axios";
import axios from "axios";

export abstract class BaseService {
    
    protected abstract path: string
    
    protected httpClient: AxiosInstance;
    
    constructor() {
        this.httpClient = axios.create()
    }
    
    protected host(
        queryStringObject?: { [key: string]: any })
    {
        let queryString = '';
        
        if (queryStringObject && Object.keys(queryStringObject).length) {
            queryString = '?' + Object.keys(queryStringObject)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryStringObject[key])}`)
                .join('&');
        }
        
        return import.meta.env['VITE_API_HOST'] + this.path +  queryString;
    }
    public get<LIST>(queryStringObject?: { [key: string]: any }, id?: number): Promise<{ data: Array<LIST> }> {
        
        let host = this.host(queryStringObject)
        
        if (id) {
            host += `/${id}`;
        }
        
        return this.httpClient.get(
            host
        );
    }
    
    public post<T>(data: T) {
        let host = this.host();
        
        return this.httpClient.post(
            host,
            data
        );
    }
    
    public put<T>(id: any, data: T) {
        let host = this.host() + '/' +id;
        
        return this.httpClient.put(
            host,
            data
        );
    }
    
    public delete(id: number) {
        return this.httpClient.delete(
            this.host() + '/' + id
        )
    }
}