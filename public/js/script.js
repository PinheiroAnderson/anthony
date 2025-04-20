const dataAniversario = new Date("2025-05-31T15:00:00").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const distancia = dataAniversario - agora;

  if (distancia < 0) {
    document.getElementById("contador").innerHTML = "O grande dia chegou! 👨‍🚀🎉";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `Faltam ${dias} dias ${horas}h ${minutos}m ${segundos}s para o grande dia! 👨‍🚀`;
}

function atualizarAno() {
  const anoAtual = new Date().getFullYear(); 
  document.getElementById("anoAtual").textContent = anoAtual; 
}


document.addEventListener("DOMContentLoaded", () => {
  atualizarAno(); 
});

setInterval(atualizarContador, 1000);
