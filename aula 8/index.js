const nome = "Henrique"; //String
const num = 12; //Number
let nomeALuno; //undefined -> Não aponta pra nenhuma memória
const sobrenomeAluno = null; //Nulo -> Eu quero; Não aponta para local nenhum na memória;

const aprovado = true; // Boolean True, false valor (lógico)

const a = [1, 2];
const b = a;

//Dado por referencia, aponta pro mesmo dado na memória
console.log(a, b);

b.push(3);
console.log(a, b);

//NaN not a number
