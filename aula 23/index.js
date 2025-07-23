/*
Qualquer coisa que seja diferente disso:
FALSY
false
0
" "
null / undefined
NaN
é verdadeiro
*/

function falaOi() {
  return "oi";
}

let vaiExecutar = "Joãozinho"; //True

console.log(vaiExecutar && falaOi()); //Verifica e fala oi
//Sem usar nenhuma estrutura condicional verificamos o valor e executamos a funcao
