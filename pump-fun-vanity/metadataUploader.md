# Pinata Metadata Uploader

This script helps you create and upload token metadata to Pinata, returning the IPFS URL which is required when creating a token via pump.fun.

## Prerequisites

- Node.js installed on your machine
- A Pinata account with a JWT token

## Setup

1. **Copy metadataUploader.js**
   - Create this file in your VS code project.

2. **Install Dependencies**
   - Open the terminal in VS Code.
   - Run `npm install` to install the required dependencies.

3. **Update Pinata API key**
   - Open `uploadMetadata.js`.
   - Replace `'your-api-key'` with your actual Pinata API key.

## Usage

1. **Run the Script**
   - In the terminal, run `node uploadMetadata.js`.

2. **Enter Metadata Details**
   - Follow the prompts to enter the required and optional metadata details.
   - The script will create a metadata JSON file and upload it to Pinata.
   - The IPFS URL for the uploaded metadata will be displayed.
