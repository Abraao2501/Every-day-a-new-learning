var evento = document.querySelector(".search");

evento.addEventListener("click", () => {
  let domParser = new DOMParser();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const pesquisarDoc = domParser.parseFromString(xhr.response, "text/html");

      const conteudo = document.querySelector(".conteudo");
      const main = document.querySelector("main");
      const p = pesquisarDoc.querySelector(".pesquisar-conteudo");

      main.remove();
      conteudo.appendChild(p);
    }
  };

  xhr.open("GET", "/pesquisar.html", true);

  xhr.send();
});
