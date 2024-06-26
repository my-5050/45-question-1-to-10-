//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order. done
// • Print your array in alphabetical order without modifying the actual list. done
// • Show that your array is still in its original order by printing it. doen
// • Print your array in reverse alphabetical order without changing the order of the original list.done
// • Show that your array is still in its original order by printing it again.done
// • Reverse the order of your list. Print the array to show that its order has changed. done
// • Reverse the order of your list again. Print the list to show it’s back to its original order.done
// • Sort your array so it’s stored in alphabetical order.
//  Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
// Print the list to show that its order has changed.
console.log("Places i want to visit");
var myPlaces = ["AMERICA", "LONDON", "ITALY", "NEWZELAND", "TURKEY"];
console.log(myPlaces);
// // copy of array:
var copy_of_array = myPlaces.slice();
// alphabetic Array:
var alphabetic_array = copy_of_array.sort();
console.log("Alphabetic_array", alphabetic_array);
// again print original array:
console.log("original_array", myPlaces);
// Reversed the copy array :
var reversedarray = copy_of_array.reverse();
console.log("Reversed_array", reversedarray);
// // orinal print again:
console.log("Original_array", myPlaces);
// reverse the original array:
var reverse_orignal_array = myPlaces.reverse();
console.log("Reverse_orignal_array", reverse_orignal_array);
// again reverse the original array :
var again_reverse_orignal_array = reverse_orignal_array.reverse();
console.log("Again_reverse_orignal_array", again_reverse_orignal_array);
// again sort array alphatic order:
var alpha_order = again_reverse_orignal_array.sort();
console.log("Again alpha order", alpha_order);
var reverse_alpha_order = alpha_order.reverse();
console.log("Reverse_alpha_order", reverse_alpha_order);
