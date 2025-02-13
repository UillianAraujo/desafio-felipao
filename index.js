let nomeHeroi = "POMBO VOADOR"
let xp = "7580"

function determinarNivel(xp) {
    let nivel;
    switch (true) {
        case (xp <= 1000):
            nivel = "FERRO";
            break
        case (xp >= 1001 && xp <= 2000):
            nivel = "BRONZE"
            break
        case (xp >= 2001 && xp <= 5000):
            nivel = "PRATA"
            break
        case (xp >= 5001 && xp <= 7000):
            nivel = "OURO"
            break
        case (xp >= 7001 && xp <= 8000):
            nivel = "PLATINA"
            break
        case (xp >= 8001 && xp <= 9000):
            nivel = "ASCENDENTE"
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "RADIANTE"
            break
        default:
            nivel = "IMORTAL"
    }
    return nivel;
}

let nivel = determinarNivel(xp);
console.log("O Herói " + nomeHeroi + " está no nível " + nivel + ". ")