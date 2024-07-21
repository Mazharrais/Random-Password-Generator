

const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKYLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^~&>{[=/_}]";

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
}