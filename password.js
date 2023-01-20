let generateBtn = document.querySelector(".Generate");
let passwordView = document.querySelectorAll(`.display-passwaord`);
let filter = document.querySelector(".filter");
//console.log(passwordView) checkpasswordView 
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let length = 15;
randomNumber = () =>{
let random = Math.floor(Math.random()*characters.length);
return characters[random];
}

generate = () =>{
    passwordView[0].textContent = "";
    passwordView[1].textContent = "";
    for(let i = 0; i<length; i++){
        passwordView[0].textContent+=randomNumber();
        passwordView[1].textContent+=randomNumber();
    }
}

generateBtn.addEventListener("click", generate);


let notSymbol = characters.filter(item => !/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(item));
randomshymbol = () => {
let random = Math.floor(Math.random()*notSymbol.length);
return notSymbol[random];
}

let filterSymbol = () => {
    passwordView[0].textContent = "";
    passwordView[1].textContent = "";
    for(let i = 0; i<length; i++){
        passwordView[0].textContent+=randomshymbol();
        passwordView[1].textContent+=randomshymbol();
    }
}

filter.addEventListener("click",filterSymbol)