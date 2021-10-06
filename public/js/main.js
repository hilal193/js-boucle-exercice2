// 1
// for (let index = 0; index <= 20; index++) {
//     if (index% 2 === 0) {
//         console.log("nombre paire: "+index);
//     }else{
//         console.log("nombre impaire:" +index);
//     }   
// }

// 2
// let tableau=["hilal","hussein","ayhan","heredia","jon","philippe","georg","wassim","genc","moh","zaf"];

// for (let index = 0; index < tableau.length; index++) {
// console.log("bonjour : " + tableau[index]);    
// }

// 3
// let nombre = Number(prompt("inserer un nombre :"));


// for (let index = 0; index <= nombre; index++) {
//     console.log(index);
    
// }

// FOREACH
// 1
// let tableau = [1,2,3,4,5];
// tableau.forEach(element => {
//     console.log(element);
// });

// 2
let tableauNom = ["hilal","hussein","ayhan","heredia","jon","philippe","georg","wassim","genc","moh","zaf"];

tableauNom.forEach((element,hilal) => {
    console.log(`Bonjour : ${element} + position : ${hilal}`);
});