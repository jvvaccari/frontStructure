import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IApiClient<T, D = unknown> {
    execute(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>>;
    get(
        url: string,
        config?: AxiosRequestConfig<D>
    ): Promise<AxiosResponse<T, D>>;
    post(
        url: string,
        data?: D | FormData,
        config?: AxiosRequestConfig<D>
    ): Promise<AxiosResponse<T, D>>;
    put(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<AxiosResponse<T, D>>;
    delete(
        url: string,
        config?: AxiosRequestConfig<D>
    ): Promise<AxiosResponse<T, D>>;
    patch(
        url: string,
        data?: Partial<D>,
        config?: AxiosRequestConfig<D>
    ): Promise<AxiosResponse<T, Partial<D>>>;
}
