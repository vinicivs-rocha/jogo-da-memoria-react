var str = "a"
var num = 1
var und;
var nul = null
var bool = true
var separacao = "---------------------------------------------------------------------------------"
var increment = num
var decrement = num
var num1 = 1
var num2 = 2

// Tipos de dados

console.log(typeof str)
console.log(typeof num)
console.log(typeof und)
console.log(typeof nul)
console.log(typeof bool)

console.log(separacao)
// Operadores

console.log(1 + 1)
console.log(1 - 1)
console.log(2 * 3)
console.log(100 / 65)
console.log(100 % 65)
console.log(++num)
console.log(--num)

console.log(separacao)
// Atribuições

console.log("Número 1: " + num1)
console.log("Número 2: " + num2)
console.log("Número 1 = número 2: " + (num1 = num2))
console.log("Número 1 += número 2: " + (num1 += num2))
console.log("Número 1 -= número 2: " + (num1 -= num2))
console.log("Número 1 *= número 2: " + (num1 *= num2))
console.log("Número 1 /= número 2: " + (num1 /= num2))
console.log("Número 1 %= número 2: " + (num1 %= num2))

console.log(separacao);
// Operadores comparativos

console.log("Número 1: " + num1)
console.log("Número 2: " + num2)
console.log("Número 1 == (valor igual) número 2: " + (num1 == num2))
console.log("Número 1 === (valor e tipo iguais) número 2: " + (num1 === num2))
console.log("Número 1 != (valor diferente) número 2: " + (num1 != num2))
console.log("Número 1 !== (valor ou tipo diferente) número 2: " + (num1 !== num2))
console.log("Número 1 > número 2: " + (num1 > num2))
console.log("Número 1 >= número 2: " + (num1 >= num2))
console.log("Número 1 < número 2: " + (num1 < num2))
console.log("Número 1 <= número 2: " + (num1 <= num2))

console.log(separacao)
// Operadores lógicos

console.log("Número 1: " + num1)
console.log("Número 2: " + num2)
console.log("Número 1 entre zero e cinco: " + (num1 > 0 && num1 < 5))
console.log("Número 1 entre zero e cinco ou é zero: " + ((num1 > 0 && num1 < 5) || num1 == 0))
console.log("Não é o caso que o número 2 é 3: " + !(num2 == 3))

console.log(separacao)
// Strings

console.log('Entre "aspas duplas"')
console.log("Entre 'aspas simples'")
console.log('abc' + 'def')

console.log(separacao)
// Transformando strings em números

num1 = '1'
num2 = '2'
console.log('Antes, num1 + num2 = ' + (num1 + num2))
console.log('Depois do parseInt, num1 + num2 = ' + (parseInt(num1) + parseInt(num2)))
