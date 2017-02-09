#!/usr/bin/env node

var program = require('commander')
var chars = require('./charset')

const opts = function (options) {
  return {
    specialCharacters: !options.nospecial,
    numbers: !options.nonums,              // undefined means true
    charsUpper: !options.noupper,          // undefined means true
    chars: !options.nolower                // undefined means true
  }
}

const charset = function (program) {
  const options = opts(program)
  return Object.keys(options)
    .filter(function (k) { return options[k] })
    .map(function (k) { return chars[k] })
    .join('').split('')
}

const randomChar = function (charset) {
  const randomNum = Math.floor(Math.random() * (charset.length))
  return charset[randomNum]
}

function generateRandomPwd (options) {
  const length = options.length || 15
  const chrs = charset(options)
  var pwd = ''
  while (pwd.length < length) {
    pwd += randomChar(chrs)
  }

  return pwd
}

program
  .version('1.0.0')
  .option('-n, --nonums', 'password without numbers')
  .option('-c, --nolower', 'password without lowercase characters')
  .option('-u, --noupper', 'password without uppercase characters')
  .option('-s, --nospecial', 'password without special characters')
  .option('-l, --length <length>', 'specify length of password (default is 15)')

program.on('--help', function () {
  console.log('  Examples:')
  console.log('')
  console.log('     $ pwd-gen --length 10')
  console.log('     $ pwd-gen --nonums')
  console.log('')
})

program.parse(process.argv)

if (require.main === module) {
  console.log(generateRandomPwd(program))
} else {
  module.exports = generateRandomPwd
}
