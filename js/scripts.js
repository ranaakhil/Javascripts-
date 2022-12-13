// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
 
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
 
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// TEST DATA 1 //
let marksWeight = 78;
let marksTall = 1.69;
let johnWeight = 92;
let johnTall = 1.95;

let marksBmi = marksWeight/(marksTall*marksTall);
let johnBmi = johnWeight/(johnTall*johnTall);


console.log(marksBmi);
console.log(johnBmi);

let markHigherBMI = marksBmi>johnBmi;
console.log(markHigherBMI);

if(markHigherBMI){
    console.log("Mark's BMI is higher than john's");
}else{
    console.log("John's BMI is higher than Mark's!")
}

console.log(`Mark's BMI ${marksBmi} is higher than john's ${johnBmi}`)


// TEST DATA 2 //
let marksWeight2 = 95;
let marksTall2 = 1.88;
let johnWeight2 = 85;
let johnTall2 = 1.76;

let marksBmi2 = marksWeight2/(marksTall2*marksTall2);
let johnBmi2 = johnWeight2/(johnTall2*johnTall2);

console.log(marksBmi2);
console.log(johnBmi2);

let johnsHigherBMI2 = marksBmi2>johnBmi2;
console.log(johnsHigherBMI2);

if(johnsHigherBMI2){
   
    console.log("Mark's BMI is higher than john's");
}else{
    console.log("John's BMI is higher than Mark's!")
}
console.log(`John's BMI ${johnBmi2} is higher than mark's ${marksBmi2}`)





// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
 
// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅
//  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
 
// TEST DATA: Test for bill values 275, 40 and 430
 
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 
// GOOD LUCK 😀


let usualTip = 15;
let extraTip = 20;

let bill = 275;

let tip1 = usualTip/100*bill;
let tip2  = extraTip/100*bill;

if(bill>=50 && bill<=300){
    console.log(tip1);
}else{
    console.log(tip2);
}
let total = bill+tip1; 

console.log(`The bill was ${bill}, the tip was ${tip1}, and the total value ${total}`)