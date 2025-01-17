import {BaseIdrissCrypto} from "./baseIdrissCrypto";

const Web3 = require("web3/dist/web3.min.js");

export class IdrissCrypto extends BaseIdrissCrypto {
    constructor(polygonEndpoint: string = "https://polygon-rpc.com/") {
        super(new Web3(new Web3.providers.HttpProvider(polygonEndpoint)));
    }
    protected async digestMessage(message:string) {
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    }
}


import {Authorization, CreateOTPResponse, WrongOTPException} from "./authorization"
export {Authorization, CreateOTPResponse, WrongOTPException};