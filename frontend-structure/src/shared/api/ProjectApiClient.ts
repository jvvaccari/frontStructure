import { ApiClient } from './ApiClient';

export class ExecucaoPowerApiClient<T = unknown, D = unknown> extends ApiClient<T, D> {
    constructor() {
        super({
            baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }
}
