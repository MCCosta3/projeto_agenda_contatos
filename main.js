const form = document.getElementById("form-agenda");
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeContato = document.getElementById("nome-contato");
  const inputNomeNumero = document.getElementById("nome-numero");

  let linha = "<tr>";
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNomeNumero.value}</td>`;
  linha += `<td>${
    inputNomeNumero.value > 0 ? "Cadastrado" : "??? Completar o número ???"
  }</td>`;

  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
});
