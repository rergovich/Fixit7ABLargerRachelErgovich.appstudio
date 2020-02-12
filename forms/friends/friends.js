let firstFriend = prompt("Enter the name of your first of three friends.");
let secondFriend = prompt("Enter the name of your second of three friends.");
let thirdFriend = prompt("Enter the name of your third of three friends.");
let friendRank = parseInt(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))

var friendNames = [];

friendNames[1] = firstFriend
friendNames[2] = secondFriend
friendNames[3] = thirdFriend

let bestFriend = friendNames[friendRank] 

if (bestFriend.charAt(0) == "A") {
  alert("Your best friend's name starts with A.")
} else if (bestFriend.charAt(0) == "B") {
  alert("Your best friend's name starts with B.")
} else {
  alert("Your name starts with something other than A or B.")
}