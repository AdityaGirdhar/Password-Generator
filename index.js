const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generate")
let p1 = document.getElementById("pwd1-content")
let p2 = document.getElementById("pwd2-content")

function getRandomChar() {
    return characters[Math.floor(Math.random()*characters.length)]
}

generateButton.addEventListener("click", function() {
    p1.textContent = ""; p2.textContent = ""; 
    for (let i=0; i<15; i++) {
        p1.textContent += getRandomChar()
        p2.textContent += getRandomChar()
    }
})