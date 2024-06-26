// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

let guest_list:string[]=["Yousuf","Kulsoom","Sonia","Ali", "Rabia","Rehman","Arman"];
console.log("sorry guyz ! new dinner table wont arrive on time i have space only 2 person")

console.log("Mr/Madam" ,guest_list.pop(),"SORRY! you are not invited tonight dinner at my home");
console.log("Mr/Madam" ,guest_list.pop(),"SORRY! you are not invited tonight dinner at my home");
console.log("Mr/Madam" ,guest_list.pop(),"SORRY! you are not invited tonight dinner at my home");
console.log("Mr/Madam" ,guest_list.pop(),"SORRY! you are not invited tonight dinner at my home");
console.log("Mr/Madam" ,guest_list.pop(),"SORRY! you are not invited tonight dinner at my home");


for (let i =0 ;i <guest_list.length; i++){
    console.log(guest_list[i],"you are invited tonight dinner at my home")}

   
guest_list.pop();
guest_list.pop();

console.log("guest_list",guest_list);





