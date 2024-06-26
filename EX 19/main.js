// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
var my_friends = ["yousuf", "kulsoom", "ali", "aaman", "neha"];
console.log("im invited ".concat(my_friends.length, " friend which are following \n"));
for (var i = 0; i < my_friends.length; i++) {
    console.log("".concat(i + 1, " ").concat(my_friends[i]));
}
