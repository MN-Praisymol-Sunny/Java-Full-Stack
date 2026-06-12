/*let name="praisy";
console.log(name);
var age="20";
const height="1.35";
console.log(age);
console.log(height);
console.log(age+5);
console.log(age-5);
console.log(age/5);
console.log(age*5);
console.log(name+age);
age+=10;
console.log(age);
age-=10;
console.log(age);
age*=10;
console.log(age);
age/=10;
console.log(age);
age%=2
console.log(age);
let age1=25;
let age2=30;
console.log(age1==age2);
console.log(age1!=age2);
console.log(age1>age2);
console.log(age1<age2);
console.log(age1>=age2);
console.log(age1<=age2);
let food="pizza";
let food1="dosa";
let food2="burger";
let food3="shawarma";
let drink="coke";
if(food=="pizza" && drink=="coke"){
    console.log("I am happy");
}
else if(food=="dosa" || drink=="coke")
{
    console.log("I am sad");
}

for(let i=1;i<=30;i++){
    console.log("Day " + i + " completed");

   
    while(i%5==0){
        console.log("Take a break");
        break;
    }
}
let user_name ="praisy";
let password="12345";
let name_2="sivani";
let pin_2="54321";
let name_1="poojitha";
let pin_1="67890";
if(name_2=="sivani"){

    if(pin_2=="54321")
        {
            console.log("Welcome " + name_2);
     }
}
for(let i=1;i<=10;i++)
    {
        console.log("2 x "+i+"="+(2*i));

}

function cook()
{
    console.log("por the flour in tawa");
    console.log("rub it round order with gareta");
    console.log("spill some oil");
    console.log("twist it with dosa gareta");
    console.log("atlast serve it to praisy");
}
cook();
function dishwash(vessels){
    console.log("we have to wash "+ vessels+" vessels");

}
dishwash(2);
function guess(n)
{
    let guess=Number(prompt ("Enter a number:"));
    if(n==guess){
        console.log("you guessed it right");
    }
    else if(n<guess){
        console.log("try a small number");
    }
    else{
        console.log("try a big number");
        guess(n);
    }
}
let number=Math.floor(Math.random()*100)
function num(n){
    if(n>10){
        return;
    }
     
    
    console.log(n);
    n+=1;
    num(n);
    
}
num(1);
function generateSecretNumber() {
    return String(Math.floor(Math.random() * 900) + 100);
}

function evaluateGuess(secret, guess) {
    const results = [];
    for (let i = 0; i < 3; i++) {
        if (guess[i] === secret[i]) {
            results.push(`Digit ${guess[i]} is correct and in the right position (${i + 1}).`);
        } else if (secret.includes(guess[i])) {
            results.push(`Digit ${guess[i]} is in the number but in a different position.`);
        } else {
            results.push(`Digit ${guess[i]} is not in the number.`);
        }
    }
    return results;
}

function guessThreeDigitNumber() {
    const secret = generateSecretNumber();
    let attempts = 0;

    while (true) {
        const userGuess = prompt("Guess a 3-digit number:");
        if (userGuess === null) {
            console.log("Game cancelled.");
            break;
        }

        const guess = userGuess.trim();
        if (!/^[0-9]{3}$/.test(guess)) {
            alert("Please enter exactly 3 digits (e.g. 427).");
            continue;
        }

        attempts++;
        const feedback = evaluateGuess(secret, guess);
        alert(`Attempt ${attempts}:\n${feedback.join('\n')}`);

        if (guess === secret) {
            alert(`Correct! The secret number was ${secret}. You guessed it in ${attempts} attempts.`);
            console.log(`Secret number ${secret} guessed in ${attempts} attempts.`);
            break;
        }
    }
}

guessThreeDigitNumber();

/*let chocolates=["melodi","fivestar","kitkat","kachamango","dairymilk","milkybar"];
let sales={
    praisy:chocolates[0],
    sivani:chocolates[1],
    poojitha:chocolates[2],
    anusha:chocolates[3],
    haseena:chocolates[4],
    kusuma:chocolates[5],
    manasa:chocolates[6]

};
console.log(sales);
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);

function guess(c){
    let userGuess=Character(prompt("Enter a letter:"));

    if(userGuess==c){
        console.log("Congratulations! You guessed the letter.");
    } else if (userGuess < c) {
        console.log("Too low! Try again.");
        guess(c);
    } else {
        console.log("Too high! Try again.");
        guess(c);
    }
}

    let Character=Math.floor(Math.random()*26)+1;
    guess(Character);*/