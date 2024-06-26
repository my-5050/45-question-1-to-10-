"use strict";
/*
15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end
 of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest
who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
let guest_list = ["Yousuf", "Kulsoom", "Sonia", "Ali"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam,");
    console.log(guest_list[i], "You invited to dinner at hotel pc");
    console.log("\nThank you\n");
}
;
console.log("\nDue to some reason", guest_list[1], "will not come today on dinner,so i am inviting Nareeman\n");
guest_list[1] = "Nareeman";
for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam,");
    console.log(guest_list[i], "You invited to dinner at hotel pc");
    console.log("\nThank you\n");
}
;
