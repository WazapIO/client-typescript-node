export * from './groupManagementApi';
import { GroupManagementApi } from './groupManagementApi';
export * from './instanceApi';
import { InstanceApi } from './instanceApi';
export * from './messageSendingApi';
import { MessageSendingApi } from './messageSendingApi';
export * from './miscellaneousApi';
import { MiscellaneousApi } from './miscellaneousApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [GroupManagementApi, InstanceApi, MessageSendingApi, MiscellaneousApi];
