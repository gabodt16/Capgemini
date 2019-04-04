// The parameters 'x' and 'y' have the type number
let myAdd: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y;
};

console.log(myAdd(5, 12));

////////////////////////////////////////////////////////////////////////////////

function buildName(
  firstName: string,
  lastName?: string,
  title: string = 'Mr.',
) {
  if (lastName) return title + ' ' + firstName + ' ' + lastName;
  else return title + ' ' + firstName;
}

console.log(buildName('Santos'));
console.log(buildName('Santos', 'Jiménez'));
console.log(buildName('Pepa', 'Pérez', 'Mrs.'));
console.log(buildName('Pepa', undefined, 'Mrs.'));

////////////////////////////////////////////////////////////////////////////////

function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

let employeeName = buildName2('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
console.log(employeeName);

///////////////////////////////////////////////////////////////

/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}*/

/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}*/

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
