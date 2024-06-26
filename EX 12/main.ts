// excercise 11:
// let friendsName:string[] = ["Ali" ,"Yousuf" ,"Kulsoom" , "Neha" ,"Aaman"];
// for(let i = 0; i < friendsName.length; i++){                       
// console.log (friendsName[i]);}



// 12.Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.


let friendsName:string[] = ["Ali" ,"Yousuf" ,"Kulsoom" , "Neha" ,"Aaman"];
let message:string=(" will u c0me today?");
for(let i = 0; i < friendsName.length; i++){                       
console.log (friendsName[i] + message);}
