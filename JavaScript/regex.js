const username = /Hello world/
const name1 = "Hello world"
console.log(username.test(name1))

const number = 7596998473
const phonereg = /^[6-9]\d{9}$/
console.log(phonereg.test(number))

const email = "maheshDubey12@gmail.com"
const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
console.log(regexemail.test(email))