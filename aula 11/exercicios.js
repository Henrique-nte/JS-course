let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let a = varA;

varA = varB;
varB = varC;
varC = a;

// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
