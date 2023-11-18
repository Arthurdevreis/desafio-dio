// Defina o nome e a experiência do herói

let nomeDoHeroi = "Arthur"
let experienciaDoHeroi = 10002

// Utilize uma estrutura de decisão para classificar o nível
let niVelDoheroi

if (experienciaDoHeroi < 1000) {
  niVelDoheroi = "Ferro"
}

else if (experienciaDoHeroi <= 2000) {
  niVelDoheroi = "Bronze"
}

else if (experienciaDoHeroi <= 5000) {
  niVelDoheroi = "Prata"
}

else if (experienciaDoHeroi <= 7000) {
  niVelDoheroi = "Ouro"
}

else if (experienciaDoHeroi <= 8000) {
  niVelDoheroi = "Platina"
}

else if (experienciaDoHeroi <= 9000) {
  niVelDoheroi = "Ascendente"
}

else if (experienciaDoHeroi <= 10000) {
  niVelDoheroi = "Imortal"
}

else {
  niVelDoheroi = "Radiante"
}

// Exiba a mensagem de saída  
console.log("O Herói de nome " + nomeDoHeroi + " está no nívelde " + niVelDoheroi)