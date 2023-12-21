const prompt = require('prompt-sync')({sigint: true})//Habilita receber valores do teclado


let nomeHeroi //variável para armazenar o nome do herói
let xp //variável para armazenar a experiência do herói

nomeHeroi = prompt("Digite o nome do seu Herói e receba seu xp: ")//aguarda usuário digitar nome do herói
xp = Math.floor(Math.random(1000)  * 10002)

if(xp <= 1000){
    console.log("Seu XP é: " + xp + " Seu nível é: Ferro")

}else if( xp >= 1001 && xp <=2000 ){
    console.log("Seu XP é: " + xp + " Seu nível é: Bronze")

}else if(xp >= 2001 && xp <=5000){
    console.log("Seu XP é: " + xp + " Seu nível é: Prata")

}else if(xp >= 5001 && xp <= 7000){
    console.log("Seu XP é: " + xp + " Seu nível é: Ouro")

}else if(xp >= 7001 && xp <= 8000){
    console.log("Seu XP é: " + xp + " Seu nível é: Platina")

}else if(xp >= 8001 && xp <= 9000){
    console.log("Seu XP é: " + xp + " Seu nível é: Ascendente")

}else if(xp >= 9001 && xp <= 10000){
    console.log("Seu XP é: " + xp + "Seu nível é: Imortal")

}else{
    console.log("Seu XP é: " + xp + "Seu nível é: Radiante")
