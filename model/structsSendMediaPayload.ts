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
import { StructsFileUpload } from './structsFileUpload';

export class StructsSendMediaPayload {
    'caption'?: string;
    'filename'?: string;
    'mediaData': StructsFileUpload;
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
            "type": "StructsFileUpload"
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
        return StructsSendMediaPayload.attributeTypeMap;
    }
}

