const resultado = document.querySelector(".resultado");
resultado.style.display = "none";

function funcaoCalcular() {
  const form = document.querySelector(".form");
  const botao = form.querySelector("#calcular");

  //Pegando os valores
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");

  botao.addEventListener("click", function () {
    let resul = peso.value / (altura.value * altura.value);
    console.log(peso.value);
  });
}

funcaoCalcular();
