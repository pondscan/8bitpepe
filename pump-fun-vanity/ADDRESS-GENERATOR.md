# Vanity Solana Address Generator

Generate a Solana address starting or ending with any letter or phrase using [vanity-solana GitHub](https://github.com/m2-labs/vanity-solana).

## Installation

To install the `vanity-solana` package globally using npm, run the following command:

```
npm install -g vanity-solana
```

## Usage

To generate a Solana address with a specific prefix or suffix, use the `vanity-solana` command followed by the desired options.

```
vanity-solana --prefix m --suffix 2
```

## Options

Usage: vanity-solana [options]

- `-p, --prefix <prefix>`: Prefix of the address (default: "")
- `-s, --suffix <suffix>`: Suffix of the address (default: "")
- `-c, --case-sensitive`: Case sensitive vanity address (default: false)
- `-q, --qr-code`: Show a scannable QR code (default: false)
- `-w, --workers`: Number of worker processes to use (default: half the number of CPUs of your system)
- `-h, --help`: Display help for command

## Examples

Generate an address:

```
vanity-solana
```

Generate an address starting with "aa", case insensitive:

```
vanity-solana -p aa
```

Generate an address ending with "zz", case insensitive:

```
vanity-solana -s zz
```

Generate an address starting with "A" and ending with "z", case sensitive:

```
vanity-solana -p A -s z -c
```

Generate an address and show a QR code to scan:

```
vanity-solana -q
```

Only use 1 worker process:

```
vanity-solana -w 1
```

## Repository

Visit the developer's repository: [vanity-solana GitHub](https://github.com/m2-labs/vanity-solana)
