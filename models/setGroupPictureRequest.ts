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

export class SetGroupPictureRequest {
    /**
    * Group picture in JPEG
    */
    'file': RequestFile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "RequestFile"
        }    ];

    static getAttributeTypeMap() {
        return SetGroupPictureRequest.attributeTypeMap;
    }
}

