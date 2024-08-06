# Pump.fun Token Metadata

Outline of pump.fun metadata requirements.

## Metadata Structure

The metadata for a Pump.fun token includes the following fields:

### Example Metadata

```json
{
    "name": "8-Bit Pepe",
    "symbol": "pepe",
    "description": "In the vast, ever-expanding universe of memes, one character stands out as the true pioneer: Pepe the Frog. Born in the early days of internet culture, Pepe became an emblem of online communities, bringing joy, laughter, and sometimes controversy. As the meme world evolved, so did Pepe, transcending into countless forms and iterations. But now, the original Pepe returns in a new, immutable form as the 8bit Pepe Coin.",
    "image": "https://cf-ipfs.com/ipfs/QmQS3utSndWFiWuhHj9gUUJaCAXzp5yGjE3MemtacYR3N8",
    "showName": true,
    "createdOn": "https://pump.fun",
    "twitter": "https://x.com/real8bitpepe"
    "website": "https://www.8-bitpepe.com"
    "telegram": "https://t.me/EightBitPepePortal"
}
```

### Field Descriptions

- **name**: The name of the token. Example: `"8-Bit Pepe"`
- **symbol**: The symbol or ticker of the token. Example: `"pepe"`
- **description**: A detailed description of the token. Example: `"In the vast, ever-expanding universe of memes, one character stands out as the true pioneer: Pepe the Frog. Born in the early days of internet culture, Pepe became an emblem of online communities, bringing joy, laughter, and sometimes controversy. As the meme world evolved, so did Pepe, transcending into countless forms and iterations. But now, the original Pepe returns in a new, immutable form as the 8bit Pepe Coin."`
- **image**: A URL to the image associated with the token. Example: `"https://cf-ipfs.com/ipfs/QmQS3utSndWFiWuhHj9gUUJaCAXzp5yGjE3MemtacYR3N8"`
- **showName**: A boolean indicating whether to show the name of the token. Example: `true`
- **createdOn**: A URL indicating where the token was created. Example: `"https://pump.fun"`
- **telegram**: A URL to the Telegram group associated with the token. Example: `"https://t.me/+r6gK6R1lmBM2OWQ5"`

## Metaplex Metadata

The on-chain data follows the Metaplex standard and includes the following fields:

### Example On-Chain Metadata

```
{
    "key": 4,
    "updateAuthority": "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM",
    "mint": "8t59RDhHiYva8yDYEAtbQ1Dv1BZzFerGDeadesZG8bit",
    "data": {
        "name": "8-Bit Pepe",
        "symbol": "pepe",
        "uri": "https://cf-ipfs.com/ipfs/QmZUZ4HevyQZz7RzJonA5meatTHG5VBY42W33dsZLTZfSM",
        "sellerFeeBasisPoints": 0
    },
    "primarySaleHappened": 0,
    "isMutable": 0,
    "editionNonce": 252,
    "tokenStandard": 2
}
```

### Field Descriptions

- **key**: Identifier for the type of metadata. Example: `4`
- **updateAuthority**: The public key of the update authority. Example: `"TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM"`
- **mint**: The public key of the token mint. Example: `"8t59RDhHiYva8yDYEAtbQ1Dv1BZzFerGDeadesZG8bit"`
- **data**: A nested object containing the following fields:
  - **name**: The name of the token. Example: `"8-Bit Pepe"`
  - **symbol**: The symbol of the token. Example: `"pepe"`
  - **uri**: A URL to the token's metadata. Example: `"https://cf-ipfs.com/ipfs/QmZUZ4HevyQZz7RzJonA5meatTHG5VBY42W33dsZLTZfSM"`
  - **sellerFeeBasisPoints**: The seller fee in basis points. Example: `0`
- **primarySaleHappened**: Indicates if the primary sale has happened. Example: `0`
- **isMutable**: Indicates if the metadata is mutable. Example: `0`
- **editionNonce**: The nonce for the edition. Example: `252`
- **tokenStandard**: The standard of the token. Example: `2`

## Creating Metadata

To create a Pump.fun token, you need to ensure that the metadata JSON is correctly formatted and accessible at the specified URI. This metadata is essential for the proper representation and management of the token on the Solana blockchain.

## Contact

For any questions or support, please open an issue or contact us at [your email].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
