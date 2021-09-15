/*
&& -> false && true
|| -> OR true && false -> vai retonar o vslor verdadeiro
*/
// O OR precisa de apenas uma expressao verdadeira para retornar verdadeiro. se todos os valores forem falso o js ira xecultar o ultimo valor.

const a = 0

const b = null

const c = 'false'

const d = false

const e = NaN

console.log(a || b || c || d || e)