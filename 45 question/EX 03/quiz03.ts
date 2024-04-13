

//3. Name cases: store a person's name in a variable ,
// and then print  that person's name in lowercase, uppercase and titlecase...

let PersonName: string = "Madhu Yousuf";

// lower case name:

let LowercaseName: string = PersonName.toLowerCase();
console.log("LowercaseName:",LowercaseName);

// upper case name:

let UppercaseName: string = PersonName.toUpperCase();
console.log("UppercaseName:", UppercaseName);

//title case name:

console.log("TitlecaseName:",PersonName.replace(/\b\w/g, (char)=> char.toUpperCase()));


