function validatePassword() {
    let password = document.getElementById("password").value;
    let isValid = true;
    let result= document.querySelector('#result');

    if (password.length < 8) {
        isValid = false;
        result.innerText = "The password must be at least 8 characters or longer";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (password.length > 28) {
        isValid = false;
        result.innerText = "The password cannot be longer than 28 characters";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (!/[A-Z]/.test(password)) {
        isValid = false;
        result.innerText = "Your password must contain at least one capital letter";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (!/[a-z]/.test(password)) {
        isValid = false;
        result.innerText = "Your password must contain at least one lower case letter";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (!/\d/.test(password)) {
        isValid = false;
        result.innerText = "The password must contain at least one number";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        isValid = false;
        result.innerText = "The password must contain at least one special character";
        result.classList.add('wrong');
        result.style.backgroundColor = "#cf7a847f";
      } else if (isValid) {
        result.innerText = "Password is Strong!";
        result.classList.add('correct');
        result.style.backgroundColor = "#367a345b";
    }
  document.querySelector('#check').onclick = playcheck;
  document.querySelector('#check').innerHTML = 'Check again!';
}
    
function playcheck() {
  let password = document.getElementById("password").value;
  let isValid = true;
  let result= document.querySelector('#result');

  if (password.length < 8) {
    isValid = false;
    result.innerText = "The password must be at least 8 characters or longer";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (password.length > 28) {
    isValid = false;
    result.innerText = "The password cannot be longer than 28 characters";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (!/[A-Z]/.test(password)) {
    isValid = false;
    result.innerText = "Your password must contain at least one capital letter";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (!/[a-z]/.test(password)) {
    isValid = false;
    result.innerText = "Your password must contain at least one lower case letter";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (!/\d/.test(password)) {
    isValid = false;
    result.innerText = "The password must contain at least one number";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    isValid = false;
    result.innerText =  "The password must contain at least one special character";
    result.classList.add('wrong');
    result.style.backgroundColor = "#cf7a847f";
  } else if (isValid) {
    result.innerText = "Password is Strong!";
    result.style.backgroundColor = "#367a345b";
    result.classList.add('correct');
  }
}
