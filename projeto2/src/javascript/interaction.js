var usuario = window.prompt("Olá, seja bem-vindo, qual é o seu nome?");

function gift() {
  const texto = document.getElementById("hello");

  texto.innerHTML = `Hello ${usuario} ❤❤`;
}

function zap() {
  const botao = document.getElementById("btn-contato");
  const icone = document.getElementById("logo-zap");

  if (botao.classList == null) {
    botao.classList.add("padrao");
  } else {
    icone.addEventListener("click", () => {
      botao.classList.remove("padrao", "ig", "github");
      botao.classList.add("zap");
      botao.innerHTML = "WhatsApp";
    });
  }
}

function ig() {
  const botao = document.getElementById("btn-contato");
  const icone = document.getElementById("logo-ig");

  if (botao.classList == null) {
    botao.classList.add("padrao");
  } else {
    icone.addEventListener("click", () => {
      botao.classList.remove("padrao", "zap", "github");
      botao.classList.add("ig");
      botao.innerHTML = "Instagram";
    });
  }
}

function github() {
  const botao = document.getElementById("btn-contato");
  const icone = document.getElementById("logo-github");

  if (botao.classList == null) {
    botao.classList.add("padrao");
  } else {
    icone.addEventListener("click", () => {
      botao.classList.remove("padrao", "zap", "ig");
      botao.classList.add("github");
      botao.innerHTML = "Github";
    });
  }
}

function link() {
  const btn = document.getElementById("btn-contato");

  if (btn.classList == "zap") {
    location.href = "https://wa.me//+5515996607614";
  } else if (btn.classList == "ig") {
    location.href = "https://www.instagram.com/ressiuz/";
  } else if (btn.classList == "github") {
    location.href = "https://github.com/Ressiu";
  }
}
