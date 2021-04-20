/*Ajustando Responsividade*/
if (window.matchMedia("(max-width: 742px)").matches) {
  const tableResponsive = document.querySelector("table");
  tableResponsive.classList.add("table-responsive");
}

/* == Night Mode == */
const toggleButton = document.querySelector(".toggleButton");
const toggleButtonContainer = document.querySelector(".toggleContainer");
const thead = document.querySelector("thead");
const th = document.querySelectorAll("th");
const td = document.querySelectorAll("td");
const button = document.querySelectorAll("button");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("toggleButtonActived");
  toggleButtonContainer.classList.toggle("toggleContainerActived");

  th.forEach((currentValue, indice) => {
    if (indice > 5) {
      currentValue.classList.toggle("thActived");
    }
  });

  button.forEach((currentValue) => {
    currentValue.classList.toggle("buttonActived");
  });

  td.forEach((currentValue) => {
    currentValue.classList.toggle("tdActived");
  });
  thead.classList.toggle("theadActived");
});
