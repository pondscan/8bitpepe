function hexToUint8Array(hex) {
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid hex string');
    }
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        array[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return array;
}

const privateKeyHex = '[YOUR SECRET KEY]';
const secretKeyUint8Array = hexToUint8Array(privateKeyHex);
console.log(secretKeyUint8Array);
