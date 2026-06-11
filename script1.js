let amount = 2500;
if (amount >= 500) {
    let notes = Math.floor(amount / 500); 
    console.log("500 notes x " + notes);
    amount = amount % 500;                
}
if (amount >= 200) {
    let notes = Math.floor(amount / 200);
    console.log("200 notes x " + notes);
    amount = amount % 200;
}
if (amount >= 100) {
    let notes = Math.floor(amount / 100);
    console.log("100 notes x " + notes);
    amount = amount % 100;
}
if (amount > 0) {
    console.log("Remaining change: " + amount);
}
 let prize=5;
let n=5;
gift=prize%n;
for(n=1;n<=10;n++)
    {

    
      console.log("the person "+n+" will get the gift ")
    }
