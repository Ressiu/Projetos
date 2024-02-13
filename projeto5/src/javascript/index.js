function drowdownclick() {
  const dropdown = document.getElementById("dropdown");
  const dropdownList = document.getElementById("dropdown-list");
  const iconDropdown = document.getElementById("icon-dropdown");

  dropdown.addEventListener("click", () => {
    dropdownList.classList.toggle("dropdown");
    iconDropdown.classList.toggle("rotate");
  });
}

function mouseinimg() {
  const iconRefresh = document.getElementById("refresh");

  iconRefresh.classList.add("refresh-anim");
}

function mouseoutimg() {
  const iconRefresh = document.getElementById("refresh");

  iconRefresh.classList.remove("refresh-anim");
}

function showPix() {
  const solicitar = document.getElementById("solicitar");
  const pix = document.getElementById("chavepix");
  const labelpix = document.getElementById("labelchavepix");

  pix.classList.add("PIX");
  labelpix.classList.add("PIX");
}

function showSubmit() {
  const solicitar = document.getElementById("solicitar");
  const pix = document.getElementById("chavepix");
  const reset = document.getElementById("resetar");

  solicitar.classList.add("showbtn");
  reset.classList.add("showbtn");
}

async function alertaSaque() {
  const valorsaque = document.getElementById("valorsaque").value;
  const pix = document.getElementById("chavepix").value;
  const sifrao = "R$";
  const reais = "Reais";

  if (valorsaque == false) {
    alert(
      `Ops, parece que você tentou realizar um saque de R$0,00 tente novamente!`
    );
  } else if (valorsaque != false) {
    alert(
      `Saque de ${sifrao}${valorsaque}${reais} realizado com êxito! | Destinatário: ${pix}`
    );
  }
}

function contatar(){
  location.href='https://www.instagram.com/ressiuz/';
}