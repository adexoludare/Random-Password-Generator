// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const symbolCharacter = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]
// const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let passwordString = "";

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let hasNumberCharacter = false;
let hasSymbolCharacter = false;

let password1 = "";
let password2 = "";
let passwordLength = 13;

function generatePassword() {
  resetSelection()
  
  if (hasNumberCharacter) {
    passwordString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else if (hasSymbolCharacter) {
    passwordString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-[{]};:'<,.>?/\"";
  } else if (hasNumberCharacter && hasSymbolCharacter) {
    passwordString =
      "0123456789~!@#$%^&*()_+-[{]};ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz:'<,.>?/\"";
  }else{
    passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }

  password1 = "";
  password2 = "";
  for (let i = 0; i < passwordLength; i++) {
    password1 += passwordString[randomNumber()];
    password2 += passwordString[randomNumber()];
  }
  password1El.textContent = password1;
  password2El.textContent = password2;
}

function randomNumber() {
  let i = Math.floor(Math.random() * passwordString.length);
  return i;
}

function getPasswordLength() {
  passwordLength = document.getElementById("password-lenght").value;
}

function setNumner() {
  hasNumberCharacter = !hasNumberCharacter;
  return hasNumberCharacter;
}

function setSymbol(){
   hasSymbolCharacter =!hasSymbolCharacter
   return hasSymbolCharacter
}

function copyPassword1() {
  window.navigator.clipboard.writeText(password1)
  password1El.style.backgroundColor = "#546172"
}
function copyPassword2() {
  window.navigator.clipboard.writeText(password2)
  password2El.style.backgroundColor = "#546172"
}

function resetSelection(){
   password1El.style.backgroundColor = "#273549"
  password2El.style.backgroundColor = "#273549"
}
