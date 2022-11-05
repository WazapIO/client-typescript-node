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
import { TemplateButton } from './templateButton';

export class TemplateButtonWithMediaPayload {
    'buttons': Array<TemplateButton>;
    'contentText'?: string;
    'footer'?: string;
    'media': FileUpload;
    'to': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<TemplateButton>"
        },
        {
            "name": "contentText",
            "baseName": "content_text",
            "type": "string"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "FileUpload"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TemplateButtonWithMediaPayload.attributeTypeMap;
    }
}

