import { ProjectApiClient } from '@/shared/api/client';

import { Service } from './service';

const apiClient = new ProjectApiClient();

// service
export const service = new Service(apiClient);
