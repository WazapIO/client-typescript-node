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

export class PollMessagePayload {
    'options': Array<string>;
    'selectableOptionsCount': number;
    'title': string;
    'to': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<string>"
        },
        {
            "name": "selectableOptionsCount",
            "baseName": "selectable_options_count",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PollMessagePayload.attributeTypeMap;
    }
}
