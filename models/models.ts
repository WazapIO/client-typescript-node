import localVarRequest from 'request';

export * from './instancesInstanceKeyGroupsGroupIdProfilePicPutRequest';
export * from './instancesInstanceKeySendAudioPostRequest';
export * from './instancesInstanceKeySendDocumentPostRequest';
export * from './instancesInstanceKeySendImagePostRequest';
export * from './instancesInstanceKeySendUploadPostRequest';
export * from './instancesInstanceKeySendVideoPostRequest';
export * from './mainAPIResponse';
export * from './structsButtonMessagePayload';
export * from './structsButtonMessageWithMediaPayload';
export * from './structsContactMessagePayload';
export * from './structsContactMessagePayloadVcard';
export * from './structsFileUpload';
export * from './structsGroupCreatePayload';
export * from './structsGroupUpdateDescriptionPayload';
export * from './structsGroupUpdateNamePayload';
export * from './structsGroupUpdateParticipantsPayload';
export * from './structsListItem';
export * from './structsListMessagePayload';
export * from './structsListSection';
export * from './structsLocationMessagePayload';
export * from './structsLocationMessagePayloadLocation';
export * from './structsPollMessagePayload';
export * from './structsReplyButton';
export * from './structsSendMediaPayload';
export * from './structsTemplateButton';
export * from './structsTemplateButtonPayload';
export * from './structsTemplateButtonWithMediaPayload';
export * from './structsTextMessage';
export * from './structsUserInfoPayload';
export * from './structsWebhookPayload';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest } from './instancesInstanceKeyGroupsGroupIdProfilePicPutRequest';
import { InstancesInstanceKeySendAudioPostRequest } from './instancesInstanceKeySendAudioPostRequest';
import { InstancesInstanceKeySendDocumentPostRequest } from './instancesInstanceKeySendDocumentPostRequest';
import { InstancesInstanceKeySendImagePostRequest } from './instancesInstanceKeySendImagePostRequest';
import { InstancesInstanceKeySendUploadPostRequest } from './instancesInstanceKeySendUploadPostRequest';
import { InstancesInstanceKeySendVideoPostRequest } from './instancesInstanceKeySendVideoPostRequest';
import { MainAPIResponse } from './mainAPIResponse';
import { StructsButtonMessagePayload } from './structsButtonMessagePayload';
import { StructsButtonMessageWithMediaPayload } from './structsButtonMessageWithMediaPayload';
import { StructsContactMessagePayload } from './structsContactMessagePayload';
import { StructsContactMessagePayloadVcard } from './structsContactMessagePayloadVcard';
import { StructsFileUpload } from './structsFileUpload';
import { StructsGroupCreatePayload } from './structsGroupCreatePayload';
import { StructsGroupUpdateDescriptionPayload } from './structsGroupUpdateDescriptionPayload';
import { StructsGroupUpdateNamePayload } from './structsGroupUpdateNamePayload';
import { StructsGroupUpdateParticipantsPayload } from './structsGroupUpdateParticipantsPayload';
import { StructsListItem } from './structsListItem';
import { StructsListMessagePayload } from './structsListMessagePayload';
import { StructsListSection } from './structsListSection';
import { StructsLocationMessagePayload } from './structsLocationMessagePayload';
import { StructsLocationMessagePayloadLocation } from './structsLocationMessagePayloadLocation';
import { StructsPollMessagePayload } from './structsPollMessagePayload';
import { StructsReplyButton } from './structsReplyButton';
import { StructsSendMediaPayload } from './structsSendMediaPayload';
import { StructsTemplateButton } from './structsTemplateButton';
import { StructsTemplateButtonPayload } from './structsTemplateButtonPayload';
import { StructsTemplateButtonWithMediaPayload } from './structsTemplateButtonWithMediaPayload';
import { StructsTextMessage } from './structsTextMessage';
import { StructsUserInfoPayload } from './structsUserInfoPayload';
import { StructsWebhookPayload } from './structsWebhookPayload';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest": InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest,
    "InstancesInstanceKeySendAudioPostRequest": InstancesInstanceKeySendAudioPostRequest,
    "InstancesInstanceKeySendDocumentPostRequest": InstancesInstanceKeySendDocumentPostRequest,
    "InstancesInstanceKeySendImagePostRequest": InstancesInstanceKeySendImagePostRequest,
    "InstancesInstanceKeySendUploadPostRequest": InstancesInstanceKeySendUploadPostRequest,
    "InstancesInstanceKeySendVideoPostRequest": InstancesInstanceKeySendVideoPostRequest,
    "MainAPIResponse": MainAPIResponse,
    "StructsButtonMessagePayload": StructsButtonMessagePayload,
    "StructsButtonMessageWithMediaPayload": StructsButtonMessageWithMediaPayload,
    "StructsContactMessagePayload": StructsContactMessagePayload,
    "StructsContactMessagePayloadVcard": StructsContactMessagePayloadVcard,
    "StructsFileUpload": StructsFileUpload,
    "StructsGroupCreatePayload": StructsGroupCreatePayload,
    "StructsGroupUpdateDescriptionPayload": StructsGroupUpdateDescriptionPayload,
    "StructsGroupUpdateNamePayload": StructsGroupUpdateNamePayload,
    "StructsGroupUpdateParticipantsPayload": StructsGroupUpdateParticipantsPayload,
    "StructsListItem": StructsListItem,
    "StructsListMessagePayload": StructsListMessagePayload,
    "StructsListSection": StructsListSection,
    "StructsLocationMessagePayload": StructsLocationMessagePayload,
    "StructsLocationMessagePayloadLocation": StructsLocationMessagePayloadLocation,
    "StructsPollMessagePayload": StructsPollMessagePayload,
    "StructsReplyButton": StructsReplyButton,
    "StructsSendMediaPayload": StructsSendMediaPayload,
    "StructsTemplateButton": StructsTemplateButton,
    "StructsTemplateButtonPayload": StructsTemplateButtonPayload,
    "StructsTemplateButtonWithMediaPayload": StructsTemplateButtonWithMediaPayload,
    "StructsTextMessage": StructsTextMessage,
    "StructsUserInfoPayload": StructsUserInfoPayload,
    "StructsWebhookPayload": StructsWebhookPayload,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
