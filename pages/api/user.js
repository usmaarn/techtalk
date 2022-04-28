const crypto = require('crypto');
import {encryptWithSecret, decryptWithSecret} from "next/dist/server/crypto-utils";


export default async function handle(req, res){
    const data = {id:1, name: 'Usman Muhammad', email: 'baba@test.com', token: 'mcdakvmdsaklvdsaklv'}
    const stringifiedData = JSON.stringify(data);
    const ncryptEncrypted = encryptWithSecret('secret', stringifiedData);
    const decryptedData = decryptWithSecret('secret', ncryptEncrypted);
    res.send(decryptedData)
}