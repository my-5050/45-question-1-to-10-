//3. Name cases: store a person's name in a variable ,
// and then print  that person's name in lowercase, uppercase and titlecase...
var PersonName = "Madhu Yousuf";
// lower case name:
var LowercaseName = PersonName.toLowerCase();
console.log("LowercaseName:", LowercaseName);
// upper case name:
var UppercaseName = PersonName.toUpperCase();
console.log("UppercaseName:", UppercaseName);
//title case name:
console.log("TitlecaseName:", PersonName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
