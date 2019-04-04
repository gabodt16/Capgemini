//********************* Let **********************
let hello = 'Hello!';

function f(input: boolean) {
  let a = 100;

  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }

  // Error: 'b' doesn't exist here
  return b;
}

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}

//********************* Const **********************
const numLivesForCat = 9;
const kitty = {
  name: 'Aurora',
  numLives: numLivesForCat,
};

// Error
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/

// all "okay"
kitty.name = 'Rory';
kitty.name = 'Kitty';
kitty.name = 'Cat';
kitty.numLives--;
console.log(kitty);

//********************* Destructuring **********************
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

//********************* Spread **********************
let foo = [1, 2];
let bar = [3, 4];
let bothPlus = [0, ...foo, ...bar, 5];
// bothPlus = [0, 1, 2, 3, 4, 5];
console.log(bothPlus);

// Spread objects
let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
let search = { ...defaults, food: 'rich', foo: true };
