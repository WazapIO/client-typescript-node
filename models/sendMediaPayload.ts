/**
 * WhatsAPI Go
 * The V2 of WhatsAPI Go
 *
 * The version of the OpenAPI document: 2.0
 * Contact: manjit@sponsorbook.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { FileUpload } from './fileUpload';

export class SendMediaPayload {
    'caption'?: string;
    'filename'?: string;
    'mediaData': FileUpload;
    'mediaType': string;
    'to': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caption",
            "baseName": "caption",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "mediaData",
            "baseName": "media_data",
            "type": "FileUpload"
        },
        {
            "name": "mediaType",
            "baseName": "media_type",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SendMediaPayload.attributeTypeMap;
    }
}
