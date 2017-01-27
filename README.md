# Random Password Generator

## Install

```bash
$ npm install pwd-gen
```

## CLI Usage

```bash
Usage: pwd-gen [options]

Options:

  -h, --help             output usage information
  -V, --version          output the version numbers
  -n, --nonums           password without numbers
  -u, --noupper          password without uppercase characters
  -s, --nospecial        password without special characters
  -l, --length <length>  specify length of password (default is 15)

Examples:

   $ pwd-gen --length 10
   $ pwd-gen --nospecial
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
