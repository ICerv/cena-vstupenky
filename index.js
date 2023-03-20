
const age = Number(prompt('Zadej svuj vek:'));

const plnaCena = 12;
let cena = "";
cena = Math.ceil(cena);

if (age < 6) {
  cena = 0
} else if (age >= 6 && age <= 26) {
  cena = plnaCena + 0.65;
} else if (age >= 27 && age <= 64) {
  cena = plnaCena;
} else {
  cena = plnaCena / 2;
  // cena = plnaCena *0.5;
}

document.body.innerHTML = `
Cena vstupenky je ${cena} Euro.
`
