function logar() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (name == "ressiu" && email == "ressiu@gmail.com" && senha == "ressiu123") {
    location.href = "/src/page/home.html";
  } else {
    return alert("Senha incorreta");
  }
}
