function principal() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const resultado = document.querySelector(".resultado");
    resultado.classList.add("style-resultado");

    const inputPeso = form.querySelector("#peso");
    const inputAltura = form.querySelector("#altura");

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    let msg = validaNumber(peso, altura);

    if (msg) {
      return (resultado.innerHTML = msg);
    } else {
      let imc = calculaImc(peso, altura);
      let classificacao = classifica(imc);

      mostraResultado(imc, classificacao);
    }
  });
}

function validaNumber(peso, altura) {
  const resultado = document.querySelector(".resultado");
  if (!peso) {
    // Se peso nao for verdadeiro(se for uma string, pois tudo que nao tem valor é falso resumindo)
    resultado.style.backgroundColor = "#dc2e37";
    return (resultado.innerHTML = "Peso inválido"); //Return aqui para parar a execução da função
  } else if (!altura) {
    // Se altura nao for verdadeiro(se for uma string, pois tudo que nao tem valor é falso resumindo)
    resultado.style.backgroundColor = "#dc2e37";
    return (resultado.innerHTML = "Altura Inválida"); //True
  }

  return false;
}

function calculaImc(peso, altura) {
  return peso / altura ** 2;
}

function classifica(resultado) {
  if (resultado < 18.5) {
    return "Abaixo do peso";
  } else if (resultado < 24.9) {
    return "Peso Normal";
  } else if (resultado < 29.9) {
    return "Sobrepeso";
  } else if (resultado < 34.9) {
    return "Obesidade grau 1";
  } else if (resultado < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

function mostraResultado(imc, classificacao) {
  const resultado = document.querySelector(".resultado");
  resultado.style.backgroundColor = "";
  resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (${classificacao})`;
}

principal();
