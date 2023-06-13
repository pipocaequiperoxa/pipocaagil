const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const dateInput = document.querySelector('.date')
const password = document.querySelector('.password')
const password_2 = document.querySelector('.password_2')
const submit = document.getElementById('button')
const formInput = document.getElementById('form')


// variaveis de validação de erros
const errorMessage = document.querySelector('.msg')
const errorMessageEmail = document.querySelector('.msgEmail')
const errorMessageDate = document.querySelector('.msgDate')
const errorMessagePassword = document.querySelector('.msgPassword')
const errorMessagePassword_2 = document.querySelector('.msgPassword_2')
const errorMessageCheck = document.querySelector('.msgcheck')


submit.addEventListener ('click', (e) =>{
  e.preventDefault()

  //validação do nome
  const nameValue = nameInput.value
  
  if(nameValue === ""){
    errorMessage.textContent= "Favor preencher nome completo!";
    errorMessage.classList= "errorInput";
    return;
  } else {
    errorMessage.textContent = "";
    errorMessage.classList = "";
  }

  //validação do e-mail
  const emailValue = emailInput.value
  
  if(emailValue === "" || !isEmailValid(emailInput.value)){
    errorMessageEmail.textContent= "Preencha seu e-mail";
    errorMessageEmail.classList= "errorInput";
    return;
  } else{
    errorMessageEmail.textContent = "";
    errorMessageEmail.classList = "";
  }

  //validação Data de nascimento
  const dateValue = dateInput.value

  if(dateValue ==="" || !maiorIdade(dateInput.value)){
    errorMessageDate.textContent = "É preciso ter mais que 18 anos";
    errorMessageDate.classList = "errorInput";
  }else {
    errorMessageDate.textContent = "";
    errorMessageDate.classList = "";
  }

  //validação Senha
  let passwordValue = password.value

  if(passwordValue === "" || !acessPassword(password.value)) {
    errorMessagePassword.textContent = "Senha deve conter: Letra Maiúscula e Minúscula, um carácter especial e um número.";
    errorMessagePassword.classList="errorInput";
  }else {
    errorMessagePassword.textContent = "";
    errorMessagePassword.classList = "";
  }

  //validação da confirmaçãod e senha
  let passwordValue_2 = password_2.value

  if (passwordValue_2 !== passwordValue){
    errorMessagePassword_2.textContent = "As senhas devem ser iguais.";
    errorMessagePassword_2.classList = "errorInput";
  } else {
    errorMessagePassword_2.textContent = "";
    errorMessagePassword_2.classList = "";
  }

 });

//Função que valida e-mail
function isEmailValid(email) {

  //criar uma regex para validar email
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  } 
    return false;
}

//função para maior de idade
function maiorIdade () {
  
  let nasc = dateInput.value.split("-").map(Number);

  let dataAceita = new Date(nasc[0] + 18, nasc[1] -1, nasc[2]);
  let agora = new Date();

  if(dataAceita <= agora){
    return true;
  }
    return false;

}

//função para validar senha

function acessPassword (senha) {

  let senhaRegex = new RegExp (
    /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,}$/
  );

  if(senhaRegex.test(senha)) {
    return true;
  } 
    return false;

}