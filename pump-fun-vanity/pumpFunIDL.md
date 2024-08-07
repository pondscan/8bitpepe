## Instructions Data Requirements to interact with Pump.fun

from solders.pubkey import Pubkey #type: ignore

# Constants
GLOBAL = Pubkey.from_string("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf")

SYSTEM_PROGRAM = Pubkey.from_string("11111111111111111111111111111111")

TOKEN_PROGRAM = Pubkey.from_string("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")

ASSOC_TOKEN_ACC_PROG = Pubkey.from_string("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")

RENT = Pubkey.from_string("SysvarRent111111111111111111111111111111111")

EVENT_AUTHORITY = Pubkey.from_string("Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1")

PUMP_FUN_PROGRAM = Pubkey.from_string("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P")


# User-generated vanity address
VANITY_ADDRESS = Pubkey.from_string("YourVanityAddressHere")
MINT_AUTHORITY = VANITY_ADDRESS
BONDING_CURVE = Pubkey.from_string("YourBondingCurveAddressHere")  # This will be created by the program
ASSOCIATED_BONDING_CURVE = Pubkey.from_string("YourAssociatedBondingCurveAddressHere")  # This will be created by the program
MPL_TOKEN_METADATA = Pubkey.from_string("YourMPLTokenMetadataAddressHere")
METADATA = Pubkey.from_string("YourMetadataAddressHere")
USER_ACCOUNT = Pubkey.from_string("YourUserAccountAddressHere")

# Token details
NAME = "VanityToken"

SYMBOL = "VTK"

URI = "https://example.com/token-metadata"

## Instructions for Deployment via Pump.fun

### Overview
To deploy your token using Pump.fun, follow these steps. It is necessary to upload and verify the IPFS (URI) data first, and then pass it into the program to create the token. Additionally, ensure you have a secret key for the mint address (vanity address secret key).

### Steps to Deploy

1. **Upload and Verify IPFS (URI) Data:**
   - Create a JSON file with your token's metadata (name, symbol, description, image, etc.).
   - Upload this JSON file to an IPFS service (e.g., Pinata, Infura).
   - Obtain the URI (URL) of the uploaded JSON file.

2. **Prepare the Secret Key for the Mint Address:**
   - Generate a vanity address for your mint account.
   - Securely store the secret key for the vanity address as it will be used in the deployment process.

### `create` Instruction

