$(document).ready(function(){

// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
  {
    nome: 'Graziella',
    peso: 2
  },
  {
    nome: 'BMX',
    peso: 3
  },
  {
    nome: 'Mountain bike',
    peso: 1
  },
  {
    nome: 'Passeggio',
    peso: 5
  },
  {
    nome: 'Pieghevole',
    peso: 4
  },
  {
    nome: 'Elettrica',
    peso: 2
  },
]

  console.log(bikes);

  // Stampare a schermo la bici con peso minore.
  let biciLeggera= bikes[0];

  bikes.forEach((item, i) => {
    if (item.peso < biciLeggera.peso) {
      biciLeggera = item;
    }
  });

  console.log(biciLeggera);
  $('#bici-leggera').text(`La bici ${biciLeggera.nome} è la più leggera. Il suo peso è di ${biciLeggera.peso} .`)


})
