const formInput = document.getElementById('form')
const nomeInput = document.querySelector('.nomecomple')
const emailInput = document.querySelector('.email')
const nascimImput = document.querySelector('.datanasc')
const senhaInput = document.querySelector('.senha')
const confSenhaInput = document.querySelector('.confirmars')
const checkInput = document.querySelector('.checkbox')
const button = document.querySelector('#fluentWind')

button.addEventListener("click", (e) => {

  e.preventDefault();

  console.log('deu certo')
  
  //validação do nome
  if (nomeInput.value === "") {
    alert("Por favor, preencha o seu nome.")
    return;
  } 

  //verificar se o e-mail está preenchido e se é válido
  if(emailInput.value === "" || !isEmailvalid(emailInput.value)){
    alert("Por favor, preencha o seu e-mail");
    return
  }

  // Vericar se senha esta preenchida
  if(!validatePassword(senhaInput.value, 8)) {
    alert("A senha precisa de oito digitos");
    return;
  }
  
  
});

//função que valida e-mail
function isEmailvalid(email) {

  //criar uma regex para válidar e-mail
  const emailRegex = new RegExp (
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }

}


//Função que valida a senha

function validatePassword (password, minDigitos) {
  if(password.length >= minDigitos) {
    //senha válida
    return true;
  } else {
    //senha inválida
    return false;
  }
}