/*
Primitivos (imutáveis) - string, number, boolena, undefined, null (bigint, symbol) - Valores copiados


Referencia (mutável) - Array, Object, function // Apontam pro mesmo endereço de memória
 */

const a = {
  nome: "Henrique",
  sobrenome: "Santos",
};
//const b = a; Isso aqui aponta aponta pro mesmo local da memoria

//Se eu quisesse copiar o valor de b para a
//Spread
const b = { ...a }; //agora o valor de b é independente
