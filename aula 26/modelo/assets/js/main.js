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

    if (isInvalidNumber(peso, altura, resultado)) {
      return; //Se validarNumber receber true ou seja se os valores forem inválido ele interrompe a execução e mostra a mensagem que tem na funcao validaNumber
    }
    //Se receber false, continua executando...

    let imc = calculaImc(peso, altura);
    let classificacao = classifica(imc);

    mostraResultado(imc, classificacao);
  });
}

function isInvalidNumber(peso, altura, resultado) {
  if (!peso) {
    // Se peso nao for verdadeiro(se for uma string, pois tudo que nao tem valor é falso resumindo)
    resultado.classList.add("style-wrong");
    return (resultado.innerHTML = "Peso inválido"); //True
  } else if (!altura) {
    // Contrário do if acima
    resultado.classList.add("style-wrong");
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

  if (resultado.classList.contains("style-wrong")) {
    resultado.classList.remove("style-wrong");
  }
  resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (${classificacao})`;
}

principal();
