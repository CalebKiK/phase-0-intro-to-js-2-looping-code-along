// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
    for (let i=0; i < names.length; i++) {
        const name = names[i];

        const message = `Thank you so much for your thoughtful gift ${name}`;

        messages.push(messages);
    }

    return messages;
}

function countDown(number) {
    if (number < 0) {
        console.log('Please enter a positive integer.');
    }

    while (number >= 0) {
        console.log (number);
        number --;
    }
}
