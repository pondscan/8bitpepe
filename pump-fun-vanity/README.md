# Hex to Uint8Array Converter for Solana Private Key

## Usage

### Prerequisites

Ensure you have Node.js installed.

1. **hexToUint8Array(hex)**: 
   - Converts a hex string into a Uint8Array.
   - Throws an error if the input hex string has an odd length.

2. **privateKeyHex**: 
   - Replace `[YOUR SECRET KEY]` with your actual Solana private key in hex format.

3. **secretKeyUint8Array**: 
   - The converted Uint8Array that can be used in further operations, such as deploying tokens on Pump.fun.

### Running the Script

1. Save the code in a file named `convertHexToUint8Array.js`.
2. Open your terminal and navigate to the directory containing `convertHexToUint8Array.js`.
3. Run the script using Node.js with the following command:

   `node convertHexToUint8Array.js`

### Usage in Pump.fun Contract Deployment

The converted `Uint8Array` can be passed through the Pump.fun contract deployment process. Make sure to handle the secret key securely and never expose it in your codebase.
