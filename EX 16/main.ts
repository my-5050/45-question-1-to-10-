//16. More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest
//  to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list:string[]=["Yousuf","Kulsoom","Sonia","Ali"];

for (let i =0 ;i <guest_list.length; i++){

     console.log("Respected Sir/Madam")
    console.log(guest_list[i],'You are invited to dinner at my home')
    console.log("\nThank you\n")};
console.log ("I arranged the big round DINNER table and invite 3 more friends")



guest_list.unshift("Rabia");
guest_list.splice(2,0,"Rehman");
guest_list.push("Arman");
for (let i =0 ;i <guest_list.length; i++){

    console.log("Respected Sir/Madam")
    console.log(guest_list[i],'You invited to dinner at my home')
    console.log("\nThank you\n")};







