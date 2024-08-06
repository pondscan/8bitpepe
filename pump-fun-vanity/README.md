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

### Expected Output

When the script is run, you should expect to see an output similar to the following:

```
Uint8Array(64) [
92, 195, 233, 33, 60, 250, 25, 219, 30, 171, 19,
64, 41, 25, 11, 195, 215, 124, 72, 110, 150, 108,
150, 192, 43, 205, 149, 163, 78, 64, 137, 130, 108,
107, 228, 47, 23, 178, 0, 33, 146, 100, 33, 19,
180, 206, 105, 191, 144, 36, 218, 124, 165, 176, 187,
108, 210, 119, 223, 252, 212, 169, 132, 203
]
```
