const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


people.forEach((personName) => {

  console.log(personName.name);
  
  });






  
// VERSIONE ESTESA PER ESERCITARMI

// for(let i = 0; i < people.length; i++){

//     personName = people[i];
//     console.log(personName.name);
// };