# Random Password Generator

## Install

```bash
$ npm install pwd-gen
```

## Usage

```javascript
const pwdGen = require('pwd-gen')
const randomPwd = pwdGen(options)
```

Where you can specify which type of characters you want to exclude like this:

```javascript
{
  specialCharacters: Bool,
  numbers: Bool,
  charsUpper: Bool,
  chars: Bool,
  length: Int
}
```

## CLI Usage

```bash
Usage: index [options]

Options:

  -h, --help             output usage information
  -V, --version          output the version number
  -n, --nonums           password without numbers
  -c, --nolower          password without lowercase characters
  -u, --noupper          password without uppercase characters
  -s, --nospecial        password without special characters
  -l, --length <length>  specify length of password (default is 15)

Examples:

   $ pwd-gen --length 10
   $ pwd-gen --nonums
```

## Examples

**Without numbers**
```bash
$ pwd-gen --nonums
=> QPRr&I&vQsg)l%Y
```

**Without uppercase characters**
```bash
$ pwd-gen --noupper
=> cpeaom/i1$%)j+r
```

**Without special characters**
```bash
$ pwd-gen --nospecial
=> oXlEgQHMd5lV3Te
```
