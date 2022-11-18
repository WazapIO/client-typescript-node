import localVarRequest from 'request';

export * from './aPIResponse';
export * from './buttonMessagePayload';
export * from './buttonMessageWithMediaPayload';
export * from './contactMessagePayload';
export * from './contactMessagePayloadVcard';
export * from './fileUpload';
export * from './groupCreatePayload';
export * from './groupInviteMessagePayload';
export * from './groupUpdateDescriptionPayload';
export * from './groupUpdateNamePayload';
export * from './groupUpdateParticipantsPayload';
export * from './listItem';
export * from './listMessagePayload';
export * from './listSection';
export * from './locationMessagePayload';
export * from './locationMessagePayloadLocation';
export * from './paymentRequestPayload';
export * from './pollMessagePayload';
export * from './replyButton';
export * from './sendAudioRequest';
export * from './sendDocumentRequest';
export * from './sendMediaPayload';
export * from './sendVideoRequest';
export * from './setGroupPictureRequest';
export * from './templateButton';
export * from './templateButtonPayload';
export * from './templateButtonWithMediaPayload';
export * from './textMessage';
export * from './updateProfilePicRequest';
export * from './uploadMediaRequest';
export * from './userInfoPayload';
export * from './webhookPayload';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { APIResponse } from './aPIResponse';
import { ButtonMessagePayload } from './buttonMessagePayload';
import { ButtonMessageWithMediaPayload } from './buttonMessageWithMediaPayload';
import { ContactMessagePayload } from './contactMessagePayload';
import { ContactMessagePayloadVcard } from './contactMessagePayloadVcard';
import { FileUpload } from './fileUpload';
import { GroupCreatePayload } from './groupCreatePayload';
import { GroupInviteMessagePayload } from './groupInviteMessagePayload';
import { GroupUpdateDescriptionPayload } from './groupUpdateDescriptionPayload';
import { GroupUpdateNamePayload } from './groupUpdateNamePayload';
import { GroupUpdateParticipantsPayload } from './groupUpdateParticipantsPayload';
import { ListItem } from './listItem';
import { ListMessagePayload } from './listMessagePayload';
import { ListSection } from './listSection';
import { LocationMessagePayload } from './locationMessagePayload';
import { LocationMessagePayloadLocation } from './locationMessagePayloadLocation';
import { PaymentRequestPayload } from './paymentRequestPayload';
import { PollMessagePayload } from './pollMessagePayload';
import { ReplyButton } from './replyButton';
import { SendAudioRequest } from './sendAudioRequest';
import { SendDocumentRequest } from './sendDocumentRequest';
import { SendMediaPayload } from './sendMediaPayload';
import { SendVideoRequest } from './sendVideoRequest';
import { SetGroupPictureRequest } from './setGroupPictureRequest';
import { TemplateButton } from './templateButton';
import { TemplateButtonPayload } from './templateButtonPayload';
import { TemplateButtonWithMediaPayload } from './templateButtonWithMediaPayload';
import { TextMessage } from './textMessage';
import { UpdateProfilePicRequest } from './updateProfilePicRequest';
import { UploadMediaRequest } from './uploadMediaRequest';
import { UserInfoPayload } from './userInfoPayload';
import { WebhookPayload } from './webhookPayload';

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
    "APIResponse": APIResponse,
    "ButtonMessagePayload": ButtonMessagePayload,
    "ButtonMessageWithMediaPayload": ButtonMessageWithMediaPayload,
    "ContactMessagePayload": ContactMessagePayload,
    "ContactMessagePayloadVcard": ContactMessagePayloadVcard,
    "FileUpload": FileUpload,
    "GroupCreatePayload": GroupCreatePayload,
    "GroupInviteMessagePayload": GroupInviteMessagePayload,
    "GroupUpdateDescriptionPayload": GroupUpdateDescriptionPayload,
    "GroupUpdateNamePayload": GroupUpdateNamePayload,
    "GroupUpdateParticipantsPayload": GroupUpdateParticipantsPayload,
    "ListItem": ListItem,
    "ListMessagePayload": ListMessagePayload,
    "ListSection": ListSection,
    "LocationMessagePayload": LocationMessagePayload,
    "LocationMessagePayloadLocation": LocationMessagePayloadLocation,
    "PaymentRequestPayload": PaymentRequestPayload,
    "PollMessagePayload": PollMessagePayload,
    "ReplyButton": ReplyButton,
    "SendAudioRequest": SendAudioRequest,
    "SendDocumentRequest": SendDocumentRequest,
    "SendMediaPayload": SendMediaPayload,
    "SendVideoRequest": SendVideoRequest,
    "SetGroupPictureRequest": SetGroupPictureRequest,
    "TemplateButton": TemplateButton,
    "TemplateButtonPayload": TemplateButtonPayload,
    "TemplateButtonWithMediaPayload": TemplateButtonWithMediaPayload,
    "TextMessage": TextMessage,
    "UpdateProfilePicRequest": UpdateProfilePicRequest,
    "UploadMediaRequest": UploadMediaRequest,
    "UserInfoPayload": UserInfoPayload,
    "WebhookPayload": WebhookPayload,
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
