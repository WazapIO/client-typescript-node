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
import { StructsTemplateButton } from './structsTemplateButton';

export class StructsTemplateButtonPayload {
    'buttons': Array<StructsTemplateButton>;
    'contentText'?: string;
    'footer'?: string;
    'header'?: string;
    'to': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<StructsTemplateButton>"
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
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StructsTemplateButtonPayload.attributeTypeMap;
    }
}

