const formInput = document.getElementById('form')
const nomeInput = document.querySelector('.nomecomple')
const emailInput = document.querySelector('.email')
const nascimImput = document.querySelector('.datanasc')
const senhaInput = document.querySelector('.senha')
const confSenhaInput = document.querySelector('.confirmars')
const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const submit = document.querySelector('#fluentWind')

submit.addEventListener("click", (e) => {

  e.preventDefault();

  console.log('deu certo')
  
  //validação do nome
  if (nomeInput.value === "") {
    alert("Por favor digite o nome válido.");
    return;
  }
})