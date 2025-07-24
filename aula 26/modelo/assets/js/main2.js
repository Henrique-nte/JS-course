function principal() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputPeso = form.querySelector("#peso");
    const inputAltura = form.querySelector("#altura");

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    let imc = calculaImc(peso, altura);
    let classificacao = classifica(resultado);

    mostra(imc, classificacao);
  });
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

function mostra(imc, classificacao) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = `Seu imc é ${msg.toFixed(2)} (${classificacao})`;
}
