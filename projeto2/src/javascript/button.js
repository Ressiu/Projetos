const caixinha = document.getElementById("caixinha");
const btn = document.getElementById("next");

caixinha.addEventListener("click", () => {
  btn.classList.toggle("active");
});

///

function next() {
  location.href = "/src/pages/home.html";
}
