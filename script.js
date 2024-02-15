const host = "api.frankfurter.app";

const currency = document.querySelectorAll("select");

const value = document.getElementById("value");

const display = document.getElementById("display");
//console.log(currency);
fetch(`https://${host}/currencies`)
  .then((resp) => resp.json())
  .then((data) => Object.keys(data))
  .then((currencies) => {
    for (let i = 0; i < currencies.length; i++) {
      let line = `<option value="${currencies[i]}">${currencies[i]}</option>`;
      currency[0].innerHTML += line;
      currency[1].innerHTML += line;
    }
  });

function exchanges() {
  fetch(
    `https://${host}/latest?amount=${value.value}&from=${currency[0].value}&to=${currency[1].value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      display.innerHTML = value.value + ' ' + currency[0].value + ' = ' + Object.values(data.rates)[0] + ' ' + currency[1].value;
    });
}
