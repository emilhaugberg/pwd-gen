#!/usr/bin/env node

var program = require('commander')
var chars = require('./charset')

const opts = function (program) {
  return {
    specialCharacters: !program.nospecial, // undefined means true
    numbers: !program.nonums, // undefined means true
    charsUpper: !program.noupper, // undefined means true
    chars: true
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
  const length = program.length || 15
  const chrs = charset(program)
  var pwd = ''
  while (pwd.length < length) {
    pwd += randomChar(chrs)
  }

  return pwd
}

program
  .version('1.0.0')
  .option('-n, --nonums', 'password without numbers')
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

console.log(generateRandomPwd(program))
