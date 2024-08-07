## Instructions Data Requirements to interact with Pump.fun

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
- `mint`: (mut, signer) — provided by the user
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
