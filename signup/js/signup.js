const buttonInput = document.getElementById('button')

buttonInput.addEventListener('click', (event) => {
  event.preventDefault()

  const nomeInput = document.querySelector('.nomecomple');
  const emailInput = document.querySelector('.email');
  const dataNasciInput = document.querySelector('.datadenasc');
   let senhaInput = document.querySelector('.senha')
   const senhaCorreta = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  
  if(nomeInput.value === ""){
    nomeInput.classList.add("errorInput")
  } else {
    nomeInput.classList.remove("errorInput")
  }

  if(emailInput.value === "") {
    emailInput.classList.add("errorInput")
  } else {
    emailInput.classList.remove("errorInput")
  }

  if(dataNasciInput.value == ""){
    dataNasciInput.classList.add("errorInput")
  } else {
    dataNasciInput.classList.remove("errorInput")
  }

  if(senhaInput == senhaCorreta ) {
    
  }

  if(emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf(".") == -1 || (emailInput.value.indexOf(".") - emailInput.value.indexOf("@") == 1)) {
  emailInput.classList.add("errorInput")
  }
 
    
      
})




