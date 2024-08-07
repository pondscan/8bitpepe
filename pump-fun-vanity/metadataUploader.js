const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

// Replace with your Pinata API key
const JWT = 'YOUR-API-KEY';

async function uploadToPinata(metadataPath) {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const formData = new FormData();
    
    const metadataFile = fs.createReadStream(metadataPath);
    formData.append('file', metadataFile);

    const pinataMetadata = JSON.stringify({
        name: 'Token Metadata',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
        cidVersion: 0,
    });
    formData.append('pinataOptions', pinataOptions);

    try {
        const res = await axios.post(url, formData, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`
            }
        });
        return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    } catch (error) {
        console.error('Error uploading to Pinata:', error.response ? error.response.data : error.message);
        throw new Error('Failed to upload metadata to Pinata');
    }
}

function createMetadataFile(name, symbol, description, imageUrl, twitter, website, telegram) {
    const metadata = {
        name: name,
        symbol: symbol,
        description: description,
        image: imageUrl,
        showName: true,
        createdOn: "https://pump.fun",
    };

    if (twitter) metadata.twitter = twitter;
    if (website) metadata.website = website;
    if (telegram) metadata.telegram = telegram;

    const metadataPath = path.join(__dirname, 'metadata.json');
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

    return metadataPath;
}

async function main() {
    console.log('Please provide the following details to create the metadata JSON:');
    
    const name = readlineSync.question('Name: ');
    const symbol = readlineSync.question('Symbol: ');
    const description = readlineSync.question('Description: ');
    const imageUrl = readlineSync.question('Image URL: ');
    const twitter = readlineSync.question('Twitter (optional): ');
    const website = readlineSync.question('Website (optional): ');
    const telegram = readlineSync.question('Telegram (optional): ');

    console.log('Creating metadata file...');
    const metadataPath = createMetadataFile(name, symbol, description, imageUrl, twitter, website, telegram);

    console.log('Uploading metadata to Pinata...');
    const ipfsUrl = await uploadToPinata(metadataPath);

    console.log('Metadata uploaded to IPFS:');
    console.log(ipfsUrl);
}

main().catch((error) => {
    console.error('Error in script execution:', error);
});
