function funcaoPrincipal() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  resultado.style.display = "none";

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");

    let valorPeso = peso.value;
    let valorAltura = altura.value;
    let resul = valorPeso / (valorAltura * valorAltura);

    //Verificar se é valido
    if (isNaN(Number(valorPeso))) {
      resultado.innerHTML = "Peso inválido";
      resultado.style.backgroundColor = "rgb(208, 29, 29)";
    } else if (isNaN(Number(valorAltura))) {
      resultado.innerHTML = "Altura inválida";
      resultado.style.backgroundColor = "rgb(208, 29, 29)";
    } else {
      if (resul < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (resul < 24.9) {
        classificacao = "Peso Normal";
      } else if (resul < 29.9) {
        classificacao = "Sobrepeso";
      } else if (resul < 34.9) {
        classificacao = "Obesidade grau 1";
      } else if (resul < 39.9) {
        classificacao = "Obesidade grau 2";
      } else {
        classificacao = "Obesidade grau 3";
      }
      resultado.style.backgroundColor = "";
      resultado.innerHTML = `Seu IMC é ${resul.toFixed(2)} (${classificacao})`;
    }

    resultado.style.display = "block";
  });
}
funcaoPrincipal();