**Accounts:**
- `mint`: (mut, signer) — **provided by the user** (your generated vanity address)
- `mintAuthority`: (not mut, not signer) — **provided by the user** (your generated vanity address or another authority)
- `bondingCurve`: (mut, not signer) — **created by the program**
- `associatedBondingCurve`: (mut, not signer) — **created by the program**
- `global`: (not mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `mplTokenMetadata`: (not mut, not signer) — **provided by the user**
- `metadata`: (mut, not signer) — **provided by the user**
- `user`: (mut, signer) — **provided by the user**
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `tokenProgram`: (not mut, not signer) — `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- `associatedTokenProgram`: (not mut, not signer) — `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`
- `rent`: (not mut, not signer) — `SysvarRent111111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:**
- `name`: string — **provided by the user**
- `symbol`: string — **provided by the user**
- `uri`: string — **provided by the user** (the URI from IPFS)

### Example Data

#### IPFS Metadata Example (token-metadata.json):

{
  "name": "VanityToken",
  "symbol": "VTK",
  "description": "A token created with a vanity address.",
  "image": "https://ipfs.io/ipfs/QmExampleImageLink"
}

# Instruction data example
instruction_data = {
    "accounts": {
        "mint": VANITY_ADDRESS,
        "mintAuthority": MINT_AUTHORITY,
        "bondingCurve": BONDING_CURVE,
        "associatedBondingCurve": ASSOCIATED_BONDING_CURVE,
        "global": GLOBAL,
        "mplTokenMetadata": MPL_TOKEN_METADATA,
        "metadata": METADATA,
        "user": USER_ACCOUNT,
        "systemProgram": SYSTEM_PROGRAM,
        "tokenProgram": TOKEN_PROGRAM,
        "associatedTokenProgram": ASSOC_TOKEN_ACC_PROG,
        "rent": RENT,
        "eventAuthority": EVENT_AUTHORITY,
        "program": PUMP_FUN_PROGRAM
    },
    "args": {
        "name": NAME,
        "symbol": SYMBOL,
        "uri": URI
    }
}


### `initialize`
**Accounts:**
- `global`: (mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`

**Args:** None

### `setParams`
**Accounts:**
- `global`: (mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:**
- `feeRecipient`: `CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM`
- `initialVirtualTokenReserves`: provided by the user
- `initialVirtualSolReserves`: provided by the user
- `initialRealTokenReserves`: provided by the user
- `tokenTotalSupply`: provided by the user
- `feeBasisPoints`: provided by the user

### `create`
**Accounts:**
- `mint`: (mut, signer) — provided by the user (your generated vanity address)
- `mintAuthority`: (not mut, not signer) — provided by the user
- `bondingCurve`: (mut, not signer) — provided by the user
- `associatedBondingCurve`: (mut, not signer) — provided by the user
- `global`: (not mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `mplTokenMetadata`: (not mut, not signer) — provided by the user
- `metadata`: (mut, not signer) — provided by the user
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `tokenProgram`: (not mut, not signer) — `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- `associatedTokenProgram`: (not mut, not signer) — `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`
- `rent`: (not mut, not signer) — `SysvarRent111111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:**
- `name`: string — provided by the user
- `symbol`: string — provided by the user
- `uri`: string — provided by the user

### `buy`
**Accounts:**
- `global`: (not mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `feeRecipient`: (mut, not signer) — `CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM`
- `mint`: (not mut, not signer) — provided by the user
- `bondingCurve`: (mut, not signer) — provided by the user
- `associatedBondingCurve`: (mut, not signer) — provided by the user
- `associatedUser`: (mut, not signer) — provided by the user
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `tokenProgram`: (not mut, not signer) — `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- `rent`: (not mut, not signer) — `SysvarRent111111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:**
- `amount`: u64 — provided by the user
- `maxSolCost`: u64 — provided by the user

### `sell`
**Accounts:**
- `global`: (not mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `feeRecipient`: (mut, not signer) — `CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM`
- `mint`: (not mut, not signer) — provided by the user
- `bondingCurve`: (mut, not signer) — provided by the user
- `associatedBondingCurve`: (mut, not signer) — provided by the user
- `associatedUser`: (mut, not signer) — provided by the user
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `associatedTokenProgram`: (not mut, not signer) — `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`
- `tokenProgram`: (not mut, not signer) — `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- `rent`: (not mut, not signer) — `SysvarRent111111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:**
- `amount`: u64 — provided by the user
- `minSolOutput`: u64 — provided by the user

### `withdraw`
**Accounts:**
- `global`: (not mut, not signer) — `4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`
- `mint`: (not mut, not signer) — provided by the user
- `bondingCurve`: (mut, not signer) — provided by the user
- `associatedBondingCurve`: (mut, not signer) — provided by the user
- `associatedUser`: (mut, not signer) — provided by the user
- `user`: (mut, signer) — provided by the user
- `systemProgram`: (not mut, not signer) — `11111111111111111111111111111111`
- `tokenProgram`: (not mut, not signer) — `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- `rent`: (not mut, not signer) — `SysvarRent111111111111111111111111111111111`
- `eventAuthority`: (not mut, not signer) — `Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`
- `program`: (not mut, not signer) — `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

**Args:** None

## To Do
- Provide the following data for the `setParams` instruction:
  - `initialVirtualTokenReserves`: u64
  - `initialVirtualSolReserves`: u64
  - `initialRealTokenReserves`: u64
  - `tokenTotalSupply`: u64
  - `feeBasisPoints`: u64

- Provide the following data for the `create` instruction:
  - `name`: string
  - `symbol`: string
  - `uri`: string

- Provide the following data for the `buy` instruction:
  - `amount`: u64
  - `maxSolCost`: u64

- Provide the following data for the `sell` instruction:
  - `amount`: u64
  - `minSolOutput`: u64

- Provide the following data for the `withdraw` instruction:
  - `mint`: publicKey
  - `bondingCurve`: publicKey
  - `associatedBondingCurve`: publicKey
  - `associatedUser`: publicKey

