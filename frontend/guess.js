// let maximum = parseInt(prompt("Enter a maximum number"));

// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number"));

// }

// let targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {

//     if (guess == 'q') {
//         break;
//     }

//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("To high!Enter a new guess");
//     }
//     else {
//         guess = prompt("To low!Enter a new guess");
//     }

// }
// if (guess == 'q') {
//     console.log("OK!YOU QUIT");
// }
// else {
//     console.log("congrats!");
//     console.log(`YOU GOT IT IN:${attempts} attempts`);
// }

// iterating over objets

let testscores = {
    puneet: 81,
    ram: 90,
    colt: 76,
    yash: 90,
    light: 45,
    elle: 95,
    shyam: 70,
    tanmay: 100,
    satyam: 88,
    asif: 100


}

for (let person in testscores) {
    console.log(`${person} scored ${testscores[person]}`);
}