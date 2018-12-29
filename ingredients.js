var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var list = 0;
console.log("Here are the ingredients:");

while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("\nHere are the ingredients...again:");

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("\nHere are the ingredients...again...backwards?!:");

for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}