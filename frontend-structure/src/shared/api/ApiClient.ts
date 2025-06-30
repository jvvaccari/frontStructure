import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
} from 'axios';
import { IApiClient } from './api-client.interface';

export abstract class ApiClient<T, D = unknown> implements IApiClient<T, D> {
    private http: AxiosInstance;

    constructor(private baseConfig: CreateAxiosDefaults) {
        this.http = axios.create(this.baseConfig);
    }

    async execute<U = D>(
        config: AxiosRequestConfig<U>,
    ): Promise<AxiosResponse<T, U>> {
        try {
            const response = await this.http.request<T, AxiosResponse<T, U>>(config);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(
                    error.response?.data?.message ?? 'Erro de comunicação com a API'
                );
            }
            throw error;
        }
    }

    get(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
        return this.execute({ method: 'GET', url, ...config });
    }

    post(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
        return this.execute({ method: 'POST', url, data, ...config });
    }

    put(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
        return this.execute({ method: 'PUT', url, data, ...config });
    }

    delete(url: string, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
        return this.execute({ method: 'DELETE', url, ...config });
    }

    patch(
        url: string,
        data?: Partial<D>,
        config?: AxiosRequestConfig<Partial<D>>,
    ): Promise<AxiosResponse<T, Partial<D>>> {
        return this.execute<Partial<D>>({ method: 'PATCH', url, data, ...config });
    }
}
